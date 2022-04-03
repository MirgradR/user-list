export enum Gender {
    ALL = 'All',
    NOT_SELECTED = 'Not selected',
    MAN = 'Man',
    WOMAN = 'Woman',  
}

export interface User {
    id: number,
    email: string,
    userName: string,
    gender: Gender
}
