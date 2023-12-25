"use client";
import React, { useState, MouseEvent } from "react";
import "./cart.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

  

export const Cart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the desired path
    console.log("Button clicked");
  };
  
    return (
        <div className=" boxes">
          
            <Card sx={{ minWidth: 275, minHeight: 100,margin:3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          React Biliyor musun?
        </Typography>
        
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
      <Button variant="contained" size="medium"  onClick={handleClick}>
          Sorulara Başla
        </Button>
      </CardActions>
    </Card>
            <Card sx={{ minWidth: 275, minHeight: 100,margin:3 }}>
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
            <Card sx={{ minWidth: 275, minHeight: 100,margin:3 }}>
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
            <Card sx={{ minWidth: 275, minHeight: 100,margin:3 }}>
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
            <Card sx={{ minWidth: 275, minHeight: 100,margin:3 }}>
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
            <Card sx={{ minWidth: 275, minHeight: 100,margin:3 }}>
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
            <Card sx={{ minWidth: 275, minHeight: 100,margin:3 }}>
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
            <Card sx={{ minWidth: 275, minHeight: 100,margin:3 }}>
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
            <Card sx={{ minWidth: 275, minHeight: 100,margin:3, backgroundColor: 'pink' }} >
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
    );
};