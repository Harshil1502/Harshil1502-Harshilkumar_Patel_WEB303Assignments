function init() {
    getJsonObject();
      var compare = {
          name: function (a, b) {
              console.log("processing the words", b, ", ", a);
              if (a < b) {
                  return -1;
              }
              else if (b < a) {
                  return 1
              }
              else //they're equal
              {
                  return 0;
              }
          },  
          compareNumbersAscending: function (a, b) {
              // b is the first value being compared, a is the second
              console.log("processing the numbers", b, ", ", a);
              return parseInt(a) - parseInt(b);
          },
          compareNumbersDescending: function (a, b) {
              // b is the first value being compared, a is the second
              console.log("processing the numbers", b, ", ", a);
              return b - a;
          },
          compareNumbersRandom: function (a, b) {
              return 0.5 - Math.random(); // Math.random() returns a value between 0 and 1
          },
          compareDates: function (a, b) {
              var dateA = new Date(a);
              var dateB = new Date(b);
              return dateA - dateB;
          }
      };
      $(document).on('click','button', function () {
      $('button').hide();
      $('table').each(function () {
          var $table = $(this); // This table
          var $tbody = $table.find('tbody'); // Table body
          var $controls = $table.find('th'); // Table headers
          var rows = $tbody.find('tr').toArray(); // Array of rows
          $controls.on('click', function () { // Event handler
              var $header = $(this); // Get header
              var order = $header.data('sortbythis'); // either name or compareNumbersAscending
              var column; // Used later
              if ($header.is('.ascending') || $header.is('.descending')) { // Toggle to other class
                  $header.toggleClass('ascending descending');
                  // Reverse the array
                  $tbody.append(rows.reverse());
              } else { //not sorted yet, we need to sort
                  $header.addClass('ascending'); // Add class to header
                  // Remove asc or desc from all other headers
                  $header.siblings().removeClass('ascending descending'); // If compare object has method of that name
                  // $header.siblings().removeAttr('class');
                  console.log("check if has property");
                  if (compare.hasOwnProperty(order)) {
                      console.log("has property");
                      column = $controls.index(this); // Column's index no
                      rows.sort(function (a, b) { // Call sort() on rows
                          a = $(a).find('td').eq(column).text();// Text of column row a
                          b = $(b).find('td').eq(column).text();// Text of column row b
                          return compare[order](a, b); // Call compare method
                      });
                      $tbody.append(rows);
                  }
              }
          });
      });
     
      });
  
  
  }$(init);

  function search() {
    if( $("#myInput").val() != ""){
        var input, filter, table, tr, td, i, txtValue, date;
        input = $("#myInput").val();
        filter = input.toUpperCase();
        table = $("#characters");
        tr = $("tr");
        
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td ) {
            txtValue = td.textContent || td.innerText;
            tr[i].style.backgroundColor = "White";
    
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.color = "White";
              tr[i].style.backgroundColor = "#006400";
            } else {
              tr[i].style.backgroundColor = "White";
              tr[i].style.color = "Black";

            }
          }
        }
    }
    if( $("#myInput").val() == ""){
        $('tr').css('background-color', 'white');
        $('tr').css('color', 'black');
    }
  }

  let buttonB = $('.b');
    $(buttonB).on('click', function(){
        let filterB = $( ".last:contains('H')" );
        let filterA = $( ".last:contains('U')" );
        let filterC =  $( ".last:contains('S')" );
        $(filterB.parent()).css( "color", "white" );
        $(filterA.parent()).css( "color", "black" );
        $(filterC.parent()).css( "color", "black" );

    })
    let buttonA = $('.a');
    $(buttonA).on('click', function(){
        let filterB = $( ".last:contains('H')" );
        let filterA = $( ".last:contains('U')" );
        let filterC =  $( ".last:contains('S')" );
        $(filterB.parent()).css( "color", "black" );
        $(filterA.parent()).css( "color", "white" );
        $(filterC.parent()).css( "color", "white" );

    })
  
  
  function getJsonObject() {
      $.getJSON("character.json", function (data) {
         $('body').append(`    
         <section id="content">
         <button style="background-color: Black; color:white; padding-top: 30px; padding-bottom: 30px; padding-left:60px; padding-right:60px;  cursor: pointer;font-size: 1.5em;font-weight: bolder;">Activate Sorting</button></br></br>
         <div id="team">
         <table id="characters" class="characters">
         <thead>
         <tr>
         <th data-sortbythis="name"><a href="#" id="fName"> First Name</a></th>
         <th data-sortbythis="name"><a href="#" id="lName">Last Name</a></th>
         <th data-sortbythis="name"><a href="#" id="clan">Clan</a></th>
         <th data-sortbythis="name"><a href="#" id="style">Style</a></th>
         <th data-sortbythis="name"><a href="#" id="gender">Gender</a></th>
         <th data-sortbythis="compareDates"><a href="#" id="birthdate">Date Of Birth</a></th>
         </tr>
         </thead>
         <tbody>
         </tbody>
         </table>
         </div>
     </section>`);
          $.each(data.characters, function (key, val) {
              $('tbody').append(`  <tr id="data">
                                  <td class="firstNname">${val.firstName}</td>
                                  <td class="lastNname">${val.lastName}</td>
                                  <td class="clan">${val.clan}</td>
                                  <td class="style">${val.style}</td>
                                  <td class="gender">${val.gender}</td>
                                  <td class="birthdate">${val.birthdate}</td>
                                  </tr>
                                  
                                  `);
          });
      });
  }
  