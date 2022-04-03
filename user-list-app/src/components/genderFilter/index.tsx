import React from 'react'
import { Gender } from '../../models/Users'
import { userSlice } from '../../store/reducers/userReducer'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { SelectGender } from '../../components'

const GenderFilter = () => {
    const dispatch = useAppDispatch()
    const { filterByGender } = userSlice.actions
    const filterGender: string = useAppSelector((state) => state.userReducer.filterGender)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterByGender(event.target.value as Gender))
    }

    return (
        <SelectGender handleChange={handleChange} gender={filterGender as Gender} />
    )
}

export default GenderFilter
