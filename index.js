
// $(document).ready(function () {
//     $('.container').mouseenter(function () {
//         $('.card').stop().animate({
//             top: '-90px'
//         }, 'slow');
//     }).mouseleave(function () {
//         $('.card').stop().animate({
//             top: 0
//         }, 'slow');
//     });
//     $('.heart').click(function () {
//         window.location.href = 'https://www.google.com'; // Replace with your desired URL
//     });
// });
$(document).ready(function () {
    // Existing hover animation for the card
    $('.container').mouseenter(function () {
        $('.card').stop().animate({ top: '-90px' }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({ top: 0 }, 'slow');
    });
    // New click event for the heart
    $('.heart').on('click', function () {
        window.location.href = 'https://www.google.com'; // Replace with your desired URL
    });
})