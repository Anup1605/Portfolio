$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                item: 1,
                nav: false
            },
            600:{
                item: 2,
                nav: false
            },
            1000:{
                item: 3,
                nav: false
            },
        }

    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     var form = document.querySelector('.anup');

//     form.addEventListener('submit', function (e) {
//         e.preventDefault(); // Prevent the default form submission
        
//         // Get form values
//         var fullName = document.getElementById('fullName').value;
//         var email = document.getElementById('email').value;
//         var subject = document.getElementById('subject').value;
//         var message = document.getElementById('message').value;

//         let eBody = `
//         <b>Name: </b>${fullName}<br>
//         <b>Mobile No: </b>${subject}<br>
//         <b>Message: </b>${message}
//       `;
    

//         Email.send({
//             Host : "smtp.elasticemail.com",
//             Username : "cminati99@gmail.com",
//             Password : "366DDF327A569A1D4D9E524D727DB8269AC3",
//             To : 'cminati99@gmail.com',
//             From : "cminati99@gmail.com",
//             Subject : "Email From:"+email,
//             Body : eBody
//         }).then(
//           message => alert(message)
//         );
//     });
// });

