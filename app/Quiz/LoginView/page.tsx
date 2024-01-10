'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./login.css"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { addDoc, memberListCollection, getDocs, onSnapshot } from '../firebase';

interface Member {
  id: string;
  name: string;
  email: string;
  password: string;
  // Other properties as needed
}

export default function Login() {
  const [memberList, setMemberList] = useState<Member[]>([]);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [login, setLogin] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(memberListCollection);
        const newList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Member[];
        setMemberList(newList);

        const unsubscribe = onSnapshot(memberListCollection, (snapshot) => {
          const updatedList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Member[];
          setMemberList(updatedList);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };

    fetchData();
  }, []);

  const handleLoginClick = () => {
    const matchingMember = memberList.find(
      (member) => member.email === email && member.password === password
    );

    if (matchingMember) {
      setLogin(true);
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <Container fixed sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ bgcolor: 'white', height: '50vh', width: '65ch', borderRadius: 3 }}>
          <div className='logintitle'>
            Hoşgeldiniz QuizApp
          </div>
          <div className='title2'>
            Giriş
          </div>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <TextField
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="outlined" sx={{ m: 1, width: '25ch' }} placeholder='e-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Link href="../Quiz/SignUp" style={{ textDecoration: 'none' }}>
              <Button variant="text">Üye ol</Button>
            </Link>
            <Link href={login ? '../Quiz/Cart' : '#'} style={{ textDecoration: 'none' }}>
            <Button variant="contained" onClick={handleLoginClick} sx={{ borderRadius: 5, color: 'white', backgroundColor: '#092635' }}>Giriş Yap</Button>
            </Link>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage + login}</div>}
          </Box>
        </Box>
      </Container>
    </div>
  );
}
