import knex from 'knex'
import knextFile from '../../knexfile'

const database = knex(knextFile.development)

export default database