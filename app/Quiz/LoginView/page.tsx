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
import { useEffect } from 'react';


/*
export const Login = () => {

    const navigate = useNavigate();
    const handleSignUpClick = () => {
     navigate("./QuizApp/LoginView/signUp");
    };
    const goQuiz = () =>{
        navigate("./QuizApp/Home/cart")
    }

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };
    return (
        <div className="login">
            <Container fixed sx={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center'
            }}>
                    <Box sx={{
                        bgcolor: 'white', height: '50vh', width: '65ch', borderRadius: 3
                    }}>
                        <div className='logintitle'>
                            Hoşgeldiniz QuizApp
                        </div>
                        <div className='title2'>
                            Giriş
                        </div>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
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

                                />
                            </FormControl>
                            <Button variant="text" onClick={handleSignUpClick}>Üye ol</Button>
                            <Button variant="contained" onClick={goQuiz} sx={{ borderRadius: 5, color: 'white', backgroundColor: '#092635' }}>Giriş Yap</Button>
                        </Box>
                    </Box>
                </Container> 
        </div>
    );
}*/

export default function Login () {

    const navigate = useNavigate();
    const [signUp, setSignUp] = React.useState(false); // signUp durum değişkeni
    const [login, setLogin] = React.useState(false); // login durum değişkeni

    // signUp veya login değiştiğinde çalışacak yan etki
    const handleSignUpClick = () => {
        setSignUp(true); 
    };
    const goQuiz = () => {
        setLogin(true); 
    }
    useEffect(() => {
        if (signUp) {
            navigate('../Quiz/SignUp');
        }
        if (login) {
            navigate("../Quiz/Cart/");
        }
    }, [signUp, login]);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };
    return (
        <div className="login">
            <Container fixed sx={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center'
            }}>
                    <Box sx={{
                        bgcolor: 'white', height: '50vh', width: '65ch', borderRadius: 3
                    }}>
                        <div className='logintitle'>
                            Hoşgeldiniz QuizApp
                        </div>
                        <div className='title2'>
                            Giriş
                        </div>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
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

                                />
                            </FormControl>
                            <Button variant="text" onClick={handleSignUpClick}>Üye ol</Button>
                            <Button variant="contained" onClick={goQuiz} sx={{ borderRadius: 5, color: 'white', backgroundColor: '#092635' }}>Giriş Yap</Button>
                        </Box>
                    </Box>
                </Container> 
        </div>
    );
}
