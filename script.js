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
Ciascuna icona ha una propriet?? "color": utilizzare questa propriet?? per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user).
Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.*/

/*Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui ?? presente
il nome dell'icona e l'icona stessa.*/

//Dichiaro una variabile collegata al container nell'html.



document.addEventListener('DOMContentLoaded',()=>{
    const iconContainer = document.getElementById('icon-section');
    createIcons(arrayIcone, iconContainer);

    //Dichiaro una variabile associata al select nel html.
    const filter = document.getElementById('select');
    /* Associo un evento alla variabile filter per reagire ad ogni cambio di valore*/
    filter.addEventListener('change',(ev) =>{

        //Se l'utente sceglie all allora esegui restituisci tutte le icone 
        if(ev.target.value === 'all'){
            createIcons(arrayIcone, iconContainer);
        }else{

            //Altrimenti, associo la funzione che mi filtra le icone ad una variabile.
            const filteredIcon = arrayIcone.filter(function(icon){

                //Ritorna se il tipo dell'icona ?? uguale al valore dell'scelto dall'utente.
                return icon.type === ev.target.value;
            })
            createIcons(filteredIcon, iconContainer);
        }
        
    })
})

//Creiamo una funzione che prender?? come parametro l'array di icone e il container.
function createIcons(data, container){

    //Creo una variabile d'appoggio inzialmente vuota che verr?? riempita una volta terminato il ciclo.
    let allIcons = '';
    //Creo un ciclo forEach che mi crea ogni elemento sulla base della struttura standard inserita.
    data.forEach(element => {

        //Destrutturo il file estraendo i dati che mi servono per realizzare il template.
        const {family, prefix, name, type} = element

        //Creo la struttura standard del singolo elemento.
        const template = `
        <div>
            <i class="${family} ${type} ${prefix}${name}"></i>
            <p>${name}</p>

        </div>
        `
        //Una volta completato il ciclo aggiungo il template ad allIcons.
        allIcons += template;
    });
    // Una volta finito di ciclare aggiungo la variabile contenente le icone dentro il container di icone.
    container.innerHTML = allIcons;
}

