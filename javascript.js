//1-826
let card = document.getElementById("card");
let chatacter = {};
let origin = {} ;
const aleatorio_entre = (min, max) => {
    fetch(("https://rickandmortyapi.com/api/character/"+id))
    .them((d) => d.json())
    .them((data) => {
        chatacter = data;
        get_data_origin(chatacter.origin.url); 
    })
    .catch((err) => {
        console.log(err);
    });
};
const get_data_origin = (url) => {
    fetch(url)
    .them((d) => d.json())
    .them((data) => {
origin = data;
console.log(origin);
print_data();
    })
    .catch((err) => {
        console.log(err);
    });  
};
const print_data = () => {
    card.innerHTML = "";
    card.insertAdjacentElement(
        "beforeend",  
        `
        <div class ="image-container">
          <img src="${chatacter.image}" alt=""/>
        </div>
        <div class="data-container">
        <h1>${chatacter.name}</h1>
        <div>Especie: ${chatacter.species}</div>
       <div>Estado: ${chatacter.status}</div>
        <hr>
    </hr>   <div>Lugar de origen: ${origin.name} (${origin.type})</div>
        <div class="button-container">
        <button id ="random-btn">Ver personaje aleatorio</button>
     </div>
     </div>  
     `
    );
    let personaje;
let variable = document.getElementById("caract");
let image= document.getElementById("image");
const get_data=(id) =>{
    fetch("https://rickandmortyapi.com/api/character/?page=" + id)
    .them((d) => d.json())
    .them((data) => {
        personaje =d;
        print();
        console.log(personaje);
    })
    .catch((err)=>console.log(err));
};
const print =() =>{
    variable.innerHTML="";
    image.src='${personaje.image}';
    variable.innerHTML='${personaje.image}';
};
get_data(1);
    let rand_btn =document.getElementById("random-btn");
    rand_btn.addEventListener("click", () =>{
        get_data(3);
    });
    get_data(1);
},

