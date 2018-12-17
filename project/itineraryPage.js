var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 6000); 
}

;(function($, document, window, undefined) {

  'use strict';

  var dynamicMaxHeight =

    $.fn.dynamicMaxHeight = function(selector) {

        // Define variable classes
        var dynamicHeightWrapperClass = 'dynamic-height-wrap',
            dynamicHeightActiveClass = 'dynamic-height-active',
            dynamicHeightButtonClass = 'js-dynamic-show-hide'
        ;

        return this.each(function(i, selector) {

            /**
             * Init plugin. Get max height and layer height
             */
            var el = $(selector),
                itemMaxHeight = el.data('maxheight'),
                itemHeight = el.find('.'+dynamicHeightWrapperClass).outerHeight(),
                itemButton = el.find('.'+dynamicHeightButtonClass)
            ;

            el.attr("data-itemheight", itemHeight ); // store layer height as a data attribute


            /**
             * Apply max height if necessary
             */
            if (itemHeight > itemMaxHeight){
                updateHeight(el, itemMaxHeight);
                el.toggleClass(dynamicHeightActiveClass);
                showDynamicMaxHeightButton(el, itemButton);
            }

            /**
             * Setup "show more / show less" button
             */
            itemButton.click(function(){
                if(el.hasClass(dynamicHeightActiveClass)){
                   updateHeight(el, itemHeight);
                }
                else{
                    updateHeight(el, itemMaxHeight);
                }
                updateTextButton(el, itemButton);
                el.toggleClass(dynamicHeightActiveClass);
            });
        });

        function updateTextButton(el, itemButton){
            var buttonText;
            if(el.hasClass(dynamicHeightActiveClass)){
                buttonText = itemButton.data( 'replace-text' );
            }
            else{
                buttonText = itemButton.attr( 'title' );
            }
            itemButton.text(buttonText);
        }

        function updateHeight(el, height){
            el.find('.'+dynamicHeightWrapperClass).css('max-height', height);
        }

        function showDynamicMaxHeightButton(el, itemButton){
            itemButton.css('display','inline-block');
        }
    };
})(window.jQuery || window.$, document, window);


/**
 * Export as a CommonJS module
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = dynamicMaxHeight;
}

$(".menu-opener").click(function(){
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
});
