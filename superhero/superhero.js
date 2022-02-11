// when user clicks on logo redirect to home page
logo.addEventListener('click', function(){
    location.href = '/home/home.html';
});

// accept the name and id of the superhero from home.js
let urlParams = new URLSearchParams(location.search);
let heroId = urlParams.get('id');
let heroName = urlParams.get('name');

// fill up the hero name in h1
let nameHeading = document.getElementById('name-heading');
nameHeading.innerText = heroName;

let nameVal = document.getElementById('name-value');
nameVal.innerText = heroName;

// set the superhero image
async function displayImage(){
    let response = await fetch('https://www.superheroapi.com/api.php/1658811327787104/'+ heroId +'/image');
    let data = await response.json();
    let image = document.getElementById("superhero-img");
    image.style.backgroundImage = `url(${data.url})`;
}

//powerstats
async function powerstats(){
    let response = await fetch('https://www.superheroapi.com/api.php/1658811327787104/'+ heroId +'/powerstats');
    let data = await response.json();
    let intelligence = document.getElementById("intelligence-value");
    let strength = document.getElementById("strength-value");
    let speed = document.getElementById("speed-value");
    let durability = document.getElementById("durability-value");
    let power = document.getElementById("power-value");
    let combat = document.getElementById("combat-value");
    if(data.intelligence == "null"){
        intelligence.innerText = "?";
    }
    else{
        intelligence.innerText = data.intelligence;
    }
    if(data.strength == "null"){
        strength.innerText = "?";
    }
    else{
        strength.innerText = data.strength;
    }
    if(data.speed == "null"){
        speed.innerText = "?";
    }
    else{
        speed.innerText = data.speed;
    }
    if(data.durability == "?"){
        durability.innerText = "?";
    }
    else{
        durability.innerText = data.durability;
    }
    if(data.power == "null"){
        power.innerText = "?";
    }
    else{
        power.innerText = data.power;
    }
    if(data.combat == "null"){
        combat.innerText = "?";
    }else{
        combat.innerText = data.combat;
    }
    
}

//biography
async function biography(){
    let response = await fetch('https://www.superheroapi.com/api.php/1658811327787104/'+ heroId +'/biography');
    let data = await response.json();
    let fullName = document.getElementById("fullname-value");
    let alterEgos = document.getElementById("alteregos-value");
    let aliases = document.getElementById("aliases-value");
    let birthPlace = document.getElementById("placeofbirth-value");
    let firstAppear = document.getElementById("appearance-value");
    let publisher = document.getElementById("publisher-value");
    let alignment = document.getElementById("alignment-value");
    
    fullName.innerText = data["full-name"];
    alterEgos.innerText = data["alter-egos"];
    aliases.innerText = data["aliases"];
    birthPlace.innerText = data["place-of-birth"];
    firstAppear.innerText = data["first-appearance"];
    publisher.innerText = data["publisher"];
    alignment.innerText = data["alignment"];

}

displayImage();
powerstats();
biography();



