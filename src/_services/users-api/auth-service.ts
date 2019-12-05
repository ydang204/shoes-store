import { AxiosResponse } from "axios";
import { postAsync, getAsync } from "../../_cores/utils/http-client";
import LoginReqModel from "../../_models/user-api/req-model/login-req-model";

const AUTH_URL = 'api/v1/user/auth';


export const loginAsync = (model: LoginReqModel): Promise<AxiosResponse> => {
    const url = AUTH_URL + '/login';
    return postAsync(url, model);
};

