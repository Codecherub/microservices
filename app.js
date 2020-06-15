function getData(){
    $.ajax({
        url:'app.php',
        type:'post',
        data:'action=getUserData'
    }).done(function(userData){

    }).fail(function(){
        alert('failed to get sourse from api')
    })
}