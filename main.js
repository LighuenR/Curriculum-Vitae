const nombre = "Lighuen Restanio"

const experiencia = [
    {
        lugar:"CodeCave",
        periodo:"Currently working",
        descripción:"Fullstack developer. I provide support in freelance projects, collaborating on both the backend and the frontend using mostly vue.js and node.js"      
        },
    {
        lugar: "La Table de Xavier MATHIEU",
        periodo: "Sep 2018 - Dec 2020",
        descripción: "Chef of fish station departure, interns in chaharge, handling of raw material. Michelin star restaurant"
    },
    {
        lugar: "Republica restaurant",
        periodo: "Jan 2016 -  Dec 2018",
        descripción: "Kitchen manager, responsible for production with staff in charge."
    }
    
    
];

const estudios = [
   
    {
    lugar: "IGA Córdoba | Instituto Gastronómico de las Américas",
    periodo: "May 2013 - Dec 2015",
    descripción: "Gastronomic Professional"
    },
    {
    lugar: "Saul A. Taborda",
    periodo: "May 2004 - Dec 2009",
    descripción: "Bachelor of Natural Sciences and Environment"
    }
    
];

/* const lenguajesActuales = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/express-original.svg",   
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg",
] */

const lenguajesAprendiendo = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
        
]

// Cambia el nombre del H1 que con tiene el nombre del usuario
var nombreDOM = document.getElementById("name")
nombreDOM.innerText = nombre

// Itineración que crea los items en "Experiencia"
for (i = 0; i < experiencia.length; i++){
    var item = document.createElement("div")
    item.innerHTML =
    `<div class="d-flex justify-content-between">
    <span class="card-title h6 exp-title mt-2"><strong>${experiencia[i].lugar}</strong></span>
    <span class="exp-date mt-2">${experiencia[i].periodo}</span>
    </div>
    <p>${experiencia[i].descripción}</p>`
    document.getElementById("experiencia").appendChild(item)
}

// Itineración que crea los items en "Estudios"
for (i = 0; i < estudios.length; i++){
    var item = document.createElement("div")
    item.innerHTML =
    `<div class="d-flex justify-content-between">
    <span class="card-title h6 exp-title mt-2"><strong>${estudios[i].lugar}</strong></span>
    <span class="exp-date mt-2">${estudios[i].periodo}</span>
    </div>
    <p>${estudios[i].descripción}</p>`
    document.getElementById("estudios").appendChild(item)
}

// Itineración que crea los items en "Lenguajes y programas"
/* for (i = 0; i < lenguajesActuales.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<img class="languages" align="left" alt="JavaScript" width="40" src="${lenguajesActuales[i]}" />`
    document.getElementById("lenguajes_actuales").appendChild(item)
} */

// Itineración que crea los items en "Lenguajes y tecnologias aprendiendo"
for (i = 0; i < lenguajesAprendiendo.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<img class="languages" align="left" alt="JavaScript" width="40" src="${lenguajesAprendiendo[i]}" />`
    document.getElementById("lenguajes_aprendiendo").appendChild(item)
}


function printDiv(printable){
    var printContents = document.getElementById(printable).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
