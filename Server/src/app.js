import express from "express";
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Demo route
app.get("/", (req, res) => {
    res.send("PulseCheck Server is running");
});

export default app;