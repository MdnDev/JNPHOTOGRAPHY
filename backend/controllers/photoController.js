import asyncHandler from 'express-async-handler';
import Photo from '../models/photoModel.js';

// @description     Fetch all photos
// @route           GET/api/photos
// @access          Public

const getPhotos = asyncHandler(async (req, res) => {
    const photos = await Photo.find({})

    res.json(photos)
   
})

// @description     Fetch single photos
// @route           GET/api/photos/:id
// @access          Public

const getPhotoById = asyncHandler(async (req, res) => {
    const photo = await Photo.findById(req.params.id)

    if (photo) {
        res.json(photo)
    } else {
        res.status(404)
        throw new Error('Product not Found')
    }
    
})

// @description     Delete a photo
// @route           DELETE /api/photos/:id
// @access          Private/Admin

const deletePhoto = asyncHandler(async (req, res) => {
    const photo = await Photo.findById(req.params.id)

    if (photo) {
        await photo.remove()
        res.json({ message: 'Photo retirée'})
    } else {
        res.status(404)
        throw new Error('Product not Found')
    }
    res.json(photo)
})

// @description     Create a photo
// @route           CREATE /api/photos
// @access          Private/Admin

const createPhoto = asyncHandler(async (req, res) => {
    const photo = new Photo({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/image/sample.jpg',
        category: 'Sample Category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description'
    })

    const createdPhoto = await photo.save()
    res.status(201).json(createdPhoto)
})


// @description     Update a photo
// @route           PUT /api/photos/:id
// @access          Private/Admin

const updatePhoto = asyncHandler(async (req, res) => {
    const {
        name, 
        price, 
        description, 
        image, 
        category, 
        countInStock
    } = req.body

    const photo = await Photo.findById(req.params.id)

    if(photo) {
        photo.name = name
        photo.price = price
        photo.description = description
        photo.image = image
        photo.category = category
        photo.countInStock = countInStock


        const updatedPhoto = await photo.save()
        res.json(updatedPhoto)

    } else {
        res.status(404)
        throw new Error('Photo not found')
    }
})



export {
    getPhotos,
    getPhotoById,
    deletePhoto,
    createPhoto,
    updatePhoto
};