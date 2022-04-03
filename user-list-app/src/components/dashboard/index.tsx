import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { GenderFilter } from '../../components'
import styles from './style.module.css'

interface DashboardProps {
    handleOpen: () => void
}

const Dashboard: React.FC<DashboardProps> = ({handleOpen}) => {
    return (
        <Box className={styles.dashboard}>
            <TextField label="search" />
            <GenderFilter />
            <Button onClick={handleOpen} variant="outlined">Create User</Button>
        </Box>
    )
}

export default Dashboard
