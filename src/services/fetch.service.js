import "whatwg-fetch";
import {environment} from "../environments/environment";

export default {
    async getUsers() {
        return window.fetch(`${environment.API_URL}/users?page=2`)
            .then(res => res.json());
    },

    async saveUser(user) {
        return window.fetch(`${environment.API_URL}/users`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json());
    },
};
