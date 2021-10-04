const express = require("express")
const app = express()
const port = 4000

//importing model
const User = require("./models").user

app.get("/", (request, response) => {
  response.send("Hello from To Do App!")
})

app.get("/users", async (request, response) => {
  const users = await User.findAll()
  response.send(users) //response.json()
})

app.get("/users/:hello", async (request, response) => {
  const id = request.params.hello
  // const { hello } = request.params
  const user = await User.findByPk(id)
  if (!user) {
    response.status(404).send("User not found") //we can send status codes in out responses
  } else {
    response.send(user)
  } 
})

app.listen(port, () => console.log(`listening on ${port}`))