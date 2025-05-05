const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const path = require('path')
const cookieParser = require('cookie-parser')
const User = require('./models/user')
const jwt = require('jsonwebtoken')

app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.render("index")
})

app.post('/create', async (req,res)=>{
    try {
        const {name,email,password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const createdUser = await User.create({
            name,
            email,
            password: hash
        })

        let token =  jwt.sign({email},"shhhhhh")
        res.cookie("token", token)
        res.send(createdUser)
    } catch (error) {
        console.error('Error creating user:', error)
        res.status(500).send('Error creating user')
    }
})

app.get('/logout', async (req,res)=>{
    res.clearCookie("token")
    res.redirect('/')
})

app.get('/login', (req,res)=>{
    res.render("login")
})

app.post('/login', async (req,res)=>{
    let logged = await User.findOne({email: req.body.email})
    if(!logged){
        return res.status(400).send("User not found")
    } 
    let match = await bcrypt.compare(req.body.password, logged.password)
    if(!match){
        return res.status(400).send("Invalid credentials")
    }
    let token =  jwt.sign({email: logged.email},"shhhhhh")
    res.cookie("token", token)
    res.send("Logged in successfully")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

