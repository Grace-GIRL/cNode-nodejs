const indexCtrl=require('./controllers/index')
const userCtrl=require('./controllers/user')
const topicCtrl=require('./controllers/topic')

const express=require('express')

const router=express.Router()

router
    .get('/',indexCtrl.showIndex)

router
    .get('/signin',userCtrl.showSignin)
    .post('/signin',userCtrl.handleSignin)
    .get('/signup',userCtrl.showSignup)
    .post('/signup',userCtrl.handleSignup)
    .post('/signout',userCtrl.handleSignout)

router
    .get('/topic/create',topicCtrl.showCreate)
    .post('/topic/create',topicCtrl.handleCreate)
    .get('/topic/show',topicCtrl.showTopic)
    .get('/topic/edit', topicCtrl.showEdit)
    .post('/topic/edit', topicCtrl.handleEdit)
    .get('/topic/delete', topicCtrl.handleDelete)


module.exports=router
