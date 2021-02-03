$(".accordion-titulo").click(function() {

    var contenido = $(this).next(".accordion-content");

    if (contenido.css("display") == "none") { //open		
        contenido.slideDown(250);
        $(this).addClass("open");
    } else { //close		
        contenido.slideUp(250);
        $(this).removeClass("open");
    }

});




$(document).ready(getData);

function getData() {
    $.ajax({
        url: 'https://reqres.in/api/users/',
        success: function(respuesta) {

            var lista = $("#capitulos");
            $.each(respuesta.data, function(index, elemento) {
                if (elemento.id == 1) {
                    lista.append(
                        '<div class="img2">' +
                        '<img src=' + elemento.avatar + '>' + '</div>' +
                        '<div class="div1">' +
                        '<form action="">' +
                        '<p class="nombre">' + elemento.last_name + '</p>' +
                        '<p>Género: ' + elemento.first_name + '</p>' +
                        '<p>Primeros 5 episodios:</p>' +
                        '</form >' +
                        '</div>'
                    );
                }
            });
        },
        error: function() {
            console.log("No se ha podido obtener la información");
        }
    });
}