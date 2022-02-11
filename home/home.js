var searchBar = document.getElementById("search-bar");
var searchSugg = document.getElementById("search-sugg-container");

var logo = document.getElementById("logo");

// when user clicks on logo redirect to home page
logo.addEventListener('click', function(){
    location.href = 'home.html';
});

// add event listener to the search bar
searchBar.onkeyup = function(){
    let input = searchBar.value;
    if(input == ""){
        searchSugg.style.display = 'none';
    }
    else{
        searchSugg.style.display = 'block';
    }

    // AJAX request to the API
    let req = new XMLHttpRequest();
    req.open("GET", "https://www.superheroapi.com/api.php/1658811327787104/search/" + input);
    req.send();
    req.responseType = "json";
    req.onload = function(){
        //always display fresh results 
        if(searchSugg){
            searchSugg.innerHTML = "";
        }
        if(req.response.response == 'success'){
            displayResults(req.response.results);
        }
        else{
            // on error display something
            searchSugg.innerHTML += '<div class="search-sugg"> No results found </div>';
        }
    }
}

// display search suggestions
function displayResults(result){
    for(let info of result){
        searchSugg.innerHTML += '<div id = "'+ info.id +'" class="search-sugg">' + info.name + ' </div>';
        let divBox = document.getElementById(""+ info.id +"");
        // if the item is present in favs display full heart otherwise display empty heart
        if(localStorage.getItem(''+ info.id +'')){
            divBox.innerHTML += '<i class="fas fa-heart heart-icon-full"></i>';
        }
        else{
            divBox.innerHTML += '<i class="far fa-heart heart-icon"></i>';
        }

        let currResults = document.getElementsByClassName('search-sugg');
        for(let box of currResults){
            let favClicked = false;
            // event listener function for the search results
            function boxEvent(){
                if(favClicked && !localStorage.getItem(''+ box.id +'')){
                    let heartIcon = box.children[0];
                    heartIcon.remove();
                    box.innerHTML += '<i class="fas fa-heart heart-icon-full"></i>';
                    localStorage.setItem(""+ box.id +"", ""+ box.innerText +"");
                }
                // redirect to the superhero page
                else{
                    location.href = '/superhero/superhero.html?id='+ box.id +'&name='+ box.innerText +'';
                }
            };
            
            // add event listener to the favs icons
            let favourites = box.getElementsByClassName("heart-icon");
            for(let fav of favourites){
                fav.addEventListener('click', function(){
                    favClicked = true;
                });
            }

            // event listener for the search results
            box.addEventListener('click', boxEvent);
        }
    }
}





    


