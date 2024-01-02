"use client";
import React, { useState, MouseEvent } from "react";
import "./cart.css";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './123.png';


export default function Cart() {

  const handleClick = () => {
    // Navigate to the desired path
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
      <div className=" boxes">
        <Card sx={{ minWidth: 275, minHeight: 100, margin: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              React Biliyor musun?
            </Typography>

          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" size="medium" onClick={handleClick}>
              Sorulara Başla
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275, minHeight: 100, margin: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Java Biliyor musun?
            </Typography>

          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" size="medium" >
              Sorulara Başla
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275, minHeight: 100, margin: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Python Biliyor musun?
            </Typography>

          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" size="medium" >
              Sorulara Başla
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275, minHeight: 100, margin: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Sql Biliyor musun?
            </Typography>

          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" size="medium" >
              Sorulara Başla
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275, minHeight: 100, margin: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              C# Biliyor musun?
            </Typography>

          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" size="medium" >
              Sorulara Başla
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275, minHeight: 100, margin: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              PHP Biliyor musun?
            </Typography>

          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" size="medium" >
              Sorulara Başla
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275, minHeight: 100, margin: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              JavaScript Biliyor musun?
            </Typography>

          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" size="medium" >
              Sorulara Başla
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275, minHeight: 100, margin: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Kotlin Biliyor musun?
            </Typography>

          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" size="medium" >
              Sorulara Başla
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275, minHeight: 100, margin: 3, backgroundColor: 'pink' }} >
          <CardContent>
            <Typography variant="h5" component="div">
              Css Biliyor musun?
            </Typography>

          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" size="medium" >
              Sorulara Başla
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};