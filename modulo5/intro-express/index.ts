import express from "express";
import cors from "cors";
import { posts, users } from "./src/data";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/users", (req, res) => {
  const user = users.map((item) => {
    return item;
  });
  res.status(200).send(user);
});

app.get("/posts/:userId", (req, res) => {
  const idUser = parseInt(req.params.userId);
  if(!idUser)res.status(200).send("Id do usuário é obrigatorio!");
  const userPost = posts.filter((item) => {
    return item.userId === idUser;
  });
  res.status(200).send(userPost);
});

app.get("/posts", (req, res) => {
  const post = posts.map((item) => {
    return item;
  });
  res.status(200).send(post);
});

app.get("/", (req, res) => {
  res.status(201).send("Hello from Express");
});

app.delete("/users/:id", (req, res) => {
    const idUser = parseInt(req.params.id);
    if(!idUser)res.status(200).send("Id do usuário é obrigatorio!");
    let indexUser
    for (let i = 0; i < users.length; i++) {
        if(users[i].id===idUser) indexUser=i; 
    }
    indexUser?users.splice(Number(indexUser),1):res.status(404).send("Id do usuário não encontrado!");
    res.status(200).send(users)
  });

app.delete("/posts/:id", (req, res) => {
    const idPost = parseInt(req.params.id);
    if(!idPost)res.status(200).send("Id do usuário é obrigatorio!");
    let indexPost
    for (let i = 0; i < posts.length; i++) {
        if(posts[i].id===idPost) indexPost=i; 
    }    
    indexPost?posts.splice(Number(indexPost),1):res.status(404).send("Id do usuário não encontrado!");
    res.status(200).send(posts);
  });

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
