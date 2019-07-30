import App from './App.js';
import About from '@/containers/About';
export default [
  {
    path: '/',
    component: App,
    childRoutes: [
      {
        path: 'about',
        component: About
      }
    ]
  }
]
