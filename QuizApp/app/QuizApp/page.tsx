'use client'
import { useState } from 'react';
import { Cart } from './Home/cart';
import { Quiz } from './Quizs/quiz';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './LoginView/login';
import { SignUp } from './LoginView/signUp';


export default function Home() {


  return (
    <>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
      <Quiz />
      <Login />
      <SignUp />
    </>
  );
}
