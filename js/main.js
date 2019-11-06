// var txt;


$('button').on('click', function(){
    let txt = $('input').val();
    let skill = $(`<li><button Id="delete">x</button>${txt}</li>`);
    $('ul').append(skill);

});

$('ul').on('click', '#delete', function(){
    $(this).closest('li').remove();
});