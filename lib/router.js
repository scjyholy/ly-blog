Router.configure({
    layoutTemplate: "Layout"
});
Router.route('/', function() {
    this.render('Home');
});
