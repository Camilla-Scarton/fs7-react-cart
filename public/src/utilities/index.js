export const internalMemory = {
    save: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    find: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },
    remove: (key) => {
        localStorage.removeItem(key);
    }
}