import {detect} from "detect-browser";
const result = detect();

const getBrowserAndVersion = _ => {
    let browser = {name: 'Not supported', version: '0'};
    if (result.name.includes('chrome')) {
        browser = {name: 'Chrome', version: result.version};
    } else if (result.name.includes('firefox')) {
        browser = {name: 'Firefox', version: result.version};
    } else if (result.name.includes('edge')) {
        browser = {name: 'Edge', version: result.version};
    } else if (result.name.includes('safari')) {
        browser = {name: 'Safari', version: result.version};
    } else if (result.name.includes('ie')) {
        browser = {name: 'Explorer', version: result.version};
    }
    return browser;
};

export {
    getBrowserAndVersion
}
