(function () {
    var submit = document.getElementById('submit');  // Submit button
  
    var password = document.getElementById('pwd'); // Store password inputs
    var passwordConfirm = document.getElementById('conf-password');
    var submitted = false;                            // Has form been submitted?
    submit.disabled = true;                           // Disable submit button
    submit.className = 'disabled';                    // Style submit button
    console.log(submit.className);   
   
    function setErrorHighlighter(e) {
      var target = e.target || e.srcElement;             // Get target element
      if (target.value.length < 12) {                     // If its length is < 12
        target.className = 'fail';                       // Set class to fail
      } else {                                           // Otherwise
        target.className = 'pass';                       // Set class to pass
      }
    }
  
    function removeErrorHighlighter(e) {
      var target = e.target || e.srcElement;              // Get target element
      if (target.className === 'fail') {                  // If class shows fail
        target.className = '';                            // Clear class
      }
    }
  
    function passwordsMatch(e) {
    submit.className = 'disabled';                    // Style submit button
      var target = e.target || e.srcElement;               // Get target element
      // If value matches pwd and it is longer than 8 characters
      if ((password.value === target.value)) { 
        target.className = 'pass'; // Set class to pass
    submit.className = 'enabled';                    // Style submit button
  
      } else {                                             // Otherwise
        target.className = 'fail'; 
                                 // Set class to fail
      }
      
      
    }
    addEvent(password, 'input', function (e) {  
     
      if (this.value.length >= 12 ) {            
          var target = e.target || e.srcElement;          // Target of event
          submit.disabled = submitted || !target.value;   // Set disabled property
          // If form has been submitted or pwd has no value set CSS to disabled
         // submit.className = (submit.disabled) ? 'disabled' : 'enabled';                   // Hide the counter
        }
    
    });
  
    
  
    addEvent(password, 'focus', removeErrorHighlighter); 
    addEvent(password, 'blur', setErrorHighlighter);
    addEvent(passwordConfirm, 'focus', removeErrorHighlighter);
    addEvent(passwordConfirm, 'blur', passwordsMatch);
  }());