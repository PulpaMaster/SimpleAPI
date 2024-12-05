import { faker } from "@faker-js/faker"


const express = require('express')
const app = express()
const Port = 3000

app.listen(Port,
  function (err) {
      if (err) console.log(err);
      console.log("Server listening on PORT", Port);
  });


app.get('/hello-world', function (req: Request, res: Response) {
  res.send('Hello World')
})


// Array with Faker..Package (Random name)
let posts: {id: number; name: string}[] = [
{id: 1 , name: faker.person.firstName()}
]

app.get('/posts', function (req: Request, res: Response) {
  res.send(posts)
})

app.post('/posts', function (req: Request, res: Response) {
      res.send("This ist from the post call");
  })