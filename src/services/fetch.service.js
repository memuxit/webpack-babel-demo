import {baseUrl} from "../helpers/utils";

export default {
  getUsers() {
    const url = new URL(`${baseUrl}/users`);
    url.searchParams.set('page', '1');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    return xhr;
  },

  saveUser(user) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST',  `${baseUrl}/users`, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(user));
    return xhr;
  },
};
