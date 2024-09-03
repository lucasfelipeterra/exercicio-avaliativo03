const express = require("express")
const estudante_router = require("./routes/estudante.js")
const livro_router = require("./routes/livro.js")
const servico_router = require("./routes/servico.js")
const app = express()
const port = 3000

app.use(express.json())

app.use("/atendimento", atendimento_router)
app.use("/servico", servico_router)
app.use("/cliente", estudante_router)
app.use("/barbeiro", barbeiro_router)
app.use("/barbearia", barbearia_router)
app.use("/rede", livro_router)
app.use("/usuario", usuario_router)

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})