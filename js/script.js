

$(document).ready(function(){
    $.getJSON();
});

$.getJSON("team.json", function(data) {
    $.each(data.members, function(key, val) {
        $('#team').append(`
            <h2>${val.name}</h2>
                   <h5>${val.position}</h5>
                   <p>${val.bio}</p>`);
    });
});

let ajaxMethod = $.ajax({url:"team.json",
dataType: "json",
type: "get",
beforeSend: function(data){
    $('#team').html("<h3>"+"Loading..."+"</h3>");
}, error: function(){
    $("#team").ajaxError(function(){
        $("#team").text("The content could not be retrieved")
    })
}, success:  function(data){
        $(data.members).each(function(key, val){
            $('#team').append(`
            <h2>${val.name}</h2>
                   <h5>${val.position}</h5>
                   <p>${val.bio}</p>`);
        }).delay("slow")
    }
, complete: function(data){
        $('h3').hide();
    }
}
);