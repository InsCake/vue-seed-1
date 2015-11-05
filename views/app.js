require('./../bower_components/pure/pure-min.css');
require('./styles/common.css');

var Vue = require('vue');

var VueRouter = require('vue-router');
Vue.use(VueRouter);
var Router = new VueRouter();

Vue.use(require('vue-resource'));
Vue.config.debug = true;


var App = Vue.extend(require('./app.vue'));

Router.map({
    '/': {
        component: require('./pages/welcome.vue')
    }
});

//Window.Vue = Vue;
//Window.Router = Router;

Router.start(App, '#app');