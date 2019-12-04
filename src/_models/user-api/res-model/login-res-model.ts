interface LoginResModel {
    token: string;
    account: Account;
}

export interface AccountLoginResModel {
    userName: string;
    fullName?: any;
    email: string;
}

export default LoginResModel;