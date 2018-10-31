import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    USER_CREDENTIALS = 'user_credentials';
    constructor() { }

    /**
     * Save login success user data
     * @param login Login user data to save
     */
    saveUserCredentials(login: User) {
        this.saveDataInLocal( this.USER_CREDENTIALS, login, true);
    }

    /**
     * Take login user-> Name and Last name from local storage
     */
    getNameLastName() {
        const loginData = this.takeUserLoginData();
        return `${loginData.name} ${loginData.lastname}`;
    }

    /**
     * Load user data from local storage
     */
    takeUserLoginData() {
        return JSON.parse(localStorage.getItem(this.USER_CREDENTIALS));
    }

    /**
     * Save pass data in specified key and want format
     * @param itemParam key reference to use to find local storage data
     * @param value info to want save in local storage
     * @param json specified format. json = true. Save in JSON
     */
    saveDataInLocal(itemParam: string, value: any, json: boolean = false ) {
        if (!json) {
            localStorage.setItem(itemParam, value);
        }
        localStorage.setItem(itemParam, JSON.stringify(value));
    }

    /**
     * Remove select key storage data.
     * @example
     * This is a good example.
     * clearSelectData(user)
     * Clear 'user' select storage reference
     * @param itemParam key select to remove in local storage
     */
    clearSelectData(itemParam: string) {
        localStorage.removeItem(itemParam);
    }
}
