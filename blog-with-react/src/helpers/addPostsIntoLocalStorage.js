export default function addPosts(id, user) {
    user = JSON.stringify(user)
  localStorage.setItem(id, user);
}
