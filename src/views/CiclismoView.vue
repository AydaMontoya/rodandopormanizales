<template>
<div>
  <div class="informacionciclismo">
   <div class="capa"></div>
   <div class="parrafo">
       <img src="../assets/imgsmall.jpg">
        <p>Para el mundo del ciclismo, colombia ha sido un referente internacional, ya que tenemos grandes
          ciclistas, los cuales se han destacado por su gran talento, 
          a continuacion veremos algunos deportistas:</p>
   </div>
  </div>
    <div>
    <div class="iamgenesCiclistas">
      <img src="https://i.postimg.cc/FFxjxKvW/Nairo.jpg"/>
      <img src="../assets/EganBernal.jpg"/>
      <img src="https://i.postimg.cc/FFxjxKvW/Nairo.jpg"/>
      <img src="https://i.postimg.cc/FFxjxKvW/Nairo.jpg"/>
      <img src="https://i.postimg.cc/FFxjxKvW/Nairo.jpg"/>
    </div>
  </div>
  </div>
</template> 

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
}
}
</script>

<style scoped>
  /* estilo imagenes aqui */
  .circular--square {
  border-radius: 50%;
  width:300px;
  height:300px;
}
/* estilo descripcion ciclismo aqui */

.informacionciclismo{
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url("../assets/Fondo.jpg");
background-size: 100% 100%;
background-repeat: no-repeat;
}
.capa{
    width: 100%;
    height: 100vh;
    position: absolute;
    background: #38273b;
    opacity: 0.7;
}
.parrafo{
    z-index: 1;
    width: 600px;
    height: 300px;
    padding: 20px 20px;
    margin: 50px;
    font-size: 18px;
    line-height: 1.5;
    background: rgba(255, 255, 255, 0.737);
    box-shadow: 1px 5px 25px rgba(0, 0, 0, 0.639);
    border-radius: 5px;
    text-align: justify;
    color:black
}
.parrafo img{
  width: 200px;
  border-radius: 5px;
  float: left;
  margin-right: 15px;
  padding: 0px 20px 20px 0px;
}
.iamgenesCiclistas{
  width: 60px;
  height: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
</style>    