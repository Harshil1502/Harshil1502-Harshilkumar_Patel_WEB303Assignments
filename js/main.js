// WEB303 Assignment 2
//Name: Harshilkumar Dharmendrakumar Patel
//Student ID: 0777266
$(document).ready(function(){
  var xhr = new XMLHttpRequest;

  //prospect
      $("#prospect").on("click", function(){
        xhr.open('GET', 'prospect.html', true)
        xhr.onload = function(){ 
          if(xhr.status === 200){
            let contentDiv = document.getElementById("content");
            contentDiv.innerHTML = xhr.responseText;
            $("#content").hide(200).slideDown(600);
          } else {
            console.log("Opps! Try again Please.");
          }
      };
      xhr.send("search=ardunio");
      $("#content").hide();
  
  
    });    
    //convert
    $("#convert").on("click", function(){
      xhr.open('GET', 'convert.html', true)
      xhr.onload = function(){ 
        if(xhr.status === 200){
          let contentDiv = document.getElementById("content");
          contentDiv.innerHTML = xhr.responseText;
          $("#content").slideDown(600);
        } else {
          console.log("Opps! Try again Please.");
        }
    };
    xhr.send("search=ardunio");
    $("#content").hide();
  
    });    
    //retain
    $("#retain").on("click", function(){
      
      xhr.open('GET', 'retain.html', true)
      xhr.onload = function(){ 
        if(xhr.status === 200){
          let contentDiv = document.getElementById("content");
          contentDiv.innerHTML = xhr.responseText;
          $("#content").slideDown(600);
        } else {
          console.log("Opps! Try again Please.");
        }
    };
    xhr.send("search=ardunio");
    $("#content").hide();
  
  });    
}
)

