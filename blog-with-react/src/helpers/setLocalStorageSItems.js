export default function setLocalStorageSItems(id, name, password){
    let user = {name, password, posts: []}
    user = JSON.stringify(user)
    localStorage.setItem(id, user)
} 