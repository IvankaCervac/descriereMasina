/*
Creați o clasă Mașină ce va conține anumite informații: model, culoare, an fabricație și viteză.
Creați două metode: accelerează (va crește viteza cu 10 km/h) și frânează (va scădea viteza cu 10 km/h).
Creați o metodă ce descrie mașina: Ford Focus roșu, fabricat în 2018, merge cu 120 km/h.
Creați două obiecte mașini și experimentați cu aceste metode.
Creați un UI cu un formular pentru o mașină. Vom avea un buton pentru accelerare, 
unul pentru frânare, iar descrierea mașinii va fi afișată după prima accelerare sau frânare.
*/
//clase and metose
class Masina {
    constructor( model, culoare, anFabricare, viteza ){
        this.model = model;
        this.culoare = culoare;
        this.anFabricare = anFabricare;
        this.viteza = viteza;
    }
    accelereazaViteza(){
        this.viteza += 10;
    }
    franeazaViteza(){
        this.viteza -= 10;
    }
    descriere(){
        return `Masina e de modelul:${this.model} si are culoarea ${this.culoare}, fabricata in ${this.anFabricare} merge cu ${this.viteza} km/h`
    }
}
//variabilele
let  model = document.querySelector(".model").value;
let culoare = document.querySelector(".culoare").value;
let anFabricare = document.querySelector(".anFabricare").value;
let viteza = document.querySelector(".viteza").value;
let descrie = document.querySelector(".descriere");

// eventListener
document.querySelector(".acceleramViteza").addEventListener('click', function(){
    const masina2 = new Masina(model,culoare,anFabricare,viteza)
    masina2.accelereazaViteza();
    document.querySelector(".descriere").textContent = masina2.descriere()
})

    const masina1 = new Masina("Lexus", "alba", 2020, 100)
    console.log(masina1.descriere());
    masina1.accelereazaViteza()
    console.log(masina1.descriere());
    masina1.franeazaViteza();
    console.log(masina1.descriere());