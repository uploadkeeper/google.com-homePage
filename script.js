
// var search = document.getElementById('inputTxt');
// var searchText = document.getElementById('inputTxt').value;


// search.addEventListener("keypress", function(event){
//     if(event.key == "Enter"){
//         console.log(searchText);
//     }

//     document.getElementById('searchBtn').click(e);
//     e.href = "https://google.com/searchText"
// });


var searchText = document.getElementById('inputTxt').value;

var searchBtn = document.getElementById('searchBtn').value;

searchBtn.addEventListener("click", function(){ 
    href : `https://www.google.com/search?q=${searchText}`
});
