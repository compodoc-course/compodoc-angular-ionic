import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    USER_CREDENTIALS = 'user_credentials';
    constructor() { }
    saveUserCredentials(login: Login) {
        localStorage.setItem(this.USER_CREDENTIALS, JSON.stringify(login));
    }

    getNameLastName() {
        const loginData = this.takeUserLoginData();
        return `${loginData.name} ${loginData.lastname}`;
    }

    takeUserLoginData() {
        return JSON.parse(localStorage.getItem(this.USER_CREDENTIALS));
    }
}
