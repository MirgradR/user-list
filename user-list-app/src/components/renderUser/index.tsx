import React from 'react'
import { Button, Card, CardActions, CardContent, MenuItem, Typography } from '@mui/material'
import { User } from '../../models/Users'
import NavLink from '../navLink'
import styles from './style.module.css'

interface Props  {
    user: User,
    deleteUser: (id: number) => void
}

const RenderUser: React.FC<Props> = ({user, deleteUser}) => {
    return (
        <Card className={styles.item} sx={{ minWidth: 275 }}>
            <CardContent>
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
            </CardContent>
            <CardActions>
                <Button size="small"><NavLink title={'Watch'} route={`/users/${user.id}`} /></Button>
                <Button onClick={() => deleteUser(user.id)} color='error' size="small"><MenuItem>Delete</MenuItem></Button>
            </CardActions>
        </Card>
    )
}
export default RenderUser
