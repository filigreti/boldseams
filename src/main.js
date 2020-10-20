import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Modal from '@/components/Modal';
import Input from '@/components/Input';

Vue.component('modal', Modal);
Vue.component('Input', Input);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
