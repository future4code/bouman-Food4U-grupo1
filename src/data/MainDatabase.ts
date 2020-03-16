import knex from 'knex';

export default class MainDB {
    protected connection = knex({
    client: 'mysql',
    connection: {
    host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user: 'mateus',
    password: 'fI8OWWG88KbgQHru7e2A',
    database: 'bouman-mateus'
    }
    })
}

