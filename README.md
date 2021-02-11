# Vue Raven Auth Demo

### A minimal app demonstrating user authentication with UIS Raven via Firebase. Built with Vue.js.

### Link: [vue-raven-auth-demo-8d4d1.web.app](vue-raven-auth-demo-8d4d1.web.app)

---

## Development

### Project setup
```
git clone https://github.com/fpervaiz/Vue-Raven-Auth-Demo.git
cd Vue-Raven-Auth-Demo
npm i
```

Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/). Add a new web application, and replace the existing `firebaseConfig` in `main.js` with your new config. Then, Firebase console > Authentication > Sign-in method > enable the Google sign-in provider.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```