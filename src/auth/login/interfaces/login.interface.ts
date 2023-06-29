import { rolEntity } from "src/modules/users/rol/entities/rol.entity";

export interface PayLoadToken {
    sub: string;
    role: rolEntity;
    name: string;
}

export interface AuthBody {
    email: string;
    password:string;
}
export interface AuthTokenResult {
    sub:  string;
    name: string;
    iat:  number;
    exp:  number;
}

export interface IUseToken {
    sub:  string;
    name: string;
    isExpired: boolean
}