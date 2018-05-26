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
  var searchTerm="tofu";
  var appID = "b0ffc540";
  var appKey= "67974e2a56c2eb39530f556ed3b6153e";
  var queryURL ="https://api.edamam.com/search?q="+searchTerm+"&app_id=$"+appID+"&app_key=$"+appKey+"&from=0&to=3&calories=591-722&health=alcohol-free"

  $.ajax({
    url: queryURL,
    method: "GET",
  })
  .then(function(response){
    console.log(queryURL);
    console.log(response);
  }
  )
