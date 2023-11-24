const express = require('express');

const app = express();


/**Tipos de parametros
 * 
 * ROTER PARMS - parametros de rota
 *
 * ROUTE PARAMS => Identificar um recurso editar/deletar/buscar
 * 
 * QUERY PARAMS => Paginação / Filtro
 */

app.get("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Cruso 3"])
});

app.post("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Cruso 3", "Course 4"])
})

app.put("/courses/:id", (request, response) => {
    const { id } = request.params;
    return response.json(["Curso 6", "Curso 2", "Cruso 3", "Course 4"])
})

app.path("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Cruso 3", "Course 4"])
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 2", "Curso 4"])
})

app.listen(3333);