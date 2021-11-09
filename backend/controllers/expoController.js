import asyncHandler from 'express-async-handler';
import Expo from '../models/expoModel.js';


// @description     Fetch all photos
// @route           GET/api/photos
// @access          Public

const getExpos = asyncHandler(async (req, res) => {
    const expos = await Expo.find({})

    res.json(expos)
})

// @description     Fetch single photos
// @route           GET/api/photos/:id
// @access          Public

const getExpoById = asyncHandler(async (req, res) => {
    const expo = await Expo.findById(req.params.id)

    if (expo) {
        res.json(expo)
    } else {
        res.status(404)
        throw new Error('Expo Photo not found')
    }
})

// @description     Delete a photo
// @route           DELETE /api/photos/:id
// @access          Private/Admin

const deleteExpo = asyncHandler(async (req, res) => {
    const expo = await Expo.findById(req.params.id)

    if (expo) {
        await expo.remove()
        res.json({ message:'Expo photo removed'})
    } else {
        res.status(404)
        throw new Error('Expo photo not found')
    }
    
})

// @description     Create a photo
// @route           CREATE /api/photos
// @access          Private/Admin

const createExpo = asyncHandler(async (req, res) => {
    const expo = new Expo({
        name: 'Sample name',
        user: req.user._id,
        image: '/image/sample.jpg',
        category: 'Sample Category',
        description: 'Sample description',
        dimension: 'Sample dimension'
    })

    const createdExpo = await expo.save()
    res.status(201).json(createdExpo)
})

// @description     Update a photo
// @route           PUT /api/photos/:id
// @access          Private/Admin

const updateExpo = asyncHandler(async (req, res) => {
    const {
        name,
        description,
        dimension,
        image,
        category
    } = req.body

    const expo = await Expo.findById(req.params.id)

    if (expo) {
        expo.name = name
        expo.description = description
        expo.dimension = dimension
        expo.image = image
        expo.category = category

        const updatedExpo = await expo.save()
        res.json(updatedExpo)
    } else {
        res.status(404)
        throw new Error('Expo photo not found')
    }
})

export {
    getExpos,
    getExpoById,
    deleteExpo,
    createExpo,
    updateExpo
};