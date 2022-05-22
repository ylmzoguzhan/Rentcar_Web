export interface UserModel {
    id:           number;
    firstName:    string;
    lastName:     string;
    tc:           string;
    telNo:        string;
    passwordHash: string;
    passwordSalt: string;
}
