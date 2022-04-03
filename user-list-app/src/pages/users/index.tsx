import React from 'react'
import { Box, Modal } from '@mui/material'
import { Gender, User } from '../../models/Users'
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
    const { createUser, deleteUser } = userSlice.actions
    const users: User[] = useAppSelector((state) => state.userReducer.users)
    const filterGender: string = useAppSelector((state) => state.userReducer.filterGender)

    const handleDeleteUser = (id: number) => {
        dispatch(deleteUser(id))
    }
    
    const handleCreateUser = (user: User) => {
        dispatch(createUser(user))
    }

    const getFilteredUsers = () => {
        if (filterGender === Gender.MAN) {
            return users.filter(user => user.gender === Gender.MAN)
        } else if (filterGender === Gender.NOT_SELECTED) {
            return users.filter(user => user.gender === Gender.NOT_SELECTED)
        } else if (filterGender === Gender.WOMAN) {
            return users.filter(user => user.gender === Gender.WOMAN)
        } else {
            return users
        }
    }

    const renderUsers = () => {
        return getFilteredUsers().map((user: User) => {
            return <RenderUser key={user.id} deleteUser={handleDeleteUser} user={user} />
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
