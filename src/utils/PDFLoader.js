import Debug from 'debug';
import fs from 'fs-extra';
import 'babel-polyfill';

const debug = Debug('Mr.Papper::PDFLoader');

class Loader {
    constructor() {
        this.dispatch = null;
        this.store = null;
    }

    init(store) {
        this.dispatch = store.dispatch;
        this.store = store;
    }

    async loadDir(path) {
        const files = await fs.readdir(path);
        debug(`scan files in ${path}`, files);
        return files;
    }
}

const loader = new Loader();
export default loader;
