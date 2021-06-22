import "./styles/colors.scss";
import fetchService from "./services/fetch.service";
import browserFunction from "./functions/get-browser";
import functions from "./functions/generate-table"

const element = document.getElementById('browser');
const table = document.querySelector('table');

browserFunction.showBrowser(element);

const get = fetchService.getUsers();
get.onload = function () {
    const response = JSON.parse(get.response);
    functions.generateTableHead(table, Object.keys(response.data[0]));
    functions.fillTable(table, response.data);
};

const user = {
    name: 'Fox McCloud',
    job: 'Pilot'
};

const post = fetchService.saveUser(user);
post.onload = function () {
    const response = JSON.parse(post.response);
    functions.fillTable(table, response);
};
