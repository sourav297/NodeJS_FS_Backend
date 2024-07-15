const express=require('express');
const router=express.Router();


router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'succesful GET request',
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    })
})

router.get('/:id', (req, res, next)=>{
    res.status(200).json({
        message: `successful GET request by ID ${req.params.id}`,
        metadata: {
            ID: req.params.id,
            hostname: req.hostname,
            method: req.method
        }
    })
})

router.post('/', (req, res, next)=>{
    let name=req.body.name;
    res.status(200).json({
        message: 'succesful POST request',
        metadata: {
            Name: name,
            hostname: req.hostname,
            method: req.method
        }
    })
})

router.post('/:id', (req, res, next)=>{
    let name=req.body.name;
    res.status(200).json({
        message: `successful POST request by ID ${req.params.id}`,
        metadata: {
            Name: name,
            ID: req.params.id,
            hostname: req.hostname,
            method: req.method
        }
    })
})


router.put('/:id', (req, res, next)=>{
    res.status(200).json({
        message: `successful PUT request by ID ${req.params.id}`,
        metadata: {
            ID: req.params.id,
            hostname: req.hostname,
            method: req.method
        }
    })
})


router.delete('/:id', (req, res, next)=>{
    res.status(200).json({
        message: `successful DELETE request by ID ${req.params.id}`,
        metadata: {
            ID: req.params.id,
            hostname: req.hostname,
            method: req.method
        }
    })
})

module.exports=router;