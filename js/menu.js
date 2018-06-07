$(document).ready(main);

var contador = 1;

function main() {
    $('.openclose').click(function() {
        if (contador == 1) {

            $('nav').toggle("slow");
            contador = 0;
        } else {
            contador = 1;
            $('nav').toggle("slow");
        }
    });
}
