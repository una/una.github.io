window.PORT || (PORT = {});

(function ($, window, document, undefined) {

  var _common = PORT.common = {
    init: function () {
      this.setVars();
      this.bindEvents();
    },

    setVars: function () {

    },

    bindEvents: function () {
      this.detectChrome();
      this.magnifyMe();
      $(".menu-section__toggle").on('click', this.menuSection);
      $(document).on('keydown', this.keyDown);
    },

    detectChrome: function () {
      //detect Chrome to fix ampersand bug bc Firefox doesn't support unicode-range
      if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
        $('html').addClass('chrome');
      }
    },

    menuSection: function () {
      $('.menu-section__toggle, .menu-section').toggleClass("on");
      $("nav ul").toggleClass('hidden');
    },

    keyDown: function (e) {
      if ($(".menu-section__toggle").hasClass('on')) {
        switch(e.keyCode) {
          case 49: //1
            location.href = $('.menu-section ul li:nth-child(1) a').attr('href');
            break;

          case 50: //2
            location.href = $('.menu-section ul li:nth-child(2) a').attr('href');
            break;

          case 51: //3
            location.href = $('.menu-section ul li:nth-child(3) a').attr('href');
            break;

          case 52: //4
            location.href = $('.menu-section ul li:nth-child(4) a').attr('href');
            break;

          case 53: //5
            location.href = $('.menu-section ul li:nth-child(5) a').attr('href');
            break;

          default: return; // exit this handler for other keys
          }
        }

      else {
        switch(e.keyCode) {
          case 37: // left arr
          if ($('.cs-main').length) {
            location.href = $('.pagination .left a').attr('href');
          }
          break;

          case 39: // left arr
          if ($('.cs-main').length) {
            location.href = $('.pagination .right a').attr('href');
          }
          break;

          case 77: //1
             $('.menu-section__toggle').trigger('click');
            break;

          case 189: //+ slider
            $('.slidesjs-previous').trigger('click');
            break;

          case 187: //+ slider
            $('.slidesjs-next').trigger('click');
            break;

          case 191: //?
            alert('m: open menu, then press 1-9 to navigate the menu, left arrow: previous project, right arrow: next project, -: prev. slide (slider), +: next slide (slider)');
            break;

          case 81: // Q
            location.href = "/edible";
          break;

          case 87: // W
            location.href = "/fruit-story";
          break;

          case 69: // E
            location.href = "/proofessor";
          break;

          case 82: // R
            location.href = "/united-app";
          break;

          default: return;
        }
      }
    },

    magnifyMe: function () {
      var native_width = 0;
      var native_height = 0;
      $(".magnify").mousemove(function(e){
        if(!native_width && !native_height)
        {

          var image_object = new Image();
          image_object.src = $(".small").attr("src");

          native_width = image_object.width;
          native_height = image_object.height;
        }
        else
        {
          var magnify_offset = $(this).offset();
          var mx = e.pageX - magnify_offset.left;
          var my = e.pageY - magnify_offset.top;
          if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
          {$(".large").fadeIn(100);}
          else
          {$(".large").fadeOut(100);}
          if($(".large").is(":visible"))
          {
            var rx = Math.round(mx/$(".small").width()*native_width - $(".large").width()/2)*-1;
            var ry = Math.round(my/$(".small").height()*native_height - $(".large").height()/2)*-1;
            var bgp = rx + "px " + ry + "px";
            var px = mx - $(".large").width()/2;
            var py = my - $(".large").height()/2;
            $(".large").css({left: px, top: py, backgroundPosition: bgp});
          }
        }
      });
    },
  };

  PORT.common.init();
})(jQuery, window, document);

      /* arrow keys:
      37 - left, 38 - up, 39 - right, 40 - down, 76 - L, 82 - R, 77 - M, 187 - + =, 189 - - _, 191 - /?, 16 - shift, 1 - 49, 2 - 50, 3 - 51, 4 - 52, 5 - 53, 6 - 54, 7 - 55, 8 - 56, 9 -57
      */

//slider
$('.slide').each(function () {
  $('#slide-controls').append('<li></li>');
}),

$('#slide-controls li').each(function (index, item) {
  $(item).on('click', function ()
  {
    $('.slidesjs-pagination li a').eq(index).trigger('click');
  });
});
