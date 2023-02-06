<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>«Самоход»</title>

        <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    </head>
    <body>
        <section id="app" class="container py-3">
            <header-component></header-component>
            <router-view></router-view>
            <footer-component></footer-component>
        </section>
    </body>
    <script type="module" src="{{ asset('js/src/vue.js')  }}"></script>
    <script type="module" src="{{ asset('js/src/vue-router.js')  }}"></script>
    <script type="module">
        import Header from './js/components/Header.js';
        import Footer from './js/components/Footer.js';
        import Main from './js/components/Main.js';
        import Registr from './js/components/Registr.js';
        import Login from './js/components/Login.js';
        import Cart from './js/components/Cart.js';
        import Order from './js/components/Order.js';

        const routes = [
            {
                path: '/',
                component: Main,
            },
            {
                path: '/registration',
                component: Registr,
            },
            {
                path: '/login',
                component: Login,
            },
            {
                path: '/cart',
                component: Cart,
            },
            {
                path: '/order',
                component: Order,
            }
        ];

        new Vue({
            el: '#app',
            data(){
                return {

                }
            },
            router: new VueRouter({
                mode: 'history',
                routes,
            }),
            components: {
                'header-component': Header,
                'footer-component': Footer,
            }
        });
    </script>
</html>
