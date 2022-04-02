import React from 'react'
import { Box, Modal } from '@mui/material'
import { User } from '../../models/Users'
import { useAppDispatch } from '../../hooks/redux'
import { useAppSelector } from '../../hooks/redux'
import { userSlice } from '../../store/reducers/userReducer'
import { CreateUserForm, Dashboard, RenderUser } from '../../components'
import styles from './style.module.css'

const Users = () => {
    const dispatch = useAppDispatch()
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [open, setOpen] = React.useState(false)
    const { createUser } = userSlice.actions
    const users: User[] = useAppSelector((state) => state.userReducer.users)
    
    const handleCreateUser = (user: User) => {
        dispatch(createUser(user))
    }

    const renderUsers = () => {
        return users.map((user: User) => {
            return <RenderUser key={user.id} user={user} />
        })
    }
    return (
        <div className={styles.users}>
            <Dashboard  handleOpen={handleOpen}/>
            
            <Box className={styles.usersList}>
                {renderUsers()}
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CreateUserForm handleCreateUser={handleCreateUser} handleClose={handleClose} />
            </Modal>
        </div>
    )
}

export default Users
