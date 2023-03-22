import { Button, Grid,TextField } from '@mui/material'
import { useEffect, useState,useContext } from 'react'
import { useNavigate } from 'react-router'
import './login.css'
import {context} from '../../App'


export const Login=()=>{
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate()
    const myContext = useContext(context)


    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            navigate("/home")
        }
    },[navigate])


    const handleLogin=()=>{
        if(username && password){
            fetch("https://dummyjson.com/auth/login",{
                method:"post",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    username,
                    password
                })
            }).then(res=>res.json())
            .then(data=>{
                myContext.setStore(data)
                localStorage.setItem('token',data.token)
                localStorage.setItem('id',data.id)
                navigate("/home")
                
            })
        }
    }

    return <div className="login-page">
        <div className='login-box'>
        <Grid container spacing={2}>
        <Grid item xs={12}>
           <h2 color='secondary'>Login</h2>
        </Grid>
            <Grid item xs={12}>
                <TextField fullWidth id="outlined-basic" value={username} label="UserName" variant="outlined" onChange={(e)=>setUserName(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth id="outlined-basic" value={password} label="Password" type={"password"} variant="outlined" onChange={(e)=>setPassword(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
            <Button fullWidth variant="contained" onClick={handleLogin}>Login</Button>
            </Grid>
        </Grid>
        </div>
    </div>
}