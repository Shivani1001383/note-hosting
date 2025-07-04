const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.static("dist"))

app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use("/api/note", require("./routes/notes.routes"))
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("mongo connected");
    app.listen(process.env.PORT, console.log("server running"))

})