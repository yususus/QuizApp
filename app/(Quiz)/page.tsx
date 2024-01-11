'use client'
import { BrowserRouter } from 'react-router-dom';
import Login from './LoginView/page';



export default function Home() {

return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
}
