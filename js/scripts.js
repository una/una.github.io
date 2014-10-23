window.BLOG || (BLOG = {});

(function ($, window, document, undefined) {

  var _common = BLOG.common = {
    init: function () {
      this.setVars();
      this.bindEvents();
    },

    setVars: function () {

    },

    bindEvents: function () {


    },
  };

  BLOG.common.init();
})(jQuery, window, document);


//headroom
// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();

$('.menu-section__toggle').click(function(){
  $('.menu-section ul').toggleClass('hidden');
});