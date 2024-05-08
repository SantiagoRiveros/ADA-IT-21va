const saveButton = document.getElementById("saveButton")

saveButton.addEventListener("click", function () {
    console.log(categorias)
    let nombreInput = document.getElementById("nombre")
    let nuevaCategoria = {
        id: categorias.length + 1,
        nombre: nombreInput.value
    }
    categorias.push(nuevaCategoria)
    nombreInput.value = ""
    cargarCategoriaLista()
    cargarCategoriasSelect()
})

let categorias = [
    {
        id: 1,
        nombre: "Viajes"
    },
    { id: 2, nombre: "Servicios" },
    { id: 3, nombre: "Comida" }
]
let categoriasCargada = []

function cargarCategoriasSelect() {
    const categoriaSelect = document.getElementById("categoriasSelect")
    /* categorias.map(categoria => {
        if (categorias.find(cate => cate.nombre === categoria.nombre)) {
            let categoriaOption = document.createElement("option")
            categoriaOption.textContent = categoria.nombre
            categoriaSelect.appendChild(categoriaOption)
            console.log(categorias.find(cate => cate.id === categoria.id))
        }

    }) */
    if (!categoriasCargada.length) {
        categorias.map(categoria => {
            if (categorias.find(cate => cate.nombre === categoria.nombre)) {
                let categoriaOption = document.createElement("option")
                categoriaOption.textContent = categoria.nombre
                categoriaSelect.appendChild(categoriaOption)
                console.log(categorias.find(cate => cate.id === categoria.id))
            }
        })
        categoriasCargada = [...categorias]
    } else {
        for (let i = 0; i < categorias.length; i++) {
            console.log(categoriasCargada[i])
            if (!categoriasCargada[i]) {
                let categoriaOption = document.createElement("option")
                categoriaOption.textContent = categorias[i].nombre
                categoriaSelect.appendChild(categoriaOption)
                categoriasCargada[i] = categorias[i]
            }


        }
    }

}

cargarCategoriasSelect()

function cargarCategoriaLista() {
    const categoriaLista = document.getElementById("categoriaLista")
    categorias.forEach(categoria => {
        let categoriaListItem = document.createElement("li")
        categoriaListItem.textContent = categoria.nombre
        categoriaListItem.style.listStyle = "none"
        categoriaLista.appendChild(categoriaListItem)
    })
}

cargarCategoriaLista()