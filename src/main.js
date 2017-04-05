import Vue from 'vue'
import VueRouter from 'vue-router'

const Foo = {template: '<div>foo</div>'};
const Bar = {template: '<div>bar</div>'};

const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar},
    {path: '/', component: AppIndex}
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');
