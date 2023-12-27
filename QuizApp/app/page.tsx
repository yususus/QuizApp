'use client'
import { Cart } from './QuizApp/Home/cart';
import { Quiz } from './QuizApp/Quizs/quiz';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './QuizApp/LoginView/login';
import { SignUp } from './QuizApp/LoginView/signUp';


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
