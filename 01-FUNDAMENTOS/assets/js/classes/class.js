// todas las clases usan 'use strict' por defecto
class Persona{
    
    /* se acostumbra poner las propiedades estáticas
        justo abajo del nombre de la clase
    */ 
    
    // propiedades de clase. 
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
        Persona._conteo++;
    }

    // los set no pueden tener el mismo nombre 
    // de la propiedad a la que se le establece
    set setComidaFavorita(comida){ 
        this.comida= comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        console.log(` ${this.codigo} dice ${this.frase}`);
    }
}

const sujeto = new Persona('LAS', 'hombre enamorado', 'soy un hombre enamorado');
sujeto.quienSoy();
sujeto.miFrase();
sujeto.setComidaFavorita = 'Espaguetis';
console.log(sujeto);

console.log(sujeto);

// sujeto._conteo = 1;
console.log('Conteo del sujeto: ', Persona._conteo);
console.log(Persona._conteo);