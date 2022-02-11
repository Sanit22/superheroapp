// when user clicks on logo redirect to home page
logo.addEventListener('click', function(){
    location.href = '/home/home.html';
});

let favList = document.getElementById("fav-sh-list");
let favBoxes = document.getElementsByClassName("fav-box");

// remove the default text if local storage has some items
if(localStorage.length > 0){
    document.getElementById("no-favs").style.display = 'none';
}

// grab items from local storage and display the results
for(let i = 0; i < localStorage.length; i++){
     let key = localStorage.key(i);
    let heroName = localStorage.getItem(key);
    favList.innerHTML += '<div class = "fav-box"> '+ heroName +' <i id = "'+ key +'-removeSh" class="far fa-times-circle remove-sh"></i>  </div>'
    let removeButt = document.getElementsByClassName("remove-sh");
    // add event listener to the remove button
    for(let button of removeButt){
        button.addEventListener('click', function(){
            let buttId = button.id;
            let buttIdSplit = buttId.split('-');
            let uniqueId = buttIdSplit[0];
            let removeDiv = document.getElementById(""+ buttId +"").parentElement;
            removeDiv.remove();
            localStorage.removeItem(''+ uniqueId +'');
            if(localStorage.length == 0){
                document.getElementById("no-favs").style.display = 'block';
            }
        });
    }
}

    








