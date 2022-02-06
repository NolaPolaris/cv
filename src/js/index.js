import '../css/style.css';
import './api.js'
import * as $ from 'jquery';

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 2800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });