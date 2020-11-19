const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/',async(req,res) =>{
    try {
            const users = await user.find()
            res.json(users)
    } catch (err) {
        res.send('Error '+ err)
    }
})

router.get('/:id',async(req,res) =>{
    try {
            const users = await user.findById(req.params.id)
            res.json(users)
    } catch (err) {
        res.send('Error '+ err)
    }
})

router.delete('/:id',async(req,res) =>{
    try {
            const users = await user.findById(req.params.id)
            const a1 = await users.remove()
            res.json(a1)
    } catch (err) {
        res.send('Error '+ err)
    }
})

router.patch('/:id',async(req,res) =>{
    try {
        const users = await user.findById(req.params.id)
        users.name=req.body.name
        users.email=req.body.email
        users.tech=req.body.tech
        const a1 = await users.save()
        res.json(a1)
    } catch (err) {
        res.send('Error '+ err)
    }
})

router.post('/',async(req,res) =>{
            const users = new user ({
                name: req.body.name,
                email: req.body.email,
                tech: req.body.tech
            })
            try {
                const a1 = await users.save()
                res.json(a1)
        } catch (err) {
            res.send('Error '+ err)
        }
})


module.exports = router