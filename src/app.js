import express from "express";
import cors from 'cors'
import corsOption from "./Config/CorsConfig.js";
import response from "./Utils/ResponseHandler.js";

const app = express()
const PORT = 8349

app.use(cors(corsOption))
app.use(express.json())

app.get('/', (req, res) => {
    return response(res, 200, {message:"Server online"})
})

//not found route
app.use((req, res) => {
    return response(res, 404, { message: "Endpoint not found" })
})


// call listen in a production environment
app.listen(PORT, () => {
    console.log(`Gateway is listening on ${PORT}`);
});

// Export the app instance, for testing
export default app;