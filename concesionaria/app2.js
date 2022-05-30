const fs = require('fs');
const autos = require('./autos.js');

const concesionaria = {
        autos: autos,
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
        puedeComprar: function (auto, persona) {
       return auto.precio <= persona.capacidadDePagoTotal && (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas;
        },
        autosQuePuedeComprar: function (persona) {
            let lista = this.autosParaLaVenta();
            let listaPuede = lista.filter(function(auto){
                return auto.precio <= persona.capacidadDePagoTotal && (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas;
            })
            return listaPuede;
        }
}

//Recibe persona, devuelve Lista.
//1. Lista de autos en venta
//2. Para cada auto prueba si puede comprar.
//3. Devuelve lista (1) filtrada segun condicion (2). 