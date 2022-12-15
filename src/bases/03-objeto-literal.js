//Objeto Literal

const persona = {
        nombre: 'Jaime',
        apellido: 'Quintul',
        edad: 25,
        direccion: {
            ciudad: 'Punta Arenas',
            zip: 620000,
            lat: 14.3332,
            lnt: 34.9926532
        }

};

console.log({ persona });

//Operador SPREAD
//Sirve para extraer propiedades de un objeto ya creado
//hacer un clon de un objeto
const persona2 = { ...persona }
persona2.nombre = 'Pedro'

console.log(persona, persona2);