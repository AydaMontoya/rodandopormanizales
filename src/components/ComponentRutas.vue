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
                <img src="../assets/DifMedia.jpg" alt=""  class="card_img">
                <div class="capa">
                    <h3>No importa lo lento que vayas, siempre y cuando no te detengas!!!</h3>
                </div>
            </figure>
        </div>
       </div>
       <div class="card_item">
        <button><router-link to="/difIntermedia" class="dificultad">Intermedia</router-link></button>
        <div class="card_content">
            <figure class="card_picture">
                <img src="../assets/DifMedia.jpg" alt="" class="card_img">
                <div class="capa">
                    <h3>Que tu bici te lleve donde tu mente soñó</h3>
                </div>
            </figure>
        </div>
       </div>
       <div class="card_item">
        <button><router-link to="/difAvanzada" class="dificultad">Avanzada</router-link></button>
        <div class="card_content">
            <figure class="card_picture">
                <img src="../assets/DifAvanzada.jpg" alt=""  class="card_img">
                <div class="capa">
                    <h3>Que tu meta de hoy sea ganarle a tu mejor excusa</h3>
                </div>
            </figure>
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
    flex-grow: 1;
    width: 160px;
    height: 50px;
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
/* card_picture card_img capa */
.card_picture{
    width: 100%;
    margin: 0 auto;
    position: relative;
    bottom: 0.5em;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0px 10px 25px rgba(0,0,0,0.50);
    cursor: pointer;
}

.card_img{
    width: 100%;
    height: 100%;
    transition: all 500ms ease-out;
}

.card_picture .capa{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(45, 70, 75, 0.6);
    transition: all 500ms ease-out;
    opacity: 0;
    visibility: hidden;
    text-align: center;
}

.card_picture:hover > .capa{
    opacity: 1;
    visibility: visible;
}

.card_picture:hover > .capa h3{
    margin-top: 130px;
    margin-bottom: 15px
}

.card_picture:hover > img{
    transform: scale(1.3);
}

.card_picture .capa h3{
    color: #e9ecef;
    font-weight: 400px;
    margin-bottom: 120px;
    transition: all 500ms ease-out;
    margin-top: 30px;
}

.card_title{
    margin-bottom: 1em;
}

    </style>