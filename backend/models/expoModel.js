import mongoose from 'mongoose'

const expoSchema = mongoose.Schema({

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
        required: true
    },

    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const Expo = mongoose.model('Expo', expoSchema);

export default Expo;