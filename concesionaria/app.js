const fs = require('fs');
const autos = require('./autos.js');
const personas = require('./personas.js');

const concesionaria = {
        autos: autos,
        personas: personas,
        buscarAuto: function(patente){
            let encontrado = autos.find(a=>a.patente===patente);
            if(encontrado!=undefined){
                return encontrado;
            }else{
                return null;
            }
        },
        venderAuto: function(patente){
            if(this.buscarAuto(patente)!=null){
                let encontrado = autos.find(a=>a.patente===patente);
                return encontrado.vendido = true;
                }
            },                               
        autosParaLaVenta: function(){
            let enVenta = autos.filter(function(a){
                return a.vendido != true;
            })
            return enVenta;
        },
        autosNuevos: function(){
            let lista = this.autosParaLaVenta();
            let nuevos = lista.filter(function(a){
                return a.km < 100;
            })
            return nuevos;
        },
        listaDeVentas: function(){
            const lista = [];
            let vendidos = autos.filter(a=>a.vendido===true);
            vendidos.forEach(function(a){
                lista.push(a.precio)
            })
            return lista;            
        },
        totalDeVentas: function(){
            let lista = this.listaDeVentas();
            let iv = 0;
            let total = lista.reduce((acum,num)=>acum+num,iv);
            return total;
        },
        puedeComprar: function(persona, auto){
            let per = personas.find(a=>a.nombre===persona);
            let car = autos.find(a=>a.patente===auto);
            if((per.capacidadDePagoEnCuotas>=(car.precio/car.cuotas))&&(per.capacidadDePagoTotal>=car.precio)){
                return true;
            }
        },
        autosQuePuedeComprar: function (persona) {
          
                      
    },
}
     
//autosQuePuedeComprar. Recibe (persona), devuelve lista de autos que puede comprar. 
// 1. Obtener autos para venta, 2. Para cada auto, probar si la persona puede comprar, 3. Devolver los que puede, filtrar lista 1 con 
// condiciones de paso 2. 
    
console.log(concesionaria.puedeComprar('Juan','APL123'))
console.log(concesionaria.autosQuePuedeComprar('Juan'));
//!console.log(concesionaria.puedeComprar());
//console.log(concesionaria.venderAuto('APL123'));    
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());
//console.log(concesionaria.listaDeVentas());    
//console.log(autos);
//concesionaria.venderAuto('APL123');
//concesionaria.venderAuto('JJK116');
//console.log('....')
//console.log(autos);
//console.log(concesionaria.buscarAuto('JJK116','APL123'));
//console.log(concesionaria.buscarAuto('APL123'));
//console.log(concesionaria.autosParaLaVenta());
//console.log(concesionaria.autosNuevos());

