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
  // var searchTerm="tofu";
  // var appID = "b0ffc540";

  var queryURL = "https://api.edamam.com/search?q=chicken&app_id=540719b1&app_key=2d98d59eaf4976edb2d1abd92540e167"


  $.ajax({
    url: queryURL,
    method: "GET",
  })
  .then(function(response){
    console.log(response);
  }
  )
