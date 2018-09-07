import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    USER_CREDENTIALS = 'user_credentials';
    constructor() { }
    saveUserCredentials(login: User) {
        this.saveDataInLocal( this.USER_CREDENTIALS, login, true);
    }

    getNameLastName() {
        const loginData = this.takeUserLoginData();
        return `${loginData.name} ${loginData.lastname}`;
    }

    takeUserLoginData() {
        return JSON.parse(localStorage.getItem(this.USER_CREDENTIALS));
    }

    saveDataInLocal(itemParam: string, value: any, json: boolean = false ) {
        if (!json) {
            localStorage.setItem(itemParam, value);
        }
        localStorage.setItem(itemParam, JSON.stringify(value));
    }

    clearSelectData(itemParam: string) {
        localStorage.removeItem(itemParam);
    }
}
