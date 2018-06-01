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

  var searchTerm = $("#searchInput").val();
  console.log(searchTerm);

  var queryURL = "https://api.edamam.com/search?q=" + searchTerm + "&app_id=b0ffc540&app_key=a41b1a4d8560dbb27bbf0ef650ec9bf0";
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    for (var i = 0; i < 10; i++) {
      console.log(response);

      console.log(response.hits[i].recipe.image);

      // Creating the big square for the grid (main)
      var recipeDiv = $("<div>").attr("class", "card");
            
      // Image
      var recipeImage = $('<img src="' + response.hits[i].recipe.image + '" >');
      recipeDiv.append(recipeImage);

      // The card body contains the title of the recipe
            var recipeBodyDiv = $("<div>").attr("class", "card-body");
            recipeDiv.append(recipeBodyDiv);

      // Title of Recipe
      var recipeTitle = $("<h5>").text(response.hits[i].recipe.label);
      recipeBodyDiv.append(recipeTitle);

      // console.log(recipeDiv);
      $(".grid").append(recipeDiv);
    }

  });
  // recipeDiv.append(recipeImage);
  // $("#imageHere").append(recipeDiv);

});











