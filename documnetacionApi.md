## productos
1. Obtener todos los productos
Método: GET
URL: http://localhost:3010/api/products

2. Obtener un producto por ID
Método: GET
URL: http://localhost:3010/api/products/1 
(este ejemplo se uso el producto numero 1, pero puede ser otro producto.)

3. Crear un nuevo producto
Método: POST
URL: http://localhost:3010/api/products
Cuerpo (JSON):
{
  "name": "langostinos",
  "category_id": 1,
  "description": "langostinos gratinados con finas hierbas",
  "price": 1620
}


4. Actualizar un producto
Método: PUT
URL: http://localhost:3010/api/products/1 
(este ejemplo se uso el producto numero 1, pero puede ser otro producto.)
Cuerpo (JSON):
{
  "price": 1600
}

5. Eliminar un producto
Método: DELETE
URL: http://localhost:3010/api/products/1 
(sustituir "1" por el ID real del producto que quieres eliminar)

6. Obtener buscar un producto 
Método: GET
URL: http://localhost:3010/api/products/search/arr
(en este caso devuelve los productos que tienen arr en el contenido del name del prodcuto, devuelve los que tienen arroz por ej.)


## usuarios
1. Creación de Usuario (POST /users):
Método: POST
URL: http://localhost:3010/api/users
Cuerpo (JSON):

{
  "firstName": "juan",
  "lastName": "perez",
  "email": "juan@perez.com",
  "password": "Password1*",
}

1. Ver Detalle de un Usuario (GET /users/:id):
Método: GET
URL: http://localhost:3010/api/users/1 

1. Editar un Usuario (PUT /users/:id):
Método: PUT
URL: http://localhost:3010/api/users/1
Cuerpo (JSON):
{
  "firstName": "Juan",
  "lastName": "perez",
  "email": "juan@perez.com"
}
