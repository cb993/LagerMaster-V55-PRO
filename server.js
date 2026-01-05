const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = new sqlite3.Database('./inventory.db');

app.use(bodyParser.json());
app.use(express.static('public'));

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS items (
        name TEXT PRIMARY KEY, bc TEXT, q REAL, min REAL, loc TEXT, pos TEXT, vendors TEXT
    )`);
});

app.get('/api/list', (req, res) => {
    db.all("SELECT * FROM items", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows.map(row => ({ ...row, vendors: JSON.parse(row.vendors || '[]') })));
    });
});

app.post('/api/save', (req, res) => {
    const i = req.body;
    const stmt = db.prepare("INSERT OR REPLACE INTO items (name, bc, q, min, loc, pos, vendors) VALUES (?, ?, ?, ?, ?, ?, ?)");
    stmt.run(i.name, i.bc, i.q, i.min, i.loc, i.pos, JSON.stringify(i.vendors || []), () => res.json({ success: true }));
});

app.post('/api/delete', (req, res) => {
    db.run("DELETE FROM items WHERE name = ?", req.body.name, () => res.json({ success: true }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`LagerMaster auf Port ${PORT}`));
