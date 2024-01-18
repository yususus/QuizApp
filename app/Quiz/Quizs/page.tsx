'use client';
import React, { useEffect, useState } from 'react';
import { FormControl, FormControlLabel, Radio, FormHelperText, Button, RadioGroup } from '@mui/material';
import { addDoc, doc,collection,pointsCollection,db } from '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './quiz.css';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';
const Quiz = ({
  searchParams,
}: {
  searchParams: {
    userId(userId: any): unknown;
    name: string;
  };
}) => {
  const [user, setUser] = useState(null);
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

  useEffect(() => {
    // Listen for changes in user authentication state
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentQuestion = questions[questionIndex];

    if (answered || questionIndex >= questions.length) {
      return;
    }

    // Ensure the user is authenticated
    if (!user) {
      console.error('User not authenticated.');
      return;
    }

    const userId = user.uid; // Use the UID of the authenticated user

    if (value === currentQuestion.dogruSecenek.toString()) {
      setHelperText('Tebrikler +10');
      setError(false);
      setDisabled(true);

      setTotalScore((prevScore) => {
        const newScore = prevScore + 10;

        // Update the user's score in the database
        //const userDocRef = doc(db, 'points', userId);

        // Use updateDoc to update the document
        

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
  };

  const handleNextQuestion = () => {
    setQuestionIndex((prevIndex) => prevIndex + 1);
    setValue('');
    setError(false);
    setCount(10);
    setDisabled(false);

    // If all questions are completed, save the final score to Firebase
};

  const testiBitir =()=>{
      alert('TEBRİKLER PUANINIZ: ' +totalScore);
      
      const userId = user.uid;
      const userDocRef = doc(db, 'points', userId);

      const pointsCollectionRef = collection(db, 'points');
      // Use updateDoc to update the document
      addDoc(pointsCollectionRef, {
        userId: userId,
        score: totalScore,
        language:searchParams.name,
        // Add any other user information you want to store
      });

      // You may also want to add a redirect or a completion message here
      
  }

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
                {questions[questionIndex].secenekler.map((secenek, index) => (
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
                  disabled={questionIndex === questions.length - 1}
                >
                  Diğer Soruya Geç
                </Button>
                
              )}
              <Link href={"./Cart"} passHref>
              <Button sx={{ mt: 1, mr: 1, color: 'black', backgroundColor: 'white', borderRadius: 5 }} onClick={testiBitir} variant="outlined">
                Testi Bitir
              </Button>
              </Link>
            </FormControl>
          </form>
        </div>
      )}
    </div>
  );
};

export default Quiz;