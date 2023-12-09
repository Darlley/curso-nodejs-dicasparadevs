const express = require('express')
const chalk = require("chalk");
const UserModel = require('../src/models/user.model')

const app = express()
app.use(express.json());

app.set("view engine", "ejs")
app.set("views", "src/views")

app.use((req,res,next) => {
  console.log(`Request Type: ${req.method}`)
  console.log(`Content Type: ${req.headers['content-type']}`)
  console.log(`Date: ${new Date()}`)

  next()
})

app.get('/', async (req,res) => {
  const users = await UserModel.find()
  console.log(users)
  res.render("index", {
    users
  })
})

app.get('/users', async (req,res) => {
  try{
    const users = await UserModel.find()
  
    res.status(201).json(users)
  }catch(error){
    res.status(500).send(error)
  }
})

app.get('/users/:id', async (req,res) => {
  try{
    const {id} = req.params
    const user = await UserModel.findById(id)
  
    res.status(201).json(user)
  }catch(error){
    res.status(500).send(error)
  }
})

app.put('/users/edit/:id', async (req,res) => {
  try{
    const {id} = req.params
    const user = await UserModel.findByIdAndUpdate(id, req.body)
  
    res.status(201).json(user)
  }catch(error){
    res.status(500).send(error)
  }
})

app.delete('/users/delete/:id', async (req,res) => {
  try{
    const {id} = req.params
    const user = await UserModel.findByIdAndDelete(id)
  
    res.status(201).json(user)
  }catch(error){
    res.status(500).send(error)
  }
})

app.post('/users', async (req,res) => {
  try{
    res.contentType('application/json')
    const {firstName,lastName,email,password} = req.body;
    console.log(chalk.white.bgCyan(firstName), chalk.white.bgCyan(lastName),chalk.white.bgCyan(email),chalk.white.bgCyan(password))
    
    const user = await UserModel.create(req.body)
    res.status(201).json(user)
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.listen(8080, () => console.log('http://localhost:8080'))