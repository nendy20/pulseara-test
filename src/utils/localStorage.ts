import { procedureType } from "@/types/procedure";

const setLocalStorage = (key: string, data: procedureType[]) => localStorage.setItem(key, JSON.stringify(data));
const getLocalStorage = (key: string): any | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
};

export { setLocalStorage, getLocalStorage }