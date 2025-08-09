// Basic hover function
$(document).ready(function(){
    $('nav h1').hover(function(){
            $(this).css('color', '#FF7F50'); // On hover it changes color
        },
        function(){
            $(this).css('color', 'white'); // When no longer hovered, it turns back to default
        }
    );
    $('nav ul li a').hover(function(){
            $(this).css('background-color', '#FF7F50');
            $(this).css('color', 'white')
        },
        function(){
            $(this).css('background-color', 'transparent');
            $(this).css('color', '#a54500')
        });     
});