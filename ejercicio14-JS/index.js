const btn = document.querySelector('.btn');
const btnJQuery = document.querySelector('.btn-jquery');

btn.addEventListener(('click'), event=>{
    console.log('hola');
    alert('Click en el botón');
});

$(() =>{
    $('.btn-jquery').click(() =>{
        console.log('Hola, estoy utilizando jQuery');
    })
})


// $('selector').accion()
// $(document).ready(() =>{})
// selectores:
// id= "ele1" => "#ele1"
// class= "ele1" => ".ele1"

// $(() =>{
//     $('.hide-btn').click(() =>{
//         // $('h1').hide()
//         $('h1').fadeOut()
//     })
//     $('.show-btn').click(() =>{
//         // $('h1').show()
//         $('h1').fadeIn()
//     })
//     $('li').click(() =>{
//         $('h1').css({ color: "red" })
//     })
//     $('.new-el').click(() =>{
//         // $('ul').append('<li>Elemento 4</li>') crea nuevo elemnto abajo
//         $('ul').prepend('<li>Elemento 4</li>') //crea nuevo elemento arriba
//     })
//     $('li').mouseenter((elem) =>{
//         elem.target.style.color = 'blue';
//     })
//     $('li').mouseleave((elem) =>{
//         elem.target.style.color = 'black';
//     })
// })