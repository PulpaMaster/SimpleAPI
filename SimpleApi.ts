import { faker } from "@faker-js/faker"


const express = require('express')
const app = express()
app.listen(3000)


app.get('/hello-world', function (req, res) {
  res.send('Hello World')
})


// Array with Faker..Package (Random name)
let posts: {id: number; name: string}[] = [
{id: 1 , name: faker.person.firstName()}
]

app.get('/posts', function (req, res) {
  res.send(posts)
})
