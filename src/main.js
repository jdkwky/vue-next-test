import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import router from './router';
// import store from './store';

const app = createApp(
    {
        ...App
    },
    { topInfo: 'eeeee' }
);

// Define a new global component called button-counter
app.component('ButtonCounter', {
    data() {
        return {
            count: 0
        };
    },
    template: `
    <button v-on:click="count++">
      You clicked me {{ count }} times.
    </button>`
});

app.use(router)
    .use(store)
    .mount('#app');
