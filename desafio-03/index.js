const $html = document.querySelector('html');
const $checkbox = document.querySelector('#checkbox');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})