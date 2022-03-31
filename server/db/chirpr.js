import { Query } from "./index";

const all = async() => Query('SELECT * FROM Chirps')
const one = async(id) => Query('SELECT * FROM chirps WHERE id = ?', [id])

export default {
    all,
    one
}