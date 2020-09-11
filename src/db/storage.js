import { STORAGE_NAME } from '../assets/constant'

class Storage {
    constructor() {}

    saveNull() {
        window.localStorage.setItem(STORAGE_NAME, JSON.stringify(null))
    }
}

export default Storage
