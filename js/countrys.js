$(function(){

    var country = document.getElementById("country");
    var optionVal = document.querySelector("option");

    var submit = document.getElementById('submit');  // Submit button
    var submitted = false;                            // Has form been submitted?
        submit.disabled = true;                           // Disable submit button
        submit.className = 'disabled'; 

    // for(var i = 0; i < countries.length; i++) {
    //     var opt = countries[i].name;
    //     var el = document.createElement("option");
    //     el.textContent = opt;
    //     el.value = countries[i].code;
    //     country.appendChild(el);
    // }
    $.each(countries,function(key,value){
        $('select').append(`<option value="${value.code}"> ${value.name} </option>`);
       });

  
addEvent(country,'change', function(e){
         if(country.value !== "none"){
             var target = e.target || e.srcElement;          // Target of event
             submit.disabled = submitted || !target.value;
             submit.className = (submit.disabled) ? 'disabled' : 'enabled';
     
         }
         else{
        submit.className = 'disabled'; 

         }
            
      });

});