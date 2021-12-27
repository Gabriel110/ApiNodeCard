import database from "../database";
import {Request, Response} from 'express'

const table = 'create_card'

export default class CardController{

    
    async create(req:Request, res:Response) {
        const {name, stars, description} = req.body
        const transaction = await database.transaction()
        try{
            const cardIsaert = await transaction(table).insert({name, stars, description})
            await transaction.commit()
            return res.status(200).send()
        }catch(err){
            await transaction.rollback()
            res.status(400).json({
                erro:'Unexpect error while create new class'
            })
        }
    }

    async index(req:Request, res:Response){
        try{
            const card = await database(table).select('*')
            return  res.status(200).json(card)
        }catch(err){
            res.status(400).json({
                erro:'Unexpect error while create new class'
            })
        }
    }

    async remove(req:Request, res:Response){
        try{
            const {id} = req.params
            const card = await database(table).where({id}).limit(1)
            if(!card[0]) return res.status(404).json(`File not fould id:${id}`)
            await database(table).del("*").where({id})
            return res.status(200).json(`File with id:${id} deleted successfully`) 
        }catch(err){
            res.status(400).json({
                erro:'Unexpect error while create new class'
            })
        }
    }
}
