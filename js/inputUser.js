
/*
const hoteles = [
{ id: 1, Nombre:'Hotel Argentina', Departamento: 'Canelones', Localidad: 'Atlantida', Capacidad: [2, 4, 6], Valoracion: 4.5, Coordenadas: ''}, 
{ id: 2, Nombre:'Complejo turistico Paradise', Departamento: 'Canelones', Localidad: 'Atlantida', Capacidad: [2, 4, 6], Valoracion: 5.0, Coordenadas: ''},
{ id: 3, Nombre:'Posada Biarritz', Departamento: 'Canelones', Localidad: 'Canelones', Capacidad: [2, 3, 4, 6], Valoracion: 2.8, Coordenadas: ''},
{ id: 4, Nombre:'Mocaccino', Departamento: 'Canelones', Localidad: 'El Pinar', Capacidad: [2, 4, 6], Valoracion: 3.6, Coordenadas: ''},
{ id: 5, Nombre:'El Descubrimiento Resort Club', Departamento: 'Canelones', Localidad: 'Guazuvirá', Capacidad: [2, 4, 6], Valoracion: 4.8, Coordenadas: ''},
]
*/

const list_hoteles = [['Hotel Argentina', 'Canelones', 'Atlantida', [2, 4, 6], 4.5, ''],
['Complejo turistico Paradise', 'Canelones', 'Atlantida', [2, 4, 6], 5.0, ''],
['Posada Biarritz', 'Canelones', 'Canelones', [2, 3, 4, 6], 2.8, ''],
['Mocaccino', 'Canelones', 'El Pinar', [2, 4, 6], 3.6, ''],
['El Descubrimiento Resort Club', 'Canelones', 'Guazuvirá', [2, 4, 6], 4.8, '']
['The Grand Hotel', 'Maldonado', 'Punta del Este', [2, 3, 4, 6], 2.8, ''],
['Enjoy Hotel & Casino', 'Maldonado', 'Punta del Este', [2, 4, 6], 3.6, ''],
['Hotel Casino San Eugenio de Cuareim', 'Artigas', 'Artigas', [2, 4, 6], 3.2, '']
['Hotel Parque Oceanico', 'Rocha', 'La Coronilla', [2, 4, 6], 3.2, '']
['Las Margaritas', 'Rocha', 'La Coronilla', [2, 4], 2.8, '']


];

let index = 1
const hoteles = []

function Room (id, nombre, departamento, localidad, capacidad, valoracion, coordenadas) {
    this.id = id;
    this.Nombre = nombre;
    this.Departamento = departamento;
    this.Localidad = localidad;
    this.Capacidad = capacidad;
    this.Valoracion = valoracion;
    this.Coordeenadas = coordenadas;
}


list_hoteles.forEach((element)=>{
    var room = new Room(index, element[0], element[1], element[2], element[3], element[4], element[5], element[6]);
    hoteles.push(room);
    index = index + 1
});



function Preguntar(hoteles){
    let preguntaDepto = prompt("En que departamento desea alojarse? (solo disponible Canelones, Maldonado o Rocha): ");
    cantidad = hoteles.filter(d => d.Departamento == preguntaDepto).length;
    return 'La cantidad de hoteles disponibles en '+preguntaDepto+' es de '+cantidad
}


let preguntaDepto = Preguntar(hoteles);

console.log(preguntaDepto)

