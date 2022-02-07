
<template>
 <link rel="stylesheet" type="text/css" href="/css/login.css">
<div class="login">

<div class="container">
    <a class="link" id="plogin"></a>
       
    
      <div class="content"> 
      <div id="login">
        <form action="" @submit="login($event)"> 
          <h1>Login</h1> 
          <p> 
            <label for="email">E-mail</label>
            <input id="email" name="email" required="required" type="text" v-model="email" placeholder="Digite seu e-mail"/>
          </p>
         
          <p> 
            <label for="senha">Senha</label>
            <input id="senha" name="senha" required="required" type="password" v-model="senha" placeholder="Digite sua senha" /> 
          </p>
          
          
          <p> 
            <input type="submit" v-on:click="login()" value="Entrar" /> 
          </p>
          
          <p class="link">
            Ainda não tem conta?
            <span>
              <router-link to="/cadastro">Faça o cadastro aqui</router-link>
            </span>
          </p>
        </form>
      </div>   
    </div>

</div>
</div>

</template>


<script>

export default{
  name: 'login',
  data() {
    return{
      input: {
                    email: "",
                    senha: ""
                }
    };
  
  },
    methods: {
            login(e) {
              e.preventDefault();
              const email = this.email;
              const senha = this.senha;
              this.$router.replace('/agendar');


              console.log("login feito");
              console.log(email);
              console.log(senha);

            }
        }
    };
</script>

