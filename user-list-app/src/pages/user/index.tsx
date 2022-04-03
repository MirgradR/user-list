import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, MenuItem, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { userSlice } from '../../store/reducers/userReducer'
import styles from './style.module.css'

const SingleUser = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const users = useAppSelector((state) => state.userReducer.users)
    const user = users.filter(user => user.id === +id)[0]

    const { deleteUser } = userSlice.actions
    
    const handleDeleteUser = (id: number) => {
        navigate('/users')
        dispatch(deleteUser(id))
    }

    return (
        <div className={styles.user}>
            <Button onClick={() => navigate(-1)}>Go back</Button>
            <Box className={styles.userInfo}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {user.userName}
                </Typography>
                <Typography variant="h5" component="div">
                    {user.id}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {user.email}
                </Typography>
                <Typography variant="body2">
                    {user.gender}
                </Typography>
                <Box>
                    <Button size="small"><MenuItem>Edit</MenuItem></Button>
                    <Button onClick={() => handleDeleteUser(user.id)} color='error' size="small"><MenuItem>Delete</MenuItem></Button>
                </Box>

            </Box>
        </div>
    )
}

export default SingleUser
