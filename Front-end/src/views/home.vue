
<template>
    <div class = "container">
        <div class="row header">
          <div class="col-sm-2">
      
          </div>
    
          <div class="col-sm-4">
            
          </div>
          <div class="col-lg-6">
          <a href="#inicio">
          <button class="button bi bi-house-door"> Inicio 
           </button></a>
          <a href="#serviços">
           <button class="button bi bi-person-lines-fill"> 
             Serviços 
           </button></a>
           <a href="#profi">
           <button class="button bi bi-people-fill">
            Profissionais 
           </button></a>
           <a href="#contact">
           <button class="button bi bi-telephone"> 
            Contato 
           </button></a>
          <span><router-link to="/login">
          <button class="bi bi-person button">
            Login 
          </button></router-link>
  </span>
          
     
          </div>
        
          </div>
          <hr size="8" width="50%" >  
          <div class="row content">
              <div id="inicio" class= "col-lg-6">
                  Salão Dona Bella<br>
                  <br>
              </div>
          </div>
          <div class="row ">
            <div class= "col-lg-6">
              <h5 > União de sofisticação e modernidade, com o talento dos melhores e mais experientes profissionais do setor.</h5>
              <br>
              <p> Um salão minuciosamente planejado e concebido para oferecer todos os serviços voltados à beleza e estética, 
              feminina e masculina. Salas estruturadas para noivas, estética especializada, espaços próprios para esmalteria,
               maquiagem, podologia, massagem, depilação e Hair Stylists. Dispomos de um ambiente onde todos podem usufruir 
               de lanches ou refeições saudáveis, carinhosamente preparadas para tornar sua permanência mais agradável.
              Além de um amplo espaço para eventos, cursos e reuniões empresariais.</p>
              <br>
              <br>
            </div>
        </div>
      
     
        <div class="row">
        <div class="col-sm-2">  
        </div>
        <div class="col-sm-4">
         
        </div>
        <div class="col-lg-6 sidenav">
            Nossos diferenciais
            <br>
            <br>
        </div>
     
        <div class="row box ">
         
          <div class="col-sm-4">
            <h5>Profissionais capacitados</h5>
            <i class="bi bi-people-fill anchor"></i>
          </div>
          <div class="col-sm-4">
            
            <h5>Marcações rapidas</h5>
            <i class="bi bi-calendar3 anchor"></i>
          </div>
          <div class="col-sm-4">
            
            <h5>Atendimento de qualidade</h5>
            <i class="bi bi-check2-circle anchor"></i>
          </div>
          <div class="col-sm-4">
            
            <h5>Ambiente confortavel</h5>
            <i class="bi bi-pin-map anchor"></i>
          </div>
          <div class="col-sm-4">
            
            <h5>Experiencia no mercado</h5>
            <i class="bi bi-watch anchor"></i>
          </div>
          <div class="col-sm-4">
            
            <h5>Tratamentos Completos</h5>
            <i class="bi bi-clipboard-data anchor"></i>
          </div>
        </div>
      </div>
      <hr size="8" width="50%" >  
      <div id="serviços" class="row content">
          <div class= "col-lg-6">
              Serviços<br>
              <br>
          </div>
      </div>
    
      <div class="row">
        <div class="col-lg-6">  
          <img src="https://patriciavidal.com/wp-content/uploads/2020/01/MAQUIAGEM-PARA-FESTA.jpg" alt="maquiagem" width=514 height=345>
          <h5>
             Maquiagem Completa - Festa
          </h5>
            <span><router-link to="/login">
          <button class=" btn btn-danger">Agendar 
          </button></router-link>
  </span>     
  </div>
       
        <div class="col-lg-6">  
          <img src="https://i1.wp.com/blog.singu.com.br/wp-content/uploads/2019/09/decoracao-de-unhas-26.jpg?w=564&ssl=1" alt="unhas" width=514 height=345>
          <h5>
             Unhas decoradas
          </h5>
           <span><router-link to="/login">
          <button class=" btn btn-danger">Agendar 
          </button></router-link>
  </span>
       </div>
        <div class="col-lg-6">  
          <img src="https://vejasp.abril.com.br/wp-content/uploads/2016/12/instagram_cintra_blondplex.jpg" alt="cabelo" width=514 height=345>
          <h5>
             Cabelo - cortes, penteados e luzes
          </h5>
           <span><router-link to="/login">
          <button class=" btn btn-danger">Agendar 
          </button></router-link>
  </span>
       </div>
        <div class="col-lg-6">  
          <img src="https://www.depylaction.com.br/blog/wp-content/uploads/2020/11/formatos_de_sobrancelhas-1170x550.jpg" alt="sobrancelha" width=514 height=345>
          <h5>
             Desing de sobrancelha e henna
          </h5>
          <span><router-link to="/login">
          <button class=" btn btn-danger">Agendar 
          </button></router-link>
  </span>
        </div>
      </div>
      <br>
      <br>
      <div id="profi" class="row">
        <div class="col-sm-2">  
        </div>
        <div class="col-sm-4">
         
        </div>
        <div class="col-lg-6 sidenav">
            Equipe de Profissionais
            <br>
            <br>
        </div>
      </div>
        <div class="row box ">
         
          <div class="col-sm-4">
            <img src="https://www.maquiadoraemguarulhos.com.br/wp-content/uploads//2019/02/maquiadoraadomicilio_maquiagemadomicilioemguarulhosesp_maquiagemprofissional.jpg" alt="maquiadora" width=240 height=330><br>
            Maquiadora e Designer de Sobrancelhas
          </div>
          <div class="col-sm-4">
            <img src="https://www.primecursos.com.br/arquivos/uploads/2013/08/cabeleireiro.jpg" alt="cabeleleira" width=240 height=330><br>
            Cabeleireira especializada em cortes e <br>coloração feminina
          </div>
          <div class="col-sm-4">
            <img src="https://img.estadao.com.br/thumbs/640/resources/jpg/0/4/1558975084140.jpg" alt="manicure" width=240 height=330>
            <br> Manicure e pedicure especializada
          </div>
    
      </div>
      <br>
      <br>
      <div id="contact" class="row">
      <div class="col-lg-6 sidenav">
         Contato
        <br>
        <br>
    </div>
    <div class="col-lg-6 sidenav">
      <br>
     <br>
    </div>
    </div>
    <div class="row header">
      <div class="col-md-4 ">
        <i class="bi bi-telephone"></i> Telefone <br>
        (85) 3400-1772
      </div>
      <div class="col-md-4 ">
        <i class="bi bi-whatsapp"></i> Whatsapp <br>
        (85) 99563-3472
      </div>
      <div class="col-md-4 ">
        <i class="bi bi-envelope"></i> Email <br>
        donabellasalao@gmail.com
      </div>
    </div>
    
    </div>
</template>

<script >

export default{
    name: 'home'
}

</script>