require('dotenv').config(); // load .env file

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// POST Route
app.post('/api/contact/submit', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();
        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to submit form' });
    }
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
