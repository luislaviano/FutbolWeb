
/*
const hoteles = [
{ id: 1, Nombre:'Hotel Argentina', Departamento: 'Canelones', Localidad: 'Atlantida', Capacidad: [2, 4, 6], Valoracion: 4.5, Coordenadas: ''}, 
{ id: 2, Nombre:'Complejo turistico Paradise', Departamento: 'Canelones', Localidad: 'Atlantida', Capacidad: [2, 4, 6], Valoracion: 5.0, Coordenadas: ''},
{ id: 3, Nombre:'Posada Biarritz', Departamento: 'Canelones', Localidad: 'Canelones', Capacidad: [2, 3, 4, 6], Valoracion: 2.8, Coordenadas: ''},
{ id: 4, Nombre:'Mocaccino', Departamento: 'Canelones', Localidad: 'El Pinar', Capacidad: [2, 4, 6], Valoracion: 3.6, Coordenadas: ''},
{ id: 5, Nombre:'El Descubrimiento Resort Club', Departamento: 'Canelones', Localidad: 'Guazuvirá', Capacidad: [2, 4, 6], Valoracion: 4.8, Coordenadas: ''},
]
*/

const user= document.getElementById('user');
const password= document.getElementById('pass');
const loginbtn = document.getElementById('login-btn');
const createbtn = document.getElementById('create-btn');
const submitbtn = document.getElementById('submit-btn');
const modal = document.getElementById('myModal');
const formulario = document.getElementById('formulario');
const fechaVuelta = document.getElementById('return-date-input');
const loginLink = document.getElementById("login");
const nav = document.getElementsByClassName("nav-link");



/*document.addEventListener("submit", (e) => e.preventDefault());*/

const usuarios = []
/*const usuarios = [{ id: 1, Nombre:'Luis', Password: 'Luis'}]*/


/*  ESCUCHA EL BOTON DE LOGIN 
    Compara si el usuario y contraseña es correcto
    agrega nuevo nav-div con nombre de usuario
    Cambia texto de Login x logout
*/

const navegador = document.getElementsByClassName("nav-link");
/* let info = document.getElementsByClassName("nav-link") == true ? info.onclick = swapping() : console.log("no se encontro"); */
/* let elemento = navegador[1].InnerText;
console.log(elemento); */




function swapping(){
    document.getElementById("login").innerHTML = '<a data-toggle="modal" data-target="#myModal" href="#myModal" class="nav-link">Login</a>';
    modal.style.display = "block";
    nav[2].innerHTML = "";    
    location.reload();                  
}




loginbtn.addEventListener('click', login);

function login(){
    submitbtn.display = "none";
    createbtn.display = "none";
    loginbtn.display = "block";
    const usuarioExiste = usuarios.some(el => el.Nombre === user.value);
    const passExiste = usuarios.some(el => el.Password === password.value);
    const modalTitle = document.getElementById("modal-title");
    if (usuarioExiste == true && passExiste == true){
        modal.style.display = 'none';
        document.getElementById("login").innerHTML = '<a data-toggle="modal" data-target="#myModal" href="#myModal" id="loginOff" class="nav-link">Log Out</a>';
        navItem = document.getElementsByClassName("nav-item");
        let nav = document.querySelector('#nav-login');
        /*console.log("linea 45");*/
        nav.innerHTML += "<li class='nav-item'><a class=nav-link>"+`Bienvenido ${user.value}`+"</a></li>";
        modal.setAttribute('data-backdrop', "false");
        document.body.setAttribute('style', 'overflow:scroll;');
        const logOff = document.getElementById("loginOff");
        logOff.addEventListener("click", swapping);
        /* console.log(usuarios); */
    }else{
        modalTitle.innerHTML = "<h4>Esos datos no son validos! Intente nuevamente o cree un usuario</h2>";
        createbtn.style.display = 'block';
        /*modal.style.display = 'block';*/
    }
}

