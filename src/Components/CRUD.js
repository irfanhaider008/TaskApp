import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CardContent, Grid, Paper, TextField } from '@mui/material';
import {styles} from './style'
import { Card } from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { RenderInputText } from './RenderInputText';

const useStyles = makeStyles(styles);

export default function CRUD() {
    const [data,setData] = useState({
        firstname:"",
        lastname:'',
        email:'',
        gender:'',
    });
    const [error,setError] = useState([])
   
    const classes = useStyles();

    const handleChange = ({target}) =>{
        const name=target.name;
        const value = target.value;
        value.length < 3
      ? (error[name] = setError({
          ...error,
          [name]: `${name} have atleast 3 letter`,
        }))
      : (error[name] = setError({ ...error, [name]: "" }));

    setData({ ...data, [name]: value });
        console.log(data);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Data",data)
    };
    return (
       <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={9}>
        <Typography variant='h6'color='primary'>
Data Form
        </Typography>
            <form onSubmit={handleSubmit}>
                <Paper component={Box} mb={1} p={2}>
     <Box>
        <Grid container>
            <Grid xs={12} sm={7}> 
   <Box mb={2}>
    <RenderInputText
    label="First Name"
    name="firstName"
    data={data}
    error={error}
    onChange={handleChange}
    />
   </Box>
   <Box mb={2}>
    <RenderInputText
    label="Last Name"
    name="lastName"
    data={data}
    error={error}
    onChange={handleChange}

    />
   </Box>
   
   <Box mb={2}>
    <RenderInputText
    label="Email"
    name="Email"
    data={data}
    error={error}
    onChange={handleChange}
    />
   </Box>
   <Box mt={1}>
<Button type='submit' variant='contained' size='small'>Submit</Button>
   </Box>

                
            </Grid>

        </Grid>
      
     </Box>
                </Paper>
            </form>
        </Grid>
       </Grid>
      );
    }
    
   
    
 