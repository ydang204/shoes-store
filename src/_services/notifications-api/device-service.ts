import { AxiosResponse } from "axios";

import { postAsync } from "../../_cores/utils/http-client";
import CreateDeviceReqModel from "../../_models/notification-api/devices/req-model/create-device-req-model";

const DEVICE_URL = "api/v1/notification/devices";

export const createDeviceAsync = (
    model: CreateDeviceReqModel
): Promise<AxiosResponse> => {
    const url = DEVICE_URL;
    return postAsync(DEVICE_URL, model);
};
