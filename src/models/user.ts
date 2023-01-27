export interface User {
    id: number | null;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
}

export interface Credentials {
    email: string;
    password: string;
}