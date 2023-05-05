export const setLocalStorage = (key: string, value: any)=>{
    localStorage.setItem('people', JSON.stringify(value))
}

export const getLocalStorage = (key: string)=>{
    return localStorage.getItem(key)
}
