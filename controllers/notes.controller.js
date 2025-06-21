const Notes = require("../model/Notes")

const addNote = async (req, res) => {
    await Notes.create(req.body)
    res.json({ message: "notes  create success" })
}
const getNote = async (req, res) => {
    const result = await Notes.find(req.body)
    res.json({ message: "notes  fetch success", result })
}
const updateNote = async (req, res) => {
    const { nid } = req.params
    await Notes.findByIdAndUpdate(nid, req.body)
    res.json({ message: "notes  update success", })
}
const deleteNote = async (req, res) => {
    const { nid } = req.params
    await Notes.findByIdAndDelete(nid)
    res.json({ message: "notes  delete success", })
}
module.exports = { addNote, getNote, updateNote, deleteNote }