import React, { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText, Button } from '@mui/material';

const QuizForm = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Choose wisely');

  const quizData = {
    "soru": "SQL nedir?",
    "secenekler": [
      "Bir programlama dilidir.",
      "Bir veritabanı yönetim sistemidir.",
      "Bir işletim sistemidir.",
      "Bir CSS framework'üdür."
    ],
    "dogruSecenek": 1
  };

  const handleRadioChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (value === quizData.dogruSecenek.toString()) {
      setHelperText('You got it!');
      setError(false);
    } else if (value !== '') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <div className="box2">
      <p className="title">{quizData.soru}</p>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 3, color:'black' }} error={error} variant="standard">
          <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            {quizData.secenekler.map((secenek, index) => (
              <FormControlLabel key={index} value={index.toString()} control={<Radio />} label={secenek} />
            ))}
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Kontrol Et!
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default QuizForm;
