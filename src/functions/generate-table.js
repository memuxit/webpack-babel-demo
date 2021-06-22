import avatar from "../assets/fox-avatar.jpg";

export default {
    generateTableHead(table, data) {
        const thead = table.createTHead();
        const row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement('th');
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    },

    fillTable(table, data) {
        if (Array.isArray(data)) {
            for (let element of data) {
                let row = table.insertRow();
                for (let key in element) {
                    let cell = row.insertCell();
                    let value;
                    if (key === 'avatar') {
                        value = document.createElement('img');
                        value.src = element[key];
                        cell.classList.add('avatar');
                    } else {
                        value = document.createTextNode(element[key]);
                    }
                    cell.appendChild(value);
                }
            }
        } else {
            const row = table.insertRow();
            const user = {
                id: data.id,
                email: 'fox.mccloud@starfox.com',
                first_name: data.name,
                last_name: data.job,
                avatar: data.createdAt
            };
            for (let key in user) {
                let cell = row.insertCell();
                let value;
                if (key === 'avatar') {
                    value = document.createElement('img');
                    value.src = avatar;
                    cell.classList.add('avatar');
                } else {
                    value = document.createTextNode(user[key]);
                }
                cell.appendChild(value);
            }
        }
    },
}
