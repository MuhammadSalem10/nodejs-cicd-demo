const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to our Node.js App!</h1><p>This page was deployed automatically with GitHub Actions.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});