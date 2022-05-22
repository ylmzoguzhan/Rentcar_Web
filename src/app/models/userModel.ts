export interface User {
    id:           number;
    firstName:    string;
    lastName:     string;
    tc:           string;
    telNo:        string;
    passwordHash: string;
    passwordSalt: string;
}
