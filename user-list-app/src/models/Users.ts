export enum Gender {
    MAN = 'Man',
    WOMAN = 'Woman',
    NOT_SELECTED = 'Not selected'
}

export interface User {
    id: number,
    email: string,
    userName: string,
    gender: Gender
}
