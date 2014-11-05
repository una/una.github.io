window.BLOG || (BLOG = {});

(function ($, window, document, undefined) {

  var _common = BLOG.common = {
    init: function () {
      this.setVars();
      this.bindEvents();
    },

    setVars: function () {
      // headroom stuff
      var myElement = document.querySelector("header"),
          headroom  = new Headroom(myElement);

    },

    bindEvents: function () {
      // headroom stuff
        headroom.init();

    },
  };

  $('.menu-section__toggle').click(function(){
    $('.menu-section ul').toggleClass('hidden');
  });

  //hljs
  $(document).ready(function() {
    $('pre code, code').each(function(i, e) {hljs.highlightBlock(e)});

    //every time you click on the twitter link button, it takes the text inside of the blockquote and tweets :)
    $('.twitter-share').each(function() {
      $(this).attr('href', "https://twitter.com/share?url=http://www.google.com&via=Una&text=" + $(this).text());
    });
  });

  BLOG.common.init();
})(jQuery, window, document);