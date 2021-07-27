export default function setLocalStorageSItems(name, password){
    let id = Math.random()
    let user = {name, password}
    user = JSON.stringify(user)
    localStorage.setItem(id, user)
} 