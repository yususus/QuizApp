"use client";
import React from "react";
import "./cart.css";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './123.png';
import Link from 'next/link';



export default function Cart() {
  const languages = ['react', 'java', 'python', 'sql', 'php', 'js', 'kotlin', 'css'];

  const LanguageCart = ({ language }) => (
    <Card sx={{ minWidth: 275, minHeight: 100, margin: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {language} Biliyor musun?
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        {/* <Button variant="contained" size="medium">
          Sorulara Başla
        </Button> */}
        <Link className="btn" href={{
          pathname:'Quizs',
          query:{
            name:language
          }
        }}>Sorulara Başla</Link>
      </CardActions>
    </Card>
  );

  const handleClick = () => {
    console.log("Button clicked");
    
  };

  return (
    <div style={{
      // use the src property of the image object
      backgroundImage: `url(${backgroundImage.src})`,
      // other styles
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="boxes">
        {languages.map((language) => (
          <LanguageCart key={language} language={language} />
        ))}
      </div>
    </div>
  );
};