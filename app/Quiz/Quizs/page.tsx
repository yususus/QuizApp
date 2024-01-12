'use client';
import React, { useEffect, useState } from 'react';
import { FormControl, FormControlLabel, Radio, FormHelperText, Button, RadioGroup } from '@mui/material';
import './quiz.css';




const Quiz = ({
  searchParams,
}: {
  searchParams: {
    userId(userId: any): unknown;
    name: string;
  };
}) => {
  const [questions, setQuestions] = useState([]);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Sana Güveniyorum');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [count, setCount] = useState(10);
  const [disabled, setDisabled] = useState(false);
  const [totalScore, setTotalScore] = useState(0); 
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    // searchParams.name değerine göre doğru JSON dosyasına erişimi gerçekleştirin
    const jsonFile = require(`../Questions/${searchParams.name}.json`);
    setQuestions(jsonFile);
  }, [searchParams.name]);

  const handleRadioChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const currentQuestion = questions[questionIndex];
    if (answered) {
      return;
    }

    if (value === currentQuestion.dogruSecenek.toString()) {
      setHelperText('Tebrikler +10');
      setError(false);
      setDisabled(true);
      setTotalScore((prevScore) => prevScore + 10);
    } else if (value !== '') {
      setHelperText('Yanlış cevap');
      setError(true);
      setDisabled(true);
    } else {
      setHelperText('Birini seçiniz!');
      setError(true);
    }
  };
  
  


  /*
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const currentQuestion = questions[questionIndex];
    if (answered) {
      return;
    }
  
    if (value === currentQuestion.dogruSecenek.toString()) {
      setHelperText('Tebrikler +10');
      setError(false);
      setDisabled(true);
      setTotalScore((prevScore) => {
        const newScore = prevScore + 10;
        // Update the user's score in the database
        const userRef = db.collection('points').doc(searchParams.userId);
        userRef.update({
          score: newScore,
        });
        return newScore;
      });
    } else if (value !== '') {
      setHelperText('Yanlış cevap');
      setError(true);
      setDisabled(true);
    } else {
      setHelperText('Birini seçiniz!');
      setError(true);
    }
  };*/

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setValue('');
    setError(false);
    setCount(10);
    setDisabled(false);
  };

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setDisabled(true);
    }
  }, [count]);

  return (
    <div className="display">
      <div className="score-display">
        <p>Toplam Puan: {totalScore}</p>
      </div>
      {questionIndex < questions.length && (
        <div className="box2">
          <h1 className="timer">{count > 0 ? count : '!!!'}</h1>
          <p className="title">{questions[questionIndex].soru}</p>
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 3, color: 'black' }} error={error} variant="standard">
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
              >
                {questions[questionIndex].secenekler.map((secenek: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) => (
                  <FormControlLabel key={index} value={index.toString()} control={<Radio />} label={secenek} />
                ))}
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
              <Button sx={{ mt: 1, mr: 1, color: 'black', backgroundColor: 'white', borderRadius: 5 }} type="submit" variant="outlined" disabled={disabled}>
                Kontrol Et!
              </Button>
              {helperText !== 'Choose wisely' && (
                <Button
                  sx={{ mt: 1, mr: 1, color: 'black', backgroundColor: 'white', borderRadius: 5 }}
                  onClick={handleNextQuestion}
                  variant="outlined"
                >
                  Diğer Soruya Geç
                </Button>
              )}
            </FormControl>
          </form>
        </div>
      )}
    </div>
  );
};

export default Quiz;
