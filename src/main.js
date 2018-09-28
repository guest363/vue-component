// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './mainVue.vue';
import 'es6-promise/auto';

new Vue({
	el: '#app',
	render: (h) => h(App)
});

/* eslint-disable no-new */
