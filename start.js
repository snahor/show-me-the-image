(function () {
  var imgURL;

  function parseQuery(query) {
    var q = {};
    if (query[0] == '?')
      query = query.substr(1);
    query.split('&').forEach(function (x) {
      var xs = x.split('=');
      if (xs[0] in q)
        q[xs[0]].push(xs[1]);
      else
        q[xs[0]] = [xs[1]];
    });
    return q;
  }

  function imgdomino() {
    // http://imagedomino.com/?v=935174
    // http://imagedomino.com/images/935174.jpg
    try {
      var query = parseQuery(window.location.search);
      if (query.v)
        return window.location.origin + '/images/' + query.v[0] + '.jpg';
    }
    catch (e) {
      console.error(e);
    }
    return null;
  }

  if (window.location.hostname == 'imagedomino.com')
      imgURL = imgdomino();

  if (imgURL)
    window.location = imgURL;
})();
