$(function () {
   
      var username = document.getElementById('username');     // Password input
      var submit = document.getElementById('submit');  // Submit button
      var password = document.getElementById('pwd');
      var countryCode = document.querySelector('select');
      var passwordConfirm = document.getElementById('conf-password');
      
    
      var submitted = false;                            // Has form been submitted?
      submit.disabled = true;                           // Disable submit button
      submit.className = 'disabled';                    // Style submit button
     
       addEvent(username, 'input', function (e) {         // On input of password
        var target = e.target || e.srcElement;          // Target of event
        submit.disabled = submitted || !target.value;   // Set disabled property
        submit.className = (submit.disabled) ? 'disabled' : 'enabled';
      
      });
       

         

            addEvent(form, 'submit', function (e) {             // When user submits form
                e.preventDefault();                              // Stop it being sent
                var elements = this.elements;                    // Get all form elements
                var username = elements.username.value;          // Select username entered
                var msg = `Welcome ${username}! The country code you selected is ${countryCode.value}`;            // Create welcome message
                document.getElementById('main').textContent = msg; // Write welcome message
            });
    


});