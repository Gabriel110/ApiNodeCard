import express from 'express'
import routers from './router'
import erroHandler from './util/handler/ErroHandler'

const port = 3000 || process.env.PORT
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(routers)
app.use(erroHandler)
app.listen(port,()=>{
    console.log(`Api rodando na porta ${port}`)
})

export default app


