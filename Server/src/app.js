import express from "express";
const app = express();

//Demo route
app.get("/", (req, res) => {
    res.send("PulseCheck Server is running");
});

export default app;