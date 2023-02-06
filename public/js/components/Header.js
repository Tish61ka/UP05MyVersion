export default{
    data(){
        return {
            isUser: false,
        }
    },
    methods: {
        logout(){
            fetch('http://127.0.0.1:8000/api-samohod/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': 'Bearer '+localStorage.getItem('user_token')
                },
            })
            .then(res =>{
                return res.json();
            })
            .then(res =>{
                localStorage.removeItem('user_token')
                this.$router.push('/login');
            })
        },
        getToken(){
            if(window.localStorage.getItem('user_token')){
                this.isUser = true;
            } else {
                this.isUser = false;
            }
        }
    },
    watch: {
        '$route'(){
            this.getToken();
        }
    },
    template: `<header>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <router-link to="/" class="d-flex align-items-center text-dark text-decoration-none">
            <span class="fs-4">«Самоход»</span>
        </router-link>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <router-link v-if="!isUser" class="me-3 py-2 text-dark text-decoration-none" to="/registration" >Регистрация</router-link>
            <router-link v-if="!isUser" class="me-3 py-2 text-dark text-decoration-none" to="/login" >Авторизация</router-link>
            <router-link v-if="isUser" class="me-3 py-2 text-dark text-decoration-none" to="/order">Мои заказы</router-link>
            <router-link v-if="isUser" class="me-3 py-2 text-dark text-decoration-none" to="/cart">Корзина</router-link>
            <a v-if="isUser" @click.prevent="logout()" class="me-3 py-2 text-dark text-decoration-none" style="cursor:pointer">Выход</a>
        </nav>
    </div>
</header>`
}