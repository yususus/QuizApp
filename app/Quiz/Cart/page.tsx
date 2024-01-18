"use client";
import React, { useState } from "react";
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
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);
  const languages = ['react', 'java', 'python', 'sql', 'php', 'js', 'kotlin', 'css'];
  
  const languageLinks = {
    react: "https://www.w3schools.com/react/",
    java: "https://www.w3schools.com/java/",
    python: "https://www.w3schools.com/python/",
    sql: "https://www.w3schools.com/sql/",
    php: "https://www.w3schools.com/php/",
    js: "https://www.w3schools.com/js/",
    kotlin: "https://www.w3schools.com/kotlin/",
    css: "https://www.w3schools.com/css/"
  };

  const LanguageCart = ({ language }) => (
    
    <Card className="card" sx={{ minWidth: 275, minHeight: 100, margin: 3 }}>
      <CardContent className="boxes">
      <Link className="txt" href={languageLinks[language]} target="_blank" rel="noopener noreferrer">
      {language.charAt(0).toUpperCase() + language.slice(1)} Biliyor musun?
      </Link>
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
  const handleRightPanelToggle = () => {
    setIsRightPanelOpen(!isRightPanelOpen);
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
      <Button
className="rbtn"
onClick={handleRightPanelToggle}
>
{isRightPanelOpen ? 'Kapat' : 'En iyiler'}
</Button>

{isRightPanelOpen && (
<div className="right-panel">
  <h2 className="h2">En iyiler Listesi</h2>
  <p className="h2">Erdem 100 puan <br/> yusuf 50 puan</p>
</div>
)}
    </div>
  );
};