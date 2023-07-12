const express = require('express');
const db = require('./db');

const app = express()

const port = process.env.PORT | 3000

app.get('/', async (_, res) => {


    try {
        await db('peoples').insert({
            name: 'Luccas'
        })

        const peoples = await db.select().from('peoples')

        const peoplesToList = peoples.map(people => `<li>${people.name}</li>`)

        const template = `
        <h1>Full Cycle Rocks!</h1>
        </br>
    
        <ul>
        ${peoplesToList.join('')}
        </ul>
        `

        return res.send(template)
    } catch (error) {
        return res.send(error.message)
    }
})


app.listen(port, () => console.log(`Server is running at port ${port}`))