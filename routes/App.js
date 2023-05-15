
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
router.patch('/:id', getSubscriber, async (req, res)=>{

    if(req.body.name == !null){
        res.subscriber.name = req.body.name
    }
    if(req.body.subscribeToChannel == !null){
        res.subscriber.subscribeToChannel = req.body.subscribeToChannel
    }

    try {
        const updateSubscriber = await res.subscriber.save()
        res.status(201).json(updateSubscriber)
    } catch (err) {
        res.status(400).json({ message : err.message })
    }

})


//Deleting one
router.delete('/:id', getSubscriber, async (req, res)=>{
    
    try {
         await res.subscriber.deleteOne()
         res.json(" Deleted Subscriber!")

    } catch (err) {
        res.status(500).json({ message : err.message})
        
    }
    
})