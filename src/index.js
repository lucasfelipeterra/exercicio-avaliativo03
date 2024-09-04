const express = require("express")
const estudante_router = require("./routes/estudante.js")
const livro_router = require("./routes/livro.js")
const aluguel_router = require("./routes/aluguel.js")
const app = express()
const port = 3000

app.use(express.json())


app.use("/estudante", estudante_router)
app.use("/alguel", aluguel_router)
app.use("/rede", livro_router)

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})