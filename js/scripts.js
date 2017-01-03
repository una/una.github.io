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

  // Servive Workers
  if ('serviceWorker' in navigator) {
    // Attempt to register it
    navigator.serviceWorker.register('/sw.js').then(function() {
      // Success
      console.log('ServiceWorker registration successful');
    }).catch(function(err) {
      // Fail
      console.log('ServiceWorker registration failed: ', err);
    });
  }

  // defer CSS loading
  var cb = function() {
  var l = document.createElement('link'); l.rel = 'stylesheet';
  l.href = location.origin + '/css/main.min.css';
  var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
  };
  var raf = requestAnimationFrame || mozRequestAnimationFrame ||
  webkitRequestAnimationFrame || msRequestAnimationFrame;
  if (raf) raf(cb);
  else window.addEventListener('load', cb);

  BLOG.common.init();
})(jQuery, window, document);