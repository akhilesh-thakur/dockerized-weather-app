const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const apiKey = '3eb936bf28e4b81fe7d690aea01b4305'

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
    try {
        const city = req.query.city;
        const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        res.json(weatherResponse.data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
