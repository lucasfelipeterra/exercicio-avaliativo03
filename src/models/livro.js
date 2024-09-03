let nextId = 1;

const model = (body, id = nextId++) => {
    const ano = body.ano;
    let soNumeros = true

    ano.split("").forEach((el) => {
        if (isNaN(Number(el))) {
            soNumeros = false;
        }
    });

    if (
        body.titulo != undefined &&
        body.autor != undefined &&
        body.genero != undefined &&
        body.titulo != "" &&
        body.autor != "" &&
        body.genero != "" &&
        ano != "" &&
        soNumeros == true
    ) {
        return {
            id,
            titulo: body.titulo,
            autor: body.autor,
            genero: body.genero,
            ano: body.ano,
        };
    }
};

module.exports = model;
