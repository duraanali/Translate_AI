import express from "express"

// Import the translate function from services
import { translate } from "../services/translationService.js"

const router = express.Router();

// Post request to /api/translate, taking text and direction

router.post("/translate", async (req, res, next) => {

    try {

        // get "text, direction" from request
        const { text, direction } = req.body

        if (typeof text !== "string" || text.trim().length === 0) {
            return res.status(400).json({
                success: false,
                message: "text is required and must be a non-empty string",
            });
        }

        if (direction !== "so-en" && direction !== "en-so") {
            return res.status(400).json({
                success: false,
                message: "direction must be either so-en or en-so",
            });
        }

        // call the translate function with await
        const data = await translate(text, direction)

        // return the response
        return res.status(200).json({ success: true, data})


    } catch(error) {
        next(error);
    }

})

export default router;