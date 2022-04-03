import React, { useState } from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { Box, Button, Typography } from '@mui/material'
import { validateUserForm } from '../../utils/validate'
import { Gender, User } from '../../models/Users'
import { SelectGender } from '../../components'
import styles from './style.module.css'

interface CreateUserFormProps {
  handleCreateUser: (user: User) => void,
  handleClose: () => void,
  title?: string,
  user?: User
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({
  handleCreateUser, 
  handleClose, 
  title = 'Create User', 
  user = { email: '', userName: '', gender: Gender.NOT_SELECTED, id: Math.random()  }
}) => {
  const [gender, setGender] = useState(user.gender)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value as Gender)
  }
  
  return (
    <Box className={styles.container}>
      <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Formik
        initialValues={{ email: user?.email, userName: user?.userName }}
        validate={validateUserForm}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false)
          handleCreateUser({ ...values, gender, id: user.id })
          handleClose()
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <Field className={styles.input} type="email" name="email" placeholder='Email' />
            <ErrorMessage name="email" component="div" />
            <Field className={styles.input} type="text" name="userName" placeholder='Name' />
            <ErrorMessage name="userName" component="div" />
            <SelectGender handleChange={handleChange} gender={gender} isCreating={true} />
            <Button type="submit" disabled={isSubmitting}>
              {title === 'Edit User' ? 'Edit' : 'Create'}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default CreateUserForm
