'use client'
import { BrowserRouter } from 'react-router-dom';
import { Login } from './LoginView/login';
import { SignUp } from './LoginView/signUp';


export default function Home() {

return (
    <BrowserRouter>
      <Login />
      <SignUp />
    </BrowserRouter>
  );
}
