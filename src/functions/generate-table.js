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
                    let text = document.createTextNode(element[key]);
                    cell.appendChild(text);
                }
            }
        } else {
            const row = table.insertRow();
            const user = {
                id: data.id,
                email: '',
                first_name: data.name,
                last_name: data.job,
                avatar: data.createdAt
            };
            for (let key in user) {
                let cell = row.insertCell();
                let text = document.createTextNode(user[key]);
                cell.appendChild(text);
            }
        }
    },
}
