'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AccountCircle } from "@mui/icons-material";
import { addDoc, memberListCollection , createUserWithEmailAndPassword, auth} from '../firebase';
import Link from 'next/link';

import "../LoginView/login.css";

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleSignUp = async () => {
    try {
      // Check if any input field is empty
      if (!email || !name || !surname || !password) {
        setErrorMessage('Please fill in all fields.');
        return;
      }

      // Use Firebase Authentication to create a new user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;

      const newMember = {
        uid: newUser.uid,
        email,
        name,
        surname,
        
      };

      // Add a new document to the memberListCollection
      await addDoc(memberListCollection, newMember);

      // Clear the input fields after successful registration
      setEmail('');
      setName('');
      setSurname('');
      setPassword('');
      setErrorMessage('');

      // You can enable this line if you want to navigate even on success
      // history.push('/Quiz');

      console.log('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error appropriately
      setErrorMessage('Error registering user. Please try again.');
    }
  };

  const isSignUpDisabled = !email || !name || !surname || !password; // Disable the button and link if any input is empty

  return (
    <div className='login'>
      <Container fixed sx={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center'
      }}>
        <Box sx={{
          bgcolor: 'white', height: '55vh', width: '65ch', borderRadius: 4
        }}>
          <div className='logintitle'>
            Kayıt Ol
          </div>
          <Box sx={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center'
          }}>
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
            <TextField
              id="input-with-icon-textfield"
              variant="outlined" sx={{ m: 1, width: '25ch' }} placeholder='İsim'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="input-with-icon-textfield"
              variant="outlined" sx={{ m: 1, width: '25ch' }} placeholder='Soyisim'
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              />
            </FormControl>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <Link href={isSignUpDisabled ? "#" : "/Quiz"} style={{ textDecoration: 'none' }}>
              <Button disabled={isSignUpDisabled} variant="contained" sx={{ borderRadius: 5, color: 'white', backgroundColor: '#092635' }} onClick={handleSignUp}>Kayıt Ol</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}