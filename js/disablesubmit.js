$(function(){
    var check = document.getElementById('agree');

    var submit = document.getElementById('submit');  // Submit button
    var submitted = false;                            // Has form been submitted?
        submit.disabled = true;                           // Disable submit button
        submit.className = 'disabled'; 

    addEvent(check,'change', function(e){
        if(this.checked){
            var target = e.target || e.srcElement;          // Target of event
            submit.disabled = submitted || !target.value;
            submit.className = (submit.disabled) ? 'disabled' : 'enabled';
    
        }
        else{
       submit.className = 'disabled'; 

        }
     
     });

});