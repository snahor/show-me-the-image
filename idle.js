(function () {
  var $ = document.querySelector.bind(document);
  var imgURL;

  function findAndSet(selector, attr) {
    var e = $(selector);
    imgURL = e && e[attr || 'src'];
  }

  function submit() {
    var btn = $('form input[type=submit]');
    if (btn)
      btn.click();
  }

  function setOrSubmit(selector) {
    findAndSet(selector);
    if (!imgURL)
      submit();
  }

  switch (window.location.hostname) {
    case 'imgur.com':
      // check it's not a gallery
      if (window.location.pathname.substr(0, 3) != '/a/')
        findAndSet('link[rel=image_src]', 'href');
      break;
    case 'imgdrive.co':
    case 'imgclick.net':
      setOrSubmit('img.pic');
      break;
    case 'xxxscreens.com':
    case 'nimplus.com':
      setOrSubmit('img.centred_resized');
      break;
    default:
  }

  if (imgURL)
    window.location = imgURL;
})();
