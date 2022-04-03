import React from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from '@mui/material'
import styles from './style.module.css'

interface Props {
    title: string,
    route: string
}

const NavLink: React.FC<Props> = ({title, route}) => {
    return (
        <Link className={title === 'Watch' ? styles.watchLink : styles.navLink} to={route}>
            <MenuItem>
                {title}
            </MenuItem>
        </Link>
    )
}

export default NavLink
