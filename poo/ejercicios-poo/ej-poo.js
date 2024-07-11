//crear un sistema para mostrarle al cliente las particularidades de los 3 celulares
//cada celular debe tener peso, color, resolucion de pantalla, resolucion de camara y memoria RAM
//cada celular debe pode prender, reiniciar, apagar, tomar fotos y grabar

class celular{
    constructor(modelo, peso, color, resPantalla, resCamara, ram){
        this.modelo = modelo
        this.peso = peso
        this.color = color
        this.resPantalla = resPantalla
        this.resCamara = resCamara
        this.ram = ram
        this.info = `El modelo es , ${modelo}, cuyo peso es ${peso}, color es ${color}, resolucion de pantalla es ${resPantalla}, resolucion de camara es ${resCamara} y ram es ${ram}`
    }
    verInfoCelu(){
        document.write('<br>' + this.info + '<br>')
    }
    prender(){
        console.log('celular prendido')
    }
    reiniciar(){
        console.log('celular reiniciado')
    }
    apagar(){
        console.log('celular apagado')
    }
    tomarFotos(){
        console.log('foto sacada')
    }
    grabar(){
        console.log('grabando')
    }
}

const iphone13 = new celular('iphone13', 400, 'azul', 800, 120, 8)
const iphone12 = new celular('iphone12', 450, 'blanco', 700, 100, 8)
const iphone11 = new celular('iphone11', 500, 'negro', 600, 80, 6)
iphone13.verInfoCelu()
iphone13.prender()
iphone12.verInfoCelu()
iphone12.prender()
iphone11.verInfoCelu()
iphone11.prender()