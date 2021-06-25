import "./styles/styles.scss";
import fetchService from "./services/fetch.service";
import browserFunction from "./functions/get-browser";
import functions from "./functions/generate-table";

const start = async () => {
    const browser = document.createElement('div');
    browserFunction.showBrowser(browser);
    document.getElementsByTagName('body')[0].appendChild(browser);

    const user = {
        name: 'Fox McCloud',
        job: 'Pilot'
    };

    const table = document.createElement('table');
    const users = await fetchService.getUsers(1);
    functions.generateTableHead(table, Object.keys(users.data[0]));
    functions.fillTable(table, users.data);

    document.getElementsByTagName('body')[0].appendChild(table);

    const newUser = await fetchService.saveUser(user);
    functions.fillTable(table, newUser);
}

start();
