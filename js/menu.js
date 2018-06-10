$(document).ready(main);

var contador = 1;

function main() {
    $('.openclose').click(function() {
        if (contador == 1) {

            $('nav').toggle("slow");
            $('.open').css('display','none');
            $('.close').css('display','block');
            contador = 0;
        } else {
            contador = 1;
            $('.open').css('display','block');
            $('.close').css('display','none');
            $('nav').toggle("slow");
        }
    });
}
