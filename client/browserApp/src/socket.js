import { io } from "socket.io-client";


export const userData = {
    loggedIn: false,
    username: "",
    userlist: [],

}

export const sendMessage = (text) => {
    if(userData.loggedIn){
        socket.emit("chat:message", text)
    } else {
        console.log('zaloguj sie!')
    }
}

export const setUsername = (value) => {
    state.username = value
}

export const setLoggedIn = (value) => {
    userData.loggedIn = value
}

export const socket = io();
