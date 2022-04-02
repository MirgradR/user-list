interface ValidateUserForm {
    email: string,
    userName: string,
}

interface Errors {
    email?: string,
    userName?: string
}

export const validateUserForm = (values: ValidateUserForm) => {
    const errors: Errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    } else if (!values.userName) {
        errors.userName = 'Required'
    }
    return errors
}
