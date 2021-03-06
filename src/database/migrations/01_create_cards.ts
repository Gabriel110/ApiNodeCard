import { Knex } from "knex";


export async function up(knex: Knex){
    return knex.schema.createTable("create_card", table=>{
        table.increments("id").primary(),
        table.string('name').notNullable(),
        table.integer('stars').notNullable(),
        table.string('description').notNullable()
    })
}


export async function down(knex: Knex){
    return knex.schema.dropTable('create_card')
}

