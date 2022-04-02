import React, { useState } from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { Box, Button, MenuItem, Select, Typography } from '@mui/material'
import { validateUserForm } from '../../utils/validate'
import { Gender, User } from '../../models/Users'
import styles from './style.module.css'

interface CreateUserFormProps {
  handleCreateUser: (user: User) => void,
  handleClose: () => void
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({handleCreateUser, handleClose}) => {
  const [gender, setGender] = useState(Gender.NOT_SELECTED)

  const renderGenderItems = () => {
    return Object.values(Gender).map(sex => {
      return <MenuItem value={sex}>{sex}</MenuItem>
    })
  }
  
  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.currentTarget.value as Gender)
  }

  return (
    <Box className={styles.container}>
      <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        Create User
      </Typography>
      <Formik
        initialValues={{ email: '', userName: '' }}
        validate={validateUserForm}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false)
          handleCreateUser({ ...values, gender, id: Math.random() })
          handleClose()
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <Field className={styles.input} type="email" name="email" placeholder='Email' />
            <ErrorMessage name="email" component="div" />
            <Field className={styles.input} type="text" name="userName" placeholder='Name' />
            <ErrorMessage name="userName" component="div" />
            <Select id='gender' onChange={handleSelect} value={gender}>
              {renderGenderItems()}
            </Select>
            <Button type="submit" disabled={isSubmitting}>
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default CreateUserForm
