const pizza = [
    {
        nombre: "Napolitana",
        id: 1,
        ingredientes: [
            "Harina",
            " Aceite",
            " Sal",
            " Tomate",
            " Salsa de Tomate",
            " Queso Mozzarella",
            " Ajo Triturado",
            " Oregano"
        ],
        precio: 750,
        stock: true,
        categoria: "Pizzería",
        envio: false,
    },
    {
        nombre: "Margarita",
        id: 2,
        ingredientes: [
            "Harina",
            " Sal",
            " Albahaca",
            " Salsa de Tomate",
            " Queso Mozzarella",
            " Aceite",
            " Pimienta",
            " Oregano"
        ],
        precio: 850,
        stock: true,
        categoria: "Pizzería",
        envio: true,
    },
    {
        nombre: "Cuatro Quesos",
        id: 3,
        ingredientes: [
            "Harina",
            " Sal",
            " Aceite",
            " Salsa de Tomate",
            " Queso Parmesano",
            " Queso Fontina",
            " Queso Mozzarella",
            " Queso Gorgonzola"
        ],
        precio: 920,
        stock: false,
        categoria: "Pizzería",
        envio: false,
    },
    {
        nombre: "Carbonara",
        id: 4,
        ingredientes: [
            "Harina",
            " Sal",
            " Aceite",
            " Pimienta",
            " Huevo",
            " Queso Parmesano",
            " Cebolla",
            " Bacon"
        ],
        precio: 570,
        stock: true,
        categoria: "Pizzería",
        envio: true,
    },
    {
        nombre: "Barbacoa",
        id: 5,
        ingredientes: [
            "Harina",
            " Sal",
            " Aceite",
            " Barbacoa",
            " Carne Picada",
            " Queso Mozzarella",
        ],
        precio: 1050,
        stock: true,
        categoria: "Pizzería",
        envio: true,
    },
    {
        nombre: "Fugazza",
        id: 6,
        ingredientes: [
            "Harina",
            " Sal",
            " Aceite",
            " Queso Parmesano",
            " Aceitunas Verdes",
            " Cebolla",
            " Oregano"
        ],
        precio: 480,
        stock: false,
        categoria: "Pizzería",
        envio: false,
    },
        {
        nombre: "Mexicana",
        id: 7,
        ingredientes: [
            "Harina",
            " Sal",
            " Pimienta",
            " Pimenton",
            " Tabasco",
            " Aceite",
            " Salsa de Tomate",
            " Queso Mozzarella",
            " Cebolla",
            " Ajo Triturado",
            " Pimiento Rojo",
            " Carne Picada"
        ],
        precio: 1100,
        stock: true,
        categoria: "Pizzería",
        envio: true,
    },
    {
        nombre: "Pollo",
        id: 8,
        ingredientes: [
            "Harina",
            " Sal",
            " Aceite",
            " Salsa de Tomate",
            " Queso Cremoso",
            " Crema de Leche",
            " Pollo",
            " Aji Molido",
            " Provenzal"
        ],
        precio: 1250,
        stock: false,
        categoria: "Pizzería",
        envio: false,
    },
    {
        nombre: "Especial",
        id: 9,
        ingredientes: [
            "Harina",
            " Sal",
            " Aceite",
            " Salsa de Tomate",
            " Queso Mozzarella",
            " Jamon Cocido",
            " Oregano",
            " Pimiento Rojo",
            " Aceitunas Verdes"
        ],
        precio: 600,
        stock: true,
        categoria: "Pizzería",
        envio: true,
    },
    {
        nombre: "Pepperoni",
        id: 10,
        ingredientes: [
            "Harina",
            " Sal",
            " Aceite",
            " Salsa de Tomate",
            " Queso Mozzarella",
            " Albahaca",
            " Oregano",
            " Pepperoni"
        ],
        precio: 900,
        stock: true,
        categoria: "Pizzería",
        envio: true,
    },
    {
        nombre: "Champignones",
        id: 11,
        ingredientes: [
            "Harina",
            " Sal",
            " Aceite",
            " Salsa de Tomate",
            " Queso Mozzarella",
            " Champignones",
            " Oregano",
            " Cebolla"
        ],
        precio: 570,
        stock: false,
        categoria: "Pizzería",
        envio: false,
    },
    {
        nombre: "Rúcula",
        id: 12,
        ingredientes: [
            "Harina",
            " Sal",
            " Aceite",
            " Salsa de Tomate",
            " Queso Mozzarella",
            " Provolone",
            " Rúcula",
            " Oregano",
            " Jamón Cocido",
            " Aceitunas Verdes"
        ],
        precio: 790,
        stock: true,
        categoria: "Pizzería",
        envio: true,
    }
]


//Respuesta a)

const idImpar = pizza.filter( (pizza) => {
    return pizza.id % 2 === 1;
})

idImpar.forEach( (pizza) => {
   console.log(`La pizza ${pizza.nombre} tiene un id impar`);
})

//Respuesta b)
const menorA600 = (precio) => {
    return pizza.some((pizza) => {
        return pizza.precio < precio;
    })
    ? console.log(`Contamos con pizzas que cuesten menos de $${precio} `)
    : console.log(`No contamos pizzas que cuesten menos de $${precio} `);
};

menorA600(600)


//Respuesta c)
const nombrePrecio = pizza.filter( (pizza) => {
    return pizza.nombre, pizza.precio;
})

nombrePrecio.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre}, tiene un valor de $${pizza.precio}.`);
})

//Respuesta d)
const ingredientesPizza = pizza.sort((pizza) => {
    return pizza.nombre, pizza.ingredientes;
});

ingredientesPizza.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre}, tiene los siguientes ingredientes: ${pizza.ingredientes}.`);
})