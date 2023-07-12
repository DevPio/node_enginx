const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    }
})

const initDB = async () => {
    const desenvolvedores = await knex.schema.hasTable('peoples');
    
    if (!desenvolvedores) {
        await knex.schema.createTable('peoples', table => {
            table.increments('id').primary()
            table.string('name')
        })

        console.log('connect')
    }

}


initDB();
module.exports = knex;