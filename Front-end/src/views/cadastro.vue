
<template>
 <link rel="stylesheet" type="text/css" href="/css/login.css">
<div class="cadastro">
<div class="container" >
    <a class="link" id="paralogin"></a>
    
    <div class="content ">      
  
      <div id="login">
        <form action="" @submit="cadastrar($event)"> 
          <h1>Faça seu cadastro</h1> 
          <p> 
            <label for="Nome">Nome</label>
            <input id="nome" name="nome" required="required" type="text" v-model="nome" placeholder="Digite seu nome"/>
          </p>
          <p> 
            <label for="email">E-mail</label>
            <input id="email" name="email" required="required" type="text" v-model="email" placeholder="Digite seu e-mail"/>
          </p>
          <p> 
            <label for="telef">Telefone</label>
            <input id="telef" name="telef" required="required" type="text" v-model="telef" placeholder="Digite seu numero de Telefone"/>
          </p>
          <p> 
            <label for="senha">Senha</label>
            <input id="senha" name="senha" required="required" type="password" v-model="senha" placeholder="Digite sua senha" /> 
          </p>

          <p > 
            <input type="submit" v-on:click="cadastrar()" value="Cadastrar" /> 
          </p>
          <p class="link" >
            Ja possui conta?
             <span>
              <router-link to="/login">Faça o login aqui</router-link>
            </span>
          </p>
        </form>
      </div>   
    </div>
  </div> 
</div>

</template>

<script >

export default{
  name: 'cadastro',
  data() {
    return{
      input: {
                    nome: " ",
                    email: "",
                    telef: " ",
                    senha: ""
                }
    };
},
methods: {
            cadastrar(e) {
              e.preventDefault();
              const name = this.nome;
              const tele = this.telef;
              const email = this.email;
              const senha = this.senha;
              this.$router.replace('/agendar');


              console.log("cadastro feito");
              console.log(name);
              console.log(email);
              console.log(tele);
              console.log(senha);

            }
}
}
</script>


