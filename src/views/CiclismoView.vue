<template>
<div>
  <div class="informacionciclismo">
   <div class="capa"></div>
   <div class="parrafo">
       <img src="../assets/imgsmall.jpg">
        <p>Para el mundo del ciclismo, colombia ha sido un referente internacional, ya que tenemos grandes
          ciclistas, los cuales se han destacado por su gran talento, 
          a continuacion veremos algunos deportistas: de colombia bien lindos</p>
   </div>
  </div>
    <div>
    <div>
      <div class="descripcionCiclista">
      <img src="../assets/Nairo.jpg" alt="Nairo Quintana" title="Nairo Quintana" class="imagenesdeciclismo">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores consequatur blanditiis mollitia tempora sint nihil laboriosam consequuntur obcaecati in enim dolorum assumenda, nemo, commodi velit impedit. Iste, officia maxime.</p> 
    </div>
      <div class="descripcionCiclista">
      <img src="../assets/EganBernal.jpg" alt="Egan Bernal" title="Egan Bernal" class="imagenesdeciclismo"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quam eius facilis vero, pariatur aliquid repudiandae, voluptates eos saepe quo ex voluptatibus assumenda quisquam illum. Id sed laboriosam eaque recusandae.</p>
      </div>
      <div class="descripcionCiclista">
      <img src="../assets/Rigo.jpg" alt="Rigoberto Uran" title="Rigoberto Uran" class="imagenesdeciclismo"/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis maxime ex quis quaerat nihil exercitationem culpa quas, recusandae accusamus libero nisi ratione perspiciatis necessitatibus fugit! Sint harum modi minima reiciendis?</p>  
      </div>
      <div class="descripcionCiclista">
      <img src="../assets/MarianaPajon.png" alt="Mariana Pajon" title="Mariana Pajon" class="imagenesdeciclismo"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia corrupti doloremque odit, architecto enim dolores possimus fuga harum necessitatibus adipisci magnam. Quo accusantium ex eius quis, accusamus atque dolore.</p>
      </div>
      <div class="descripcionCiclista">
      <img src="../assets/MariaCalle.png" alt="Luisa Maria Calle" title="Luisa Maria Calle" class="imagenesdeciclismo"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium odio commodi illum saepe! Quia, omnis minima? Perspiciatis, illum? Rem nesciunt nobis molestiae inventore provident et hic mollitia rerum quas?</p>
      </div>
      <div class="descripcionCiclista">
      <img src="../assets/luchoherrera.png" alt="Lucho Herrera" title="Lucho Herrera" class="imagenesdeciclismo"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repudiandae facere quas impedit. Corrupti illo ab officiis tempore velit beatae, voluptatibus unde itaque, sit saepe ullam quibusdam ad pariatur quae?</p>
      </div>
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
/* estilo descripcion ciclismo aqui */
.informacionciclismo{
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url("../assets/Fondo.jpg");
background-size: 100% 100%;
background-repeat: no-repeat;
}
.capa{
    width: 100%;
    height: 90vh;
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
/* estilo descripcion info ciclista aqui */
.descripcionCiclista{
  display: flex;
  width: 93vw;
  height: 300px;
  padding-left: 20px 20px;
  margin: 50px;
  font-size: 20px;
  line-height: 1.5;
  background: rgba(255, 255, 255, 0.737);
  box-shadow: 1px 5px 25px hsla(23, 82%, 50%, 0.541);
  border-radius: 5px;
  text-align: justify;
  color:black
}
.imagenesdeciclismo{
  border-radius: 20%;
  width: 200px;
  height: 280px;
  object-fit: cover;
}
</style>    