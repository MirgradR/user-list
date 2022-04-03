import React from 'react'
import { Box, Button } from '@mui/material'
import { GenderFilter } from '../../components'
import styles from './style.module.css'

interface DashboardProps {
    handleOpen: () => void
}

const Dashboard: React.FC<DashboardProps> = ({handleOpen}) => {
    return (
        <Box className={styles.dashboard}>
            <GenderFilter />
            <Button onClick={handleOpen} variant="outlined">Create User</Button>
        </Box>
    )
}

export default Dashboard
