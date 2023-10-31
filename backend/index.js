import cohere from "cohere-ai";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./db/connectToDatabase.js";
import { Review } from "./models/reviews.js";
import { POSITIVE_SAMPLES, NEGATIVE_SAMPLES } from "./examples.js";

dotenv.config();

const app = express();
app.use(cors("*"));
app.use(express.json());

(async () => {
    await connectToDatabase();
})();

cohere.init(process.env.API_KEY)

async function classifyReview(review) {
    const response = await cohere.classify({
        inputs: [review],
        examples: POSITIVE_SAMPLES.map((review) => ({ 
            text: review, label: "positive" 
        })).concat(NEGATIVE_SAMPLES.map((review) => ({
            text: review, label: "negative"
        })))
    });
    return response.body.classifications[0];
}

app.post("/", async (req, res) => {
    try {
        const {review} = req.body;
        console.log(review)
        const classification = await classifyReview(review);
        const reviewData = new Review({
            review,
            prediction: classification.prediction,
            positiveConfidence: classification.positiveConfidence,
            negativeConfidence: classification.negativeConfidence
        });
        await reviewData.save();
        console.log(reviewData)
        res.send(reviewData);
        }
        catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    });

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
