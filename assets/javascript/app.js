// Initialize Firebase
var config = {
  apiKey: "AIzaSyCgKPddkgj3RhPS1B2Hw_DihvXgZBbxxiE",
  authDomain: "project1team3-39b4f.firebaseapp.com",
  databaseURL: "https://project1team3-39b4f.firebaseio.com",
  projectId: "project1team3-39b4f",
  storageBucket: "project1team3-39b4f.appspot.com",
  messagingSenderId: "74591335518"
};
firebase.initializeApp(config);

// API Integration
// Get console.log to work
// Create a new row -- getting the things to just add, and then seeing

$("button").on("click", function () {


  //  Emptying out the container
  $('.grid').empty();

  // Storing what is typed into the search bar
  var searchTerm = $("#searchForm").val();
  console.log(searchTerm);
  // Consturcting the query URL for the API
  var queryURL = "https://api.edamam.com/search?q=" + searchTerm + "&app_id=b0ffc540&app_key=a41b1a4d8560dbb27bbf0ef650ec9bf0";
  console.log(queryURL);
  // API call
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // For loop going through for 9 recipes
    for (var i = 0; i < 10; i++) {
      console.log(response);
      // Getting the image from the API
      console.log(response.hits[i].recipe.url);


      // Creating the big square for the grid (main)
      var recipeDiv = $("<div>").attr("class", "card").attr("class", "main");

      // Image
      var recipeImage = $('<img src="' + response.hits[i].recipe.image + '" >').attr("class","image").attr("data",response.hits[i].recipe.url);
      recipeDiv.append(recipeImage);


      // The card body contains the title of the recipe
      var recipeBodyDiv = $("<div>").attr("class", "card-body");
      recipeDiv.append(recipeBodyDiv);

      // Title of Recipe
      var recipeTitle = $("<h5>").text(response.hits[i].recipe.label).attr("class","title").attr("data",response.hits[i].recipe.url);;
      recipeBodyDiv.append(recipeTitle);

      // console.log(recipeDiv);
      $(".grid").append(recipeDiv);

      

    }

    // Takes you to the recipe url webpage

    $(document).on('click','.image', function(){
      window.open($(this).attr('data'));
      console.log(this);
    });

    $(document).on('click','.title', function(){
      window.open($(this).attr('data'));
      console.log(this);
    })
    // $(".main").on('click', function () {
    //   // window.location = response.hits[i].recipe.url;
    //   console.log(response.hits[0]);
    // });

  });
  // recipeDiv.append(recipeImage);
  // $("#imageHere").append(recipeDiv);

});













