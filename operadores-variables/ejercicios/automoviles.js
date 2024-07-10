//ejercicio automoviles
let precios = {
    tiguan : 30000,
    sirocco : 20000,
    peugeot208 : 15000,
    polo : 10000
}

let autos = {
    tiguan : 'comprate una tiguan con un valor de: ',
    sirocco : 'comprate un sirocco  con un valor de: ',
    peugeot208 : 'comprate un peugeot 208 con un valor de: ',
    polo : 'comprate un polo con un valor de: ' 
}

function recomendarAutos(dinero, nombre) {
    document.write(`<h2>${nombre}</h2>`);
    if (dinero >= precios.polo && dinero < precios.peugeot208){
        let resto = dinero - precios.polo;
        document.write(autos.polo + precios.polo + ', y te sobran ' + resto)
    }
    else if (dinero >= precios.peugeot208 && dinero < precios.sirocco){
        let resto = dinero - precios.peugeot208;
        document.write(autos.peugeot208 + precios.peugeot208 + ', y te sobran ' + resto)
    }
    else if (dinero >= precios.sirocco && dinero < precios.tiguan){
        let resto = dinero - precios.sirocco;
        document.write(autos.sirocco + precios.sirocco + ', y te sobran ' + resto)
    }
    else if (dinero >= precios.tiguan){
        let resto = dinero - precios.tiguan;
        document.write(autos.tiguan + precios.tiguan + ', y te sobran ' + resto)
    }
    else{
        document.write(`${nombre}, No tienes suficiente saldo, la compra minima es de  10.000`)
    }
}

dineroTomas= parseFloat(prompt('Cuanto dinero tenes Tomas?'))
dineroNicolas= parseFloat(prompt('Cuanto dinero tenes Nicolas?'))

recomendarAutos(dineroTomas, 'Tomas')
recomendarAutos(dineroNicolas, 'Nicolas')



