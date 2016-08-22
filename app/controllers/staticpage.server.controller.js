//Controller for static pages. (no need for individual ones)

module.exports.renderHome = function(req, res) { // linking routes to render views for index, about and contact with defined title for each page.
    res.render('static_pages/index', {
      title: 'MENU'
    });
};

module.exports.renderAbout = function(req, res) {
    res.render('static_pages/about', {
      title: 'About'
    });
};

module.exports.renderContact = function(req, res) {
    res.render('static_pages/contact', {
      title: 'Contact'
    });
  };
