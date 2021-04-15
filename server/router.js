require('dotenv').config();
const express = require('express');
const router = express.Router();
const pool = require('./db');

router.get('/badges', async (req, res) => {
    await pool.query('SELECT * FROM badges')
        .then(data => {
            console.log(data);
            return res.status(200).send(data);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send('[router] There was an error trying to get the badges');
        });
});

router.get('/badges/:badgeId', async (req, res) => {
    await pool.query('SELECT * FROM badges WHERE id = ?', [req.params.badgeId])
        .then(data => {
            console.log(data);
            return res.status(200).send(data[0]);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send(`[router] There was an error trying to get the badge ${req.params.badgeId}`);
        });
});

router.post('/badges', async (req, res) => {
    const { fname, lname, email, jtitle, twitter } = req.body;
    const newBadge = { fname, lname, email, jtitle, twitter };
    await pool.query('INSERT INTO badges set ?', [newBadge])
        .then(data => {
            console.log('Badge succesfully created!');
            console.log(data);
            return res.status(201).send(data);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send('[router] There was an error trying to add a badge');
        });
});

router.put('/badges/:badgeId', async (req, res) => {
    const { fname, lname, email, jtitle, twitter } = req.body;
    const updatedBadge = { fname, lname, email, jtitle, twitter };
    await pool.query('UPDATE badges set ? WHERE id = ?', [updatedBadge, req.params.badgeId])
        .then(data => {
            console.log('Badge succesfully updated!');
            console.log(data);
            return res.status(200).send(updatedBadge);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send('[router] There was an error trying to add a badge');
        });
});

router.delete('/badges/:badgeId', async (req, res) => {
    await pool.query('DELETE FROM badges WHERE id = ?', [req.params.badgeId])
        .then(data => {
            console.log('Badge succesfully deleted');
            console.log(data);
            return res.status(200).send(data);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send('[router] There was an error trying to add a badge');
        });
});

module.exports = router;