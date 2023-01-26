export interface User {
    id: number | null;
    email: string;
    password: string;
}

export interface Credentials {
    email: string;
    password: string;
}