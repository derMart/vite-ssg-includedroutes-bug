import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import MainComponent from './MainComponent.vue';

const routes = [
  { path: '/', component: MainComponent },
]

export const createApp = ViteSSG(
  App,
  { routes },
);