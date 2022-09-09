<template>
    <div class="content">
        <div class="titulo">
          <h1>Elige la dificultad a la que deseas enfrentarte</h1>
        </div>
    <div class="card">
       <div class="card_item">
        <button><router-link to="/difBasica" class="dificultad">Básica</router-link></button>
        <div class="card_content">
            <figure class="card_picture">
                <img src="../assets/CerroOro1.jpg" alt=""  class="card_img">
            </figure>
            <div class="card_texts">
                <h3 class="card_title">no te detengas</h3>
                <!-- <p class="card_paragraph"> siggue asi</p> -->
            </div>
        </div>
       </div>
       <div class="card_item">
        <button><router-link to="/difIntermedia" class="dificultad">Intermedia</router-link></button>
        <div class="card_content">
            <figure class="card_picture">
                <img src="../assets/CerroOro1.jpg" alt="" class="card_img">
            </figure>
            <div class="card_texts">
                <h3 class="card_title">no te detengas</h3>
                <!-- <p class="card_paragraph"> siggue asi</p> -->
            </div>
        </div>
       </div>
       <div class="card_item">
        <button><router-link to="/difAvanzada" class="dificultad">Avanzada</router-link></button>
        <div class="card_content">
            <figure class="card_picture">
                <img src="../assets/CerroOro1.jpg" alt=""  class="card_img">
            </figure>
            <div class="card_texts">
                <h3 class="card_title">no te detengas</h3>
                <!-- <p class="card_paragraph"> siggue asi</p> -->
            </div>
        </div>
       </div>
    </div>
    </div>
</template>

<script>
    export default {
      name: 'ComponentRutas',
      props: {
        msg: String
      }
    }
    </script>

    <style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.titulo{
    color: #0C233E;
    text-align: center;
    margin-bottom: 0px;
}

.dificultad{
    text-decoration: none;
    color: #2A2F35;
    font-weight: bold;
    font-size: 20px;
}

button{
    background-color:#FFC200;;
    border: none;
    color:  #2A2F35;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    margin: 40px 60px;
    opacity: 1;
    transition: 0.3s;
    border-radius: 5px;
}
button:hover {opacity: 0.6}

.card{
    width: 90%;
    margin: 0 auto;
    padding: 60px 0px;
    max-width: 1200px;
    min-height: 100vh;
    display: flex;
    align-items: flex-start; 
    justify-content: space-evenly;
    gap: 3.5em;
    flex-wrap: wrap;
}

.card_item{
    padding: 0px 0px 30px 0px;
    margin: 0%;
    flex-basis: 280px;
    max-width: 450px;
    background: #e9ecef;
    border-radius: 10px;
}

.card_content{
    width: 90%;
    margin: 0 auto;
}

.card_picture{
    width: 90%;
    margin: 0 auto;
    position: relative;
    bottom: 2em;
}

.card_img{
    width: 100%;
}

.card_title{
    margin-bottom: 1em;
}

.card_texts {
    padding: 16px 60px;    
}

    </style>