submitbtn.onclick = function(){
    
    if (user != null && password != null){
        const usuarioExiste = usuarios.some(el => el.Nombre === user.value);
        if (usuarioExiste == false) {
            let id = usuarios.length + 1;
            const user = document.getElementById("user");
            const password = document.getElementById('pass');
            addUser(id, user.value, password.value);
            console.log(usuarios)
            let nav = document.querySelector('#nav-login');
            const newItem = document.createElement('nuevo-nav');
            const modalTitle = document.getElementById("modal-title")
            modalTitle.innerHTML = "<h4>Ingresa tu usuario y contraseña</h2>";
            modal.style.display = 'none';
            submitbtn.style.display = 'none';
            loginbtn.style.display = 'block';
            loginbtn.addEventListener('click', login);
        }else{
            console.log("ese usuario esta en uso");
            const modalTitle = document.getElementById("modal-title")
            modalTitle.innerHTML = "<h4>Ese usuario esta en uso, ingresa otro nombre de usuario</h2>";
        }
    }else{
        console.log("debe ingresar un usuario y contrasena valido")
        return;
    }
}

createbtn.onclick = function create(){
    loginbtn.style.display = 'none';
    createbtn.style.display = 'none';
    submitbtn.style.display = 'block';
    const modalTitle = document.getElementById("modal-title")
    modalTitle.innerHTML = "<h4>Crea tu usuario y contraseña, gracias</h2>";
}



class usuario {
    constructor(id, nombre, password) {
        this.id = id;
        this.Nombre = nombre;
        this.Password = password;
    }
}


function addUser(id, nombre, password){
    var user = new usuario(id, nombre, password);
    usuarios.push(user);
}


/*
const list_hoteles = [['Hotel Argentina', 'Canelones', 'Atlantida', [2, 4, 6], 4.5, ''],
['Complejo turistico Paradise', 'Canelones', 'Atlantida', [2, 4, 6], 5.0, ''],
['Posada Biarritz', 'Canelones', 'Canelones', [2, 3, 4, 6], 2.8, ''],
['Mocaccino', 'Canelones', 'El Pinar', [2, 4, 6], 3.6, ''],
['El Descubrimiento Resort Club', 'Canelones', 'Guazuvirá', [2, 4, 6], 4.8, ''],
['The Grand Hotel', 'Maldonado', 'Punta del Este', [2, 3, 4, 6], 2.8, ''],
['Enjoy Hotel & Casino', 'Maldonado', 'Punta del Este', [2, 4, 6], 3.6, ''],
['Hotel Casino San Eugenio de Cuareim', 'Artigas', 'Artigas', [2, 4, 6], 3.2, ''],
['Hotel Parque Oceanico', 'Rocha', 'La Coronilla', [2, 4, 6], 3.2, ''],
['Las Margaritas', 'Rocha', 'La Coronilla', [2, 4], 2.8, ''],
];

let login_consulta = ""
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
    if (preguntaDepto =="Maldonado" || preguntaDepto =="Canelones" || preguntaDepto == "Rocha"){
        cantidad = hoteles.filter(d => d.Departamento == preguntaDepto).length;
        showMap(preguntaDepto);
        return 'La cantidad de hoteles disponibles en '+preguntaDepto+' es de '+cantidad
    }else{
        alert("Disculpe, no hay habitaciones disponibles en esos departamentos");
        let otra_consulta = prompt("Desea realizar otra busqueda en otro departamento? Si/No");
        if (otra_consulta.toUpperCase() == "SI"){
            preguntaDepto = Preguntar(hoteles);
            alert(preguntaDepto);
        }else{
            alert("Gracias, hasta luego");
        }
    }
}
*/

function logOutFunction(a){
    if (a.InnerText == "Log Out"){
    console.log("Muchas gracias, chau")
    }
}
/*const login_anchor = document.getElementById("login").firstChild;
const login = document.getElementById("login");
login.addEventListener("click", logOutFunction(login_anchor));*/

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.setAttribute('style', 'overflow:scroll;');
        
    }
}

function showMap(depto){
        let address = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBR0uboPklMC-alkzROoeVJ3MdBBzze7-Y&q='+`${depto}`+',Uruguay"';
        let mapa = document.getElementsByClassName("mapaDepto")[0].setAttribute("src", address);
        
}



