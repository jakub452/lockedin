import { io } from "socket.io-client";

let loggedin = new Boolean
loggedin = false;

export const setLoggedIn = (value) => {
    loggedin = value
}

export const getLoggedIn = () => {
    return loggedin
}

export const socket = io();
