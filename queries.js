const User = require("./models").user //it should have the same name as the model
const TodoList = require("./models").todoList

const getUsers = async () => {
  const users = await User.findAll() //finds all the users
  return users.map(user => user.get({plain: true})) //so we only get the user object, no metadata
}

// getUsers().then(data => console.log(data))

const getUser = async (id) => {
  const user = await User.findByPk(id) //find a user by primary key (id)
  return user.toJSON() //same as plain: true, only getting the object, no metadata
}

// getUser(1).then(data => console.log(data))

const getTodoLists = async () => {
  const lists = await TodoList.findAll()
  return lists.map(list => list.get({plain: true}))
}

// getTodoLists().then(data => console.log(data))