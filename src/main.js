import { createApp } from 'vue'
import App from './App.vue'
import router from './route';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './style.css';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router);

app.mount('#app')
