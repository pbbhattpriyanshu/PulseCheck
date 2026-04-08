import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import dbConnect from "./src/Config/database.config.js";

const PORT = process.env.PORT || 3000;
dbConnect();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});