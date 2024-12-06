const express = require('express')
const app = express()
const Port = 3000
app.use(express.json()) //Middleware for get JSON from the req.body (Post call)

app.listen(Port,
  function (err) {
      if (err) console.log(err);
      console.log("Server listening on PORT", Port);
  });


app.get('/hello-world', function (req: Request, res: Response) {
  res.send('Hello World')
})



let posts: {id: number; name: string}[] = [
{id: 1 , text: "Alex"}
]

app.get('/posts', function (req: Request, res: Response) {
  res.send(posts)
})

//Post call for a new id++
app.post('/posts', function (req: Request, res: Response) {
      const newPost = req.body;
      newPost.id = posts[posts.length-1].id+1;
      posts.push(newPost);
      res.send(newPost);
  })

// Put call for update/change the User Name
app.put('/posts/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const updatedPost = req.body
  const existingPost = posts.find((post) => post.id === id)
  if (!existingPost) {
  res.status(404).send('Post not found')
  return
  }
  updatedPost.id = id
  posts = posts.map((post) => (post.id === id ? updatedPost : post))
  res.send(updatedPost)
  })

//Delete call is deleting the text and die id.
app.delete('/posts/:id', (req: Request, res: Response)=> {
 const id = parseInt(req.params.id)
 posts = posts.filter((post)=> post.id !==id)
 res.send(posts)
})