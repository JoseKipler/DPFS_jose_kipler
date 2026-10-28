const mainController = {
  home: (req, res) => {
    res.render('index', {
      title: 'NEXUS - Tecnología & Gaming',
      css: 'home'
    });
  }
};

module.exports = mainController;