const express = require('express') 
const app = express()
const port = 3000
//import cors from 'cors';
//app.use(cors());


app.get('/', (req, res) => {
    res.send('HI')
})

app.listen(port, () => {
    console.log('smth')
})

