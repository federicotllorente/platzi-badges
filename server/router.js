require('dotenv').config();
const express = require('express');
const router = express.Router();
const pool = require('./db');

router.get('/badges', async (req, res) => {
    const badges = await pool.query('SELECT * FROM badges');
    res.send(badges);
});

router.get('/badges/:badgeId', async (req, res) => {
    const requestedBadge = await pool.query('SELECT * FROM badges WHERE id = ?', [req.params.badgeId]);
    res.send(requestedBadge[0]);
});

router.post('/badges', async (req, res) => {
    const { fname, lname, email, jtitle, twitter } = req.body;
    const newBadge = { fname, lname, email, jtitle, twitter };
    await pool.query('INSERT INTO badges set ?', [newBadge]);
    console.log('Badge succesfully created!');
    console.log(newBadge);
    res.send(newBadge);
});

router.put('/badges/:badgeId', async (req, res) => {
    const { fname, lname, email, jtitle, twitter } = req.body;
    const updatedBadge = { fname, lname, email, jtitle, twitter };
    await pool.query('UPDATE badges set ? WHERE id = ?', [updatedBadge, req.params.badgeId]);
    console.log('Badge succesfully updated!');
    console.log(updatedBadge);
    res.send(updatedBadge);
});

router.delete('/badges/:badgeId', async (req, res) => {
    const badgeToDelete = await pool.query('DELETE FROM badges WHERE id = ?', [req.params.badgeId]);
    console.log('Badge succesfully deleted');
    console.log(badgeToDelete);
    res.send(badgeToDelete);
});

module.exports = router;