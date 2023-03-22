import Header from "../../Componets/header"
import { useNavigate } from "react-router"
import { useContext, useEffect } from 'react'
import { Grid, TextField } from '@mui/material'
import { context } from '../../App'
import './profile.css'

export const Profile = () => {

    const navigate = useNavigate()
    const myContext = useContext(context)
    const { store, setStore } = myContext
    const {
        email="",
        firstName="",
        image="",
        lastName="",
        username="",
        phone='',
        birthDate=''
} = store

useEffect(() => {

    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    if (!token) {
        navigate("/")
    } else {
        fetch(`https://dummyjson.com/users/${id}`).then(res => res.json())
            .then(data => {
                setStore(data)
            })
    }
}, [navigate,setStore])


return <div>
    <Header />
    <div className="container">
    <div className="img-container" >
        <img className="img-profile" src={image} alt={username} />
    </div>
    <div>
        <Grid container spacing={2}>
            <Grid item xs={12} >
                <TextField fullWidth label="First Name"  placeholder="First Name" value={firstName} disabled />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Last Name" placeholder="Last Name" value={lastName} disabled />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Email" placeholder="Email" value={email} disabled />
            </Grid>
            <Grid item xs={12} >
                <TextField fullWidth label="Phone" placeholder="Phone" value={phone} disabled />
            </Grid>
            <Grid item xs={12} >
                <TextField fullWidth label="Date of Birth" placeholder="Date of Birth"  value={birthDate} disabled />
            </Grid>
        </Grid>
    </div>
    </div>
</div>
}