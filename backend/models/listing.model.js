import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    regularPrice: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    furnished: {
        type: Boolean,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    parking: {
        type: Boolean,
        required: true
    },
    parking: {
        type: Boolean,
        required: true
    },
    offer: {
        type: Boolean,
        required: true
    },
    imageURLs: {
        type: [String],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    userRef: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Listing', listingSchema);