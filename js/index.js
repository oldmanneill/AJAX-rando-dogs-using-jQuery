$('#btn').click(function(){
  $.ajax({
    method: 'GET',
    url: 'https://dog.ceo/api/breeds/image/random'
  })
  .done(function(data){
    document.getElementById('photo').src = data.message
  })
  .fail(function(){
    alert('RUFF TIMES! Request is not possible!')
  })

})