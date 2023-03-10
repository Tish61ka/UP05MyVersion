export default {
    data(){
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    mounted(){
        if(window.localStorage.getItem('user_token')){
            this.$router.push({ path: '/' });
        }
    },
    methods: {
        send(){
            fetch('http://127.0.0.1:8000/api-samohod/signup',{
                method: 'post',
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    fio: this.name,
                    email: this.email,
                    password: this.password,
                })
            }).then(response => {
                this.name = '';
                this.email = '';
                this.password = '';

                let result = response.json();
                result.then(data => {
                    window.localStorage.setItem('user_token', data.content['user_token']);
                });
                this.$router.push({ path: '/' })
            })
        }
    },
    template: `
    <main>
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal">Регистрация</h1>
        </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
        <div class="col">
            <div class="row">
                <form>
                    <h1 class="h3 mb-3 fw-normal">Пожалуйста заполните все поля</h1>
                    <div class="form-floating mb-3">
                        <input type="text" v-model="name" class="form-control" id="floatingFio" placeholder="ФИО">
                        <label for="floatingFio">ФИО</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>

                    <button @click.prevent="send"  class="w-100 btn btn-lg btn-primary mb-3" type="submit">Зарегистрироваться</button>
                    <button class="w-100 btn btn-lg btn-outline-info" type="submit">Назад</button>
                </form>
        </div>
    </div>
</div>
</main>`
}