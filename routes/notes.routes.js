const { getNote, addNote, updateNote, deleteNote } = require("../controllers/notes.controller")

const router = require("express").Router()
router
    .get("/", getNote)
    .post("/create", addNote)
    .put("/modify/:nid", updateNote)
    .delete("/remove/:nid", deleteNote)
module.exports = router