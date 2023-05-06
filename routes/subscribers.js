const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');


//Getting all
router.get('/', async (req, res) => {

    try {
        const subscriber =  await Subscriber.find()
        res.json(subscriber);
        
    } catch (err) {
        res.status(500).json({ message : err.message})
    }
})
//Getting one
router.get('/:id', (req,res)=>{
    res.send(req.params.id)
})
//Creating one
router.post('/', async (req, res)=>{

    const subscriber = new Subscriber({
        name : req.body.name,
        subscribeToChannel : req.body.subscribeToChannel
    })
    
      try {
        const newSubcriber = await subscriber.save()
        res.status(201).json(newSubcriber)

      } catch (err) {
        res.status(400).json({ message : err.message})
      }
})
//Updating one
router.patch('/:id', (req, res)=>{

})
//Deleting one
router.delete('/:id', (req, res)=>{

})

module.exports = router;