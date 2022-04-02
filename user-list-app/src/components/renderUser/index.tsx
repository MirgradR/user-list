import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { User } from '../../models/Users'
import styles from './style.module.css'

interface Props  {
    user: User,
}

const RenderUser: React.FC<Props> = ({user}) => {
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
                <Button size="small">Watch</Button>
            </CardActions>
        </Card>
    )
}
export default RenderUser
