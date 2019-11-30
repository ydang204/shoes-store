import firebase from "firebase/app";
import "firebase/messaging";

import API_URL from "../constants/firebase-config";
import * as serviceWorker from "../../serviceWorker";
import { createDeviceAsync } from "../../_services/notifications-api/notification-service";
import CreateDeviceReqModel from "../../_models/notification-service/devices/req-model/create-device-req-model";

firebase.initializeApp(API_URL);

export const messaging = firebase.messaging();

export const askForPermissionToReceiveNotifications = async () => {
    messaging
        .requestPermission()
        .then(() => {
            return messaging.getToken();
        })
        .then((token: any) => {
            const savedToken = localStorage.getItem("fcmToken");
            if (savedToken === null) {
                const model: CreateDeviceReqModel = {
                    deviceUniqueIdentify: token,
                    platform: "Web",
                    token: token
                };
                localStorage.setItem("fcmToken", token);
                return createDeviceAsync(model);
            }
        });
};


export const deleteToken = () => {
    const token = localStorage.getItem("fcmToken");
    if (token !== null) {
        serviceWorker.unregister();
        return messaging.deleteToken(token)
    }
    return Promise.resolve(true);

};

export default firebase;
