function getUserData(){
    $.ajax({
        url:'app.php',
        type:'post',
        data:'action=getUserData'
    }).done(function(userData){
        $('.userName').html(userData.name)
        $('.userEmail').html(userData.email)
        $('.userCart').html(userData.cart)
    }).fail(function(){
        alert('failed to get sourse from api')
    })
}

$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'app.php',
        type:'post',
        data:$(this).serialize()
    }).done(function(userData){
      getUserData()
    }).fail(function(){
        alert('server connection failed')
    })
})