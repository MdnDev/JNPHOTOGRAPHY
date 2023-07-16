import mongoose from 'mongoose';



const photoSchema = mongoose.Schema({
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true,
        
    },

    category: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    dimension: {
        type: String,
        required: false,
    },

    price: {
        type: Number,
        required: true,
        default: 0
    },

    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    timestamps: true
})

const Photo = mongoose.model('Photo', photoSchema);

export default Photo;