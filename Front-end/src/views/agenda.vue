
<template>
<link rel="stylesheet" type="text/css" href="/css/login.css">
<div class="container">
       
         <div class="content"> 
      <div id="dia">
          <div>
          <h1>Faça seu agendamento</h1> 
          
            <label for="dias">Escolha o dia:</label><br>
            <div v-for="(dia, index) in dias " v-bind:key="index">
            <p>

           <input type = "checkbox" id = "di" name = "diaEscolhido" value = "diaEscolhido">
          <label for = "dia"> {{ dia }} </label>
  </p>          
</div>
</div> 
 
 
 </div>
     <div class="horario">  
          
            <label for="horario">Escolha o Horario:</label><br>

             <div v-for="(horario, index) in horarios " v-bind:key="index">
               <p>
        <input type = "checkbox" id = "hora" name = "horaEscolhido" value = "horaEscolhido">
          <label for = "dia"> {{ horario }} </label>
        </p>
        </div>      
        
          
          
          <p> 
            <input type="submit" value="Agendar" /> 
          </p>
        
        
        
    </div>

     <hr size="8" width="100%" > 
     <div class="">

        <label for="marcados">Seus horários:</label><br>
        <p> 
            <input type="submit" @click="$router.push('/')" value="Voltar" /> 
          </p>
     </div>

    </div>  

</div>
     



</template>

<script>

export default{
  name:'agenda',
  data(){
    return{
      dias: ['Quinta','Sexta','Sabado', 'Domingo'],
      horarios: ['horario1', 'horario 2', 'horario 3']

    }
}
}
</script>
