const arrayIcone = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

/* 

Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user).
Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.*/

/*Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente
il nome dell'icona e l'icona stessa.*/

//Dichiaro una variabile collegata al container nell'html.



document.addEventListener('DOMContentLoaded',()=>{
    const iconContainer = document.getElementById('icon-section');
    createIcons(arrayIcone, iconContainer);

    //Dichiaro una variabile associata al select nel html.
    const filter = document.getElementById('select');
    /* Associo un evento alla variabile filter per reagire ad ogni cambio di valore*/
    filter.addEventListener('change',(ev) =>{
        console.log(ev.target.value);
    })
})

//Creiamo una funzione che prenderà come parametro l'array di icone e il container.
function createIcons(data, container){

    //Creo una variabile d'appoggio inzialmente vuota che verrà riempita una volta terminato il ciclo.
    let allIcons = '';
    //Creo un ciclo forEach che mi crea ogni elemento sulla base della struttura standard inserita.
    data.forEach(element => {

        //Destrutturo il file estraendo i dati che mi servono per realizzare il template.
        const {family, prefix, name} = element

        //Creo la struttura standard del singolo elemento.
        const template = `
        <div>
            <i class="${family} ${prefix}${name}"></i>
            <p>${name}</p>

        </div>
        `
        //Una volta completato il ciclo aggiungo il template ad allIcons.
        allIcons += template;
    });
    // Una volta finito di ciclare aggiungo la variabile contenente le icone dentro il container di icone.
    container.innerHTML = allIcons;
}

