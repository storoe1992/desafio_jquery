$(function(){
    $('a').attr('target','_blank');
    $('.socialnetworks li a').prepend(function(index,html){
        switch (html){
            case 'Facebook' : $(this).prepend('<i class="fab fa-facebook-f"></i>');break;
            case 'Instagram' : $(this).prepend('<i class="fab fa-instagram"></i>');break;
            case 'Twitter' : $(this).prepend('<i class="fab fa-twitter"></i>');break;
            case 'Snapchat' : $(this).prepend('<i class="fab fa-pinterest"></i>');break;
        }
    });
   $("h2").click(function(){
       $(this).css("color","red");
   });
   $("section:nth-child(3) li:nth-child(4)")
   .append('<ul><li><a href="#">link 4.a</a></li></ul>')
   .after('<li><a href="#">link 5</a></li>');
   ;
});