$(document).ready(function () {
            $('.custom-slider').slick({
                autoplay: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: ".prev-btn",
                nextArrow: ".next-btn",
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]

            })
        });


        function toggleMenu(){
            let toggle = document.querySelector('.toggle');
            let nav = document.querySelector('.nav');

            toggle.classList.toggle('active');
            nav.classList.toggle('active');
        }


        function toggleMenu(){
            let toggle = document.querySelector('.toggle');
            let nav = document.querySelector('.nav');

            toggle.classList.toggle('active');
            nav.classList.toggle('active');
        }