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

  var hostname = window.location.hostname;

  // TODO: load from a file?
  var hostnameToSelector = {
    'www.imagebam.com': 'div.image-container img',
    'someimage.com': '#viewimage',
    'image-bugs.com': '#image-viewer img',
    'imgia.biz': 'img.centred_resized',
    'imagedecode.com': 'img.centred',
    'imgcandy.net': 'img.centred',
    'imgstudio.org': 'img.centred_resized',
    'xxxscreens.com': 'img.centred_resized',
    'nimplus.com': 'img.centred_resized',
    'newimagepost.com': 'img.centred_resized',
    'imgtornado.com': 'img.centred_resized',
    'imgdrive.co': 'img.pic',
    'imgclick.net': 'img.pic',
  }

  // special case
  if (hostname === 'imgur.com')
    // not albums plz
    if (window.location.pathname.substr(0, 3) !== '/a/')
      findAndSet('link[rel=image_src]', 'href');

  if (!imgURL && hostname in hostnameToSelector)
    setOrSubmit(hostnameToSelector[hostname]);

  if (imgURL)
    window.location = imgURL;
})();
