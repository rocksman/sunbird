import '../styles/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel';
import $ from "jquery";

AOS.init({
    duration: 1200,
    once: true
})

$('.review-carousel').slick({
    speed: 500,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
});