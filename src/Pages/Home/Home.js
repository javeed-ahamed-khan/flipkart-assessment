import { useNavigate } from "react-router"
import {useEffect} from 'react'
import Header from "../../Componets/header"
import { Typography } from '@mui/material'
import './home.css'
export const Home=()=>{
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate("/")
        }
    },[navigate])

    return <div>
        <Header/>
        <div className="container">
        <Typography variant="h3" component="h3" >
            Welcome to My Application
        </Typography>
        </div>
    </div>
}