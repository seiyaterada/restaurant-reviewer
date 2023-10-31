import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    review: String,
    prediction: String,
    positiveConfidence: Number,
    negativeConfidence: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Review = mongoose.model("Review", reviewSchema);