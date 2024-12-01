$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#btn-cancel').click(function() {
        $('form').slideUp()
    })


    $('form').on('submit', function(e) {
        e.preventDefault();
        const addressImageNew = $('#address-image-new').val();
        const itemNew = $('<li style="display:none;"></li>');

        $(`<img src="${addressImageNew}"/>`).appendTo(itemNew);
        $(
            `<div class="overlay-imagem-link">
                <a href="${addressImageNew}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamahho real
                </a>
            </div>`
        
        ).appendTo(itemNew);
        $(itemNew).appendTo('ul');
        $(itemNew).fadeIn(1000);
        $('#address-image-new').val("");
    })
})