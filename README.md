# FakeShop 

## Requerimientos funcionales
Realizar una pequeña simulación de una tienda. Para ello nos serviremos de la API de pruebas de Platzi:
```
https://fakeapi.platzi.com/
```
Para las conexiones a esta API nos serviremos de axios.


## Vistas
La aplicación consta de 4 vistas:  
1. Login
2. Lista de productos
3. Perfil
4. Detalle de producto


## Funcionalidades:
- Como todas las vistas, que no son la del login, en la parte superior se mostrará un menú de navegación con un botón para hacer logout. 
- En todas estas pantallas no se podrá navegar de ninguna manera sin tener un token guardado. Si no se tiene se navegará a la pantalla de login.
- El menú tendrá dos enlaces, uno para la vista de Listado de productos y otro para la vista del Perfil. 
- El botón de logout borrará el token guardado de todos los sitios donde esté y navegará al login.
- Se requiere un formulario sencillo de login con dos inputs: uno de tipo email y
otro de tipo password (Si la petición es correcta (devuelve un status 201 y un data con el token) se
guardará el token en el estado y en el localstorage y se navegará al listado de
productos.
Si la petición es incorrecta (status de de 401), se debe mostrar un error.
)
- El listado podrá filtrarse por título y por defecto se mostrarán los resultados
sin filtrar. Para filtrar es necesario meter al menos 3 caracteres.
- Para cada producto se mostrará un componente con los datos básicos y una
de las imágenes. 

## Funcionalidades opcionales:
- Añadir componente de "añadir productos al carrito".
- Añadir página de Error

