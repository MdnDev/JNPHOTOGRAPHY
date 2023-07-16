import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import photos from './data/photos.js';
import User from './models/userModel.js';
import Photo from './models/photoModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';
import Expo from './models/expoModel.js';
import expos from './data/expos.js';

dotenv.config();

connectDB()

const importData = async () => {
    
    try {
        await Order.deleteMany()
        await Photo.deleteMany()
        await User.deleteMany()
        await Expo.deleteMany()


        const createdUser = await User.insertMany(users)

        const adminUser = createdUser[0]._id

        const samplePhotos = photos.map(photo => {
            return { ...photo, user: adminUser }
        })

        await Photo.insertMany(samplePhotos)

        const sampleExpos = expos.map(expo => {
            return { ...expo, user: adminUser }
        })

        await Expo.insertMany(sampleExpos)
        
        console.log('data imported!'.green.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}


const destroyData = async () => {
    
    try {
        await Order.deleteMany()
        await Photo.deleteMany()
        await User.deleteMany()
        await Expo.deleteMany()
        
        console.log('data destroyed!'.red.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
};