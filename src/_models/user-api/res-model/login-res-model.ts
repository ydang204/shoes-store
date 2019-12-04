interface LoginResModel {
    token: string;
    account: Account;
}

export interface Account {
    userName: string;
    fullName?: any;
    email: string;
}

export default LoginResModel;