import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, MenuItem, Modal, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { userSlice } from '../../store/reducers/userReducer'
import { CreateUserForm } from '../../components'
import { User } from '../../models/Users'
import styles from './style.module.css'

const renderUserInfo = (user: User) => {
    return Object.values(user).map(elem => {
        return (
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {elem}
            </Typography>
        )
    })
}

const SingleUser = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [open, setOpen] = React.useState(false)
    const users = useAppSelector((state) => state.userReducer.users)
    let user: User = {} as User
    if (id) {
        user = users.filter(user => user.id === +id)[0]
    }
    
    const { deleteUser, editUser } = userSlice.actions
    
    const handleEditUser = (user: User) => {
        dispatch(editUser(user))
    }

    const handleDeleteUser = (id: number) => {
        navigate('/users')
        dispatch(deleteUser(id))
    }

    if (!users) {
        return (
            <Box className={styles.userInfo}>
                <Button onClick={() => navigate('/')}>Go to main</Button>
                User not found
            </Box>
        )
    }

    return (
        <div className={styles.user}>
            <Button onClick={() => navigate(-1)}>Go back</Button>
            <Box className={styles.userInfo}>
                {renderUserInfo(user)}
                <Box>
                    <Button onClick={() => handleOpen()} size="small"><MenuItem>Edit</MenuItem></Button>
                    <Button onClick={() => handleDeleteUser(user.id)} color='error' size="small"><MenuItem>Delete</MenuItem></Button>
                </Box>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CreateUserForm handleCreateUser={handleEditUser} handleClose={handleClose} title={'Edit User'} user={user} />
            </Modal>
        </div>
    )
}

export default SingleUser
