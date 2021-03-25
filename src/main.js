import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@/components/Icon.vue'

createApp(App)
	.component('icon', Icon)
	.mount('#app')
