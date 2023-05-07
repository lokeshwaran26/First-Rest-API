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
router.get('/:id', getSubscriber, (req,res)=>{
    res.json(res.subscriber)
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
router.delete('/:id', getSubscriber, async (req, res)=>{
    
    try {
         await res.subscriber.remove()
         res.json(" Deleted Subscriber!")

    } catch (err) {
        res.status(500).json({ message : err.message})
        
    }
    
})

async function getSubscriber( req, res,  next){
    let subscriber
    try {
        subscriber =  await  Subscriber.findById(req.params.id);
        if(subscriber === null){
            return res.status(404).json({ message : "id not found!"})
        }


    } catch (err) {
        res.status(500).json({ message : err.message });
    }

    res.subscriber = subscriber
    next();
}

module.exports = router;