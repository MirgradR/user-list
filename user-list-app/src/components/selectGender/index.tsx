import React from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Gender } from '../../models/Users'

interface SelectGenderProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    gender: Gender,
    isCreating: boolean
}

export const renderGenderItems = (isCreating: boolean) => {
  let genders = Object.values(Gender).map(gender => gender)
  if (isCreating) {
    genders = genders.filter(gender => gender !== Gender.ALL)
  }
  return genders.map(gender => {
    return <MenuItem key={gender} value={gender}>{gender}</MenuItem>
  })
}

const SelectGender: React.FC<SelectGenderProps> = ({handleChange, gender, isCreating = false}) => {
    return (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={handleChange}
            >
                {renderGenderItems(isCreating)}
            </Select>
          </FormControl>
        </Box>
      )
}

export default SelectGender
