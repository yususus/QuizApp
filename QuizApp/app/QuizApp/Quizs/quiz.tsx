import React, { useEffect, useState } from "react";
import sql from "../Questions/sql.json";
import { Result } from "./result"
import "./quiz.css";
import { FormControl, FormControlLabel, Radio, FormHelperText, Button, RadioGroup } from '@mui/material';



export const Quiz = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('Sana Güveniyorum');
    const [questionIndex, setQuestionIndex] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false); // Quizin bitip bitmediğini kontrol eder

    const handleRadioChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const currentQuestion = sql[questionIndex];

        if (value === currentQuestion.dogruSecenek.toString()) {
            setHelperText('Tebrikler +10');
            setError(false);
        } else if (value !== '') {
            setHelperText('Yanlış cevap');
            setError(true);
        } else {
            setHelperText('Birini seçiniz!');
            setError(true);
        }
    };

    const handleNextQuestion = () => {
        if (questionIndex < sql.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setValue('');
            setError(false);
            setCount(10); // Zamanı tekrar başlat
            setDisabled(false)
        } else {
            setQuizFinished(true); // Quiz bitti
        }
    };

    const [count, setCount] = useState(10);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (count > 0) {
            const timer = setTimeout(() => {
                setCount(count - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setDisabled(true); // Zaman bitince butonu devre dışı bırak
        }
    }, [count]);



    return (
        <div>
            {quizFinished ? (
                <Result />
            ) : (
                questionIndex < sql.length && (
                    <div className="box2">
                        <h1 className="timer">{count > 0 ? count : "!!!"}</h1>
                        <p className="title">{sql[questionIndex].soru}</p>
                        <form onSubmit={handleSubmit}>
                            <FormControl sx={{ m: 3, color: 'black' }} error={error} variant="standard">
                                <RadioGroup
                                    aria-labelledby="demo-error-radios"
                                    name="quiz"
                                    value={value}
                                    onChange={handleRadioChange}
                                >
                                    {sql[questionIndex].secenekler.map((secenek, index) => (
                                        <FormControlLabel key={index} value={index.toString()} control={<Radio />} label={secenek} />
                                    ))}
                                </RadioGroup>
                                <FormHelperText>{helperText}</FormHelperText>
                                <Button sx={{ mt: 1, mr: 1, color: 'black', backgroundColor: 'white', borderRadius: 5 }} type="submit" variant="outlined" disabled={disabled}>
                                    Kontrol Et!
                                </Button>
                                {helperText !== 'Choose wisely' && (
                                    <Button sx={{ mt: 1, mr: 1, color: 'black', backgroundColor: 'white', borderRadius: 5 }} onClick={handleNextQuestion} variant="outlined">
                                        {questionIndex < sql.length - 1 ? "Diğer Soruya Geç" : "Bitir"}
                                    </Button>
                                )}
                            </FormControl>
                        </form>
                    </div>
                )
            )}
        </div>
    );
};
