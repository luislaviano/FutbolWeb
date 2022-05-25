
const hoteles = [
{ id: 1, Nombre:'Hotel Argentina', Departamento: 'Canelones', Localidad: 'Atlantida', Capacidad: [2, 4, 6], Valoracion: 4.5, Coordenadas: ''}, 
{ id: 2, Nombre:'Complejo turistico Paradise', Departamento: 'Canelones', Localidad: 'Atlantida', Capacidad: [2, 4, 6], Valoracion: 5.0, Coordenadas: ''},
{ id: 3, Nombre:'Posada Biarritz', Departamento: 'Canelones', Localidad: 'Canelones', Capacidad: [2, 3, 4, 6], Valoracion: 2.8, Coordenadas: ''},
{ id: 4, Nombre:'Mocaccino', Departamento: 'Canelones', Localidad: 'El Pinar', Capacidad: [2, 4, 6], Valoracion: 3.6, Coordenadas: ''},
{ id: 5, Nombre:'El Descubrimiento Resort Club', Departamento: 'Canelones', Localidad: 'Guazuvirá', Capacidad: [2, 4, 6], Valoracion: 4.8, Coordenadas: ''},
]

function Preguntar(){
    let preguntaDepto = prompt("En que departamento desea alojarse?: ");
    QueryHotel(preguntaDepto);

}

function QueryHotel(answer){
    for (const hotel in hoteles) {
        if (hotel.Nombre == answer){
            console.log(hotel.Nombre);
        };
      }
}

Preguntar()
