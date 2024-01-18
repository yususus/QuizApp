"use client";
import React, { useEffect, useState } from "react";
import "./cart.css";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './123.png';
import Link from 'next/link';
import { db ,collection, getDocs, doc} from "../firebase";
import { getDoc } from "firebase/firestore";



export default function Cart() {
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);
  const [pointsData, setPointsData] = useState<Map<string, { userId: string; score: number; name: string }[]>>(new Map());
  const [memberData, setMemberData] = useState<{ uid: string; name:string; surname:string; }[]>([]);
  
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
  useEffect(() => {
    fetchPointsData();
    fetchMemberData();
  }, []);

  const fetchMemberData = async () => {
    try {
      const memberRef = collection(db, "memberList");
      const memberSnapshot = await getDocs(memberRef);

      const memberData = await Promise.all(
        memberSnapshot.docs.map(async(doc) => {
          const uid =  doc.get("uid") as string;
          const name = doc.get("name") as string;
          const surname =  doc.get("surname") as string;
          return { uid, name, surname };  // Her belge için bir nesne döndür
        })
      );
      setMemberData(memberData);
      return memberData;
    } catch (error) {
      console.error("Error fetching member data:", error);
    }
  };
  
  const fetchPointsData = async () => {
    try {
      const fetchedMemberData = await fetchMemberData(); // fetchMemberData fonksiyonunu çağır ve memberData'yı al
  
      if (fetchedMemberData) {
        const pointsRef = collection(db, "points");
        const pointsSnapshot = await getDocs(pointsRef);

        const languagePointsMap = new Map<string, { userId: string; score: number; name: string }[]>();

        pointsSnapshot.forEach((doc) => {
          const userId = doc.get("userId") as string;
          const score = doc.get("score") as number;
          const language = doc.get("language") as string;

          const matchingMember = fetchedMemberData.find((member) => member.uid === userId);

          const data = { userId, score, name: matchingMember?.name || userId };

          if (languagePointsMap.has(language)) {
            languagePointsMap.get(language)?.push(data);
          } else {
            languagePointsMap.set(language, [data]);
          }
        });
        
  
        setPointsData(languagePointsMap);
      } else {
        console.log("Member data is undefined.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
          pathname: 'Quizs',
          query: {
            name: language
          }
        }}>Sorulara Başla</Link>
      </CardActions>
    </Card>
  );

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
        {isRightPanelOpen ? 'Kapat' : 'Kazanılan Puanlar'}
      </Button>

      {isRightPanelOpen && (
        <div className="right-panel">
          <h2 className="h2">Puan Listesi</h2>
          {Array.from(pointsData).map(([language, languagePoints]) => (
            <div key={language}>
              <h3 className="h3">{language} kazanılan puanlar</h3>
              <ul>
                {languagePoints.map((data) => (
                  <li className="users" key={data.userId}>
                    {data.name} - {data.score} puan
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};