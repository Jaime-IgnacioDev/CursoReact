// Funciones

const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;

console.log(saludar2 ('Jaime'));
console.log(saludar3 ('Jaime'));

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Jaime123',
    }
}

console.log( getUser() )

// transformar a una funcion de flecha
// tiene que retornar un objeto implicito

const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC456',
        username: nombre,
});

const usuarioActivo = getUsuarioActivo('Jaime Ignacio');
console.log( usuarioActivo );


