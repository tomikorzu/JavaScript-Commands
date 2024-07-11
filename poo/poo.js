
//Clases
class jugador{
    constructor(nombre, nacionalidad, edad, equipo){
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.edad = edad;
        this.equipo = equipo;
        this.info = `soy ${this.nombre}, de nacionalidad ${this.nacionalidad}, tengo ${this.edad} y juego en ${this.equipo}`
    }
    //metodo ( si estuvise afuera de la clase seria una funcion )
    verInfo(){
        document.write('<br>' + this.info + '<br>')
    }
    saludar(personaSaludada){
        document.write('<br>' + 'hola mi nombre es: ' + this.nombre + ' y le mando un saludo a: ' + personaSaludada)
    }
    mundiales(){
        if (this.mundiales >=1){
            document.write('Si tiene mundiales')
        } else{
            document.write('No tiene mundiales')
        }
    }
}
const messi = new jugador('Lionel Messi','Argentino', 35, 'Inter Miami')
const ronaldo = new jugador('Cristiano Ronaldo', 'Portugues', 41, 'Al-Nassair')
// messi.verInfo()
// ronaldo.verInfo()
// messi.saludar('Mateo')
// ronaldo.saludar('ciro')
messi.mundiales()

//abstraccion : creamos metodos que generalizen y tengan lo mas importante
//modularidad : separar el problema por partes
// encapsulamiento: encapsular datos para que no se tenga acceso desde otros lugares
// polimorfismo: como los elementos se comportan distinto con los mismos metodos 

//Herencia, metodos estaticos y metodos accesores, si o si se usan con palabras reservadas

//herencia

class dt extends jugador{
    constructor(nombre, nacionalidad, edad, equipo, seleccion){
        super(nombre, nacionalidad, edad, equipo)
        this.seleccion = seleccion
        this.infoDt = `soy ${nombre}, mi nacionalidad es ${nacionalidad}, tengo ${edad}, dirigo ${equipo} y estoy en la seleccion de ${seleccion}`
    }
    verInfoDt(){
        document.write('<br>' + this.infoDt + '<br>')
    }
    //static es para los metodos que no requieren de los this. ...
    static saludar(){
        document.write('Hola')
    }
    set modificarNombre(nuevoName){
        this.nombre = nuevoName
    }
    get getName(){
        return this.nombre
    }
}

const guardiola = new dt('Pep guardiola', 'espaniol', 50, 'barcelona', 'spain')
const ancelotti = new dt('Ancelotti', 'italiano', 60, 'real madrid', 'italia')
guardiola.verInfoDt()
ancelotti.verInfoDt()
dt.saludar()
guardiola.modificarNombre = 'Don pepe Guardiola'
document.write('<br>' + guardiola.getName + '<br>');