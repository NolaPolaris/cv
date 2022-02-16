import '../css/style.css';
import './api.js'
import * as $ from 'jquery';

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 100, function(){
        window.location.hash = hash;
      });
    } 
  });


  
  $('.onglet').on('click', function () {
    let siblings = $(this).siblings('.onglet');
    siblings.removeClass('active');
  
      if (window.innerWidth >= 769) {
        $(this).addClass('active');
        let title = $(this).data('title');
        let current = $('.onglet-content[data-content="' + title + '"]');
        current.attr('id', title);
        $('.onglet').removeClass('active');
        $('.onglet-content').removeClass('active');
        $(this).addClass('active');
        current.removeClass('hidden');
        current.addClass('active');
  
      } else {
        let current = $(this).children('.onglet-content-xs'); 
        let parent = $(this);

        if(parent.hasClass('active')){
          current.slideUp(300, function(){
            parent.removeClass('active')
          }); 
        }else{ 
          parent.addClass('active');
          current.slideDown(300);
        }
        
      }
    })
    
});