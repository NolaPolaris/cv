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
      }, 100, function(){
        window.location.hash = hash;
      });
    } 
  });
  
  if (window.innerWidth >= 769) {
    $('.onglet').on('click', function (e) {
      e.preventDefault();
      $('.onglet').removeClass('active');
      $(this).addClass('active');
      let title = $(this).data('title');
      let current = $('.onglet-content[data-content="' + title + '"]');
      current.attr('id', title);
      $('.onglet-content').removeClass('active');
      current.removeClass('hidden');
      current.addClass('active');
    })
    
  }
  
 
});