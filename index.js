require('dotenv').config();
const knex = require('./database')
const express = require('express');
const morgan = require('morgan');
const app = express();
const menuItemRoutes = require('./routes/menuItems')


app.use(morgan('dev'));
app.use(express.json());

app.get('/', (request ,response)=>{
    response.send('menu-knex')
})

app.use('/menuitems', menuItemRoutes)


app.listen(process.env.PORT, () => {
    console.log(`library-express: Express application is listening on port ${process.env.PORT}...`);
});