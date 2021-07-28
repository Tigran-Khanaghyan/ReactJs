export default function findUser(name, password) {
  let storage = window.localStorage;
  let usersInfo = Object.values(storage);
  let users = [];
  let userId = null
  usersInfo.map((userInfo) => {
    users.push(JSON.parse(userInfo));
    return 0;
  });

  let existingUser = users.find((user) => {
    return user.name === name && user.password === password;
  });
  let userJson = JSON.stringify(existingUser)
  for(let key in storage){
      if(storage[key] === userJson){
          userId = key
          break
      }
      
  }

  if(existingUser){
      return [existingUser, userId]
  }
}
