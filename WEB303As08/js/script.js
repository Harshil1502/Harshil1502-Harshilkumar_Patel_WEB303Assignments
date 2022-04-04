$(function(){
    $.ajax({
        type: "Get",
        url: "character.json",
        dataType: "json",
        success: function (e) {
            for (var i = 0; i < e.length; i++) {
                var row = $('<tr><td>' + e[i].firstName + '</td><td class="last">' + e[i].lastName + '</td><td>' + e[i].style + '</td><td>' + e[i].gender + '</td><td>' + e[i].clan + '</td><td>');
                $('#characters').append(row);
            }
            var $tr = $('tr td:first-child');
            $tr.addClass("name");
        },
        error: function () {
            alert("json not found");
        }
    });
    search();
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
})


//Search Bar
function search() {
    if( $("#myInput").val() != ""){
        var input, filter, table, tr, td, i, txtValue;
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
