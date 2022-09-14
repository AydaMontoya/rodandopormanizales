<template>
<!-- <div>
  <div class="informacionciclismo">
   <div class="capa"></div>
   <div class="parrafo">

        <p>Para el mundo del ciclismo, colombia ha sido un referente internacional, ya que tenemos grandes
          ciclistas, los cuales se han destacado por su gran talento, 
          a continuacion veremos algunos deportistas: </p>
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
  </div> -->
  <componentCiclismo/>
</template> 

<script>
import componentCiclismo from '@/components/ComponentCiclismo.vue'

export default {
  name: 'CiclismoView',
  components: {
    componentCiclismo
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
background-image: url("../assets/Plaza-Bolívar-Manizales.jpg");
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
    height: 150px;
    padding: 20px 20px;
    margin: 50px;
    font-size: 18px;
    line-height: 1.5;
    background: rgba(255, 255, 255, 0.602);
    box-shadow: 1px 5px 25px rgba(0, 0, 0, 0.639);
    border-radius: 5px;
    text-align: center;
    color:black
}
/* estilo descripcion info ciclista aqui */
.descripcionCiclista{
  width: 90%;
    margin: 0 auto;
    padding: 60px 0px;
    max-width: 1200px;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start; 
    justify-content: space-evenly;
    gap: 3.5em;
    flex-wrap: wrap;
    background: #e9ecef;

}
.imagenesdeciclismo{
  border-radius: 20%;
  width: 200px;
  height: 280px;
  object-fit: cover;
}
</style>    