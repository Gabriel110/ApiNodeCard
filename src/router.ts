import express from 'express'
import CardController from './controllers/CardController'

const router = express.Router()
const card = new CardController()

router.get('/',(req, res)=>{
    return res.json({messagem:"Rota de teste!"})
})

router
    .get('/index/card', card.index)
    .post('/create/card', card.create)
    .delete('/delete/card/:id', card.remove)


export default router