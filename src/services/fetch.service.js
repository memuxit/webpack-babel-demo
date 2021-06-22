import {environment} from "../environments/environment";

export default {
  getUsers() {
    const url = new URL(`${environment.API_URL}/users`);
    url.searchParams.set('page', '1');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    return xhr;
  },

  saveUser(user) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST',  `${environment.API_URL}/users`, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(user));
    return xhr;
  },
};
