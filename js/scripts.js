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

  //headroom
  var myElement = document.querySelector("header");
  var headroom  = new Headroom(myElement);
  headroom.init();

  $('.menu-section__toggle').click(function(){
    $('.menu-section ul').toggleClass('hidden');
  });

  //hljs
  $(document).ready(function() {
    $('pre code, code').each(function(i, e) {hljs.highlightBlock(e)});

    //every time you click on the twitter link button, it takes the text inside of the blockquote and tweets :)
    $('.twitter-share').each(function() {
      $(this).attr('href', "https://twitter.com/share?&via=Una&text=" + $(this).text());
    });
  });

  // emoji
  function addEmoji() {
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
      window.location.hash = "💁";
    }
  };
  addEmoji();
  console.log('Hello, beautiful :)');

  //Google Fonts
  WebFontConfig = {
    google: { families: [ 'Alegreya+Sans+SC:400,900:latin', 'Open+Sans:300italic,400,300,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

  BLOG.common.init();
})(jQuery, window, document);