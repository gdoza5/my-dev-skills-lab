// var txt;


$('button').on('click', function(){
    let txt = $('input').val();
    let skill = $(`<li><button class="delete">x</button>${txt}</li>`);
    $('ul').append(skill);

});