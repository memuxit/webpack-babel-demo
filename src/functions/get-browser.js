import {getBrowserAndVersion} from "../helpers/utils";

export default {
    showBrowser(element) {
        const browser = getBrowserAndVersion();
        element.innerHTML = `<p>Browser detected: <b>${browser.name}</b><br/>Version detected: <b>${browser.version}</b></p>`;
    },
}
