const express = require("express");
const router = express.Router();
import db from '../db'
// const chirpsStore = require("../chirpstore.js");
// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.

// REST API
router.get("/:id?", async (req, res) => {
    const id = req.params.id;

    try {
        if (id) {
            res.json(await db.Chirps.one(id))
        } else {
            res.json(await db.Chirps.all())
        }

    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
});

// Create
router.post("/", async (req, res) => {
    const body = req.body;

    try {res.json(await db.Chirps.one(body))
    res.sendStatus(200);
    } catch(e){
        res.send(e)
    }
});

// Delete
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    try{res.json(await db.Chirps.one(id))
        console.log('Deleted!')
        res.sendStatus(200);
    } catch (e){
        res.send(e)
    }
    
});

// Update
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;

    // chirpsStore.UpdateChirp(id, body);
    res.sendStatus(200);
});

module.exports = router;