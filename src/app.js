import "./styles/styles.scss";
import fetchService from "./services/fetch.service";
import browserFunction from "./functions/get-browser";
import functions from "./functions/generate-table"

const start = async () => {
    const element = document.getElementById('browser');
    const table = document.querySelector('table');
    const user = {
        name: 'Fox McCloud',
        job: 'Pilot'
    };

    browserFunction.showBrowser(element);

    const users = await fetchService.getUsers();
    functions.generateTableHead(table, Object.keys(users.data[0]));
    functions.fillTable(table, users.data);

    const newUser = await fetchService.saveUser(user);
    functions.fillTable(table, newUser);
}

start();
