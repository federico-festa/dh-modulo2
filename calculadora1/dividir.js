function dividir(a,b){
    if(a&&b!=0){
        return a/b;
    }else{
        return 'No se puede dividir por cero';
    }
}
module.exports = dividir;