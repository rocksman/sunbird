import '../styles/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel';
import $ from "jquery";

import data from '../data/catalogue';

let product = {};

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

function showProduct() {
    let html = `<img src="${product.images}" alt="leaf straw"/>
                <div>
                    <h3>${product.title}</h3>
                    <p class="details">${product.specs}</p>
                    <p class="description">${product.description}.</p>
                </div>`;
    $("#product").html(html);
}

function showCatalogue() {
    let array = data.filter(e => e.title !== product.title);
    let output = '';
    array.forEach(element => {
        let html = `<div class="product" name="${element.title}" data-aos="fade-up">
                        <img src="${element.images}" alt="${element.title}">
                        <h3>${element.title}</h3>
                        <p>${element.specs}</p>
                    </div>`;
        output = output + html;
    });
    $("#productContainer").html(output);
}

function changeProduct(title) {
    product = data.find(e=> e.title == title);
    showProduct();
    showCatalogue();
    $('html, body').animate({
        scrollTop: $(".products").offset().top
    }, 600);
}

$(document).ready(function () {
    product = data[0];
    showProduct();
    showCatalogue();
    $('body').on('click', 'div.product', function(event) {
        changeProduct(event.currentTarget.getAttribute("name"));
    });
})