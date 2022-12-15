//Template STRING

const nombre = 'Jaime';
const apellido = 'Quintul';

//const nombreCompleto = nombre + '' + apellido;
const nombreCompleto = `
${ nombre} 
${apellido}
`;


console.log(nombreCompleto);

function getSaludo() {
    return 'Hola Mundo';
}

console.log(`Este es un texto: ${getSaludo()}`)