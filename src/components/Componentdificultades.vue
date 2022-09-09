<template>
    <div class="card">
       <div class="card_item">
        <div class="card_content">
            <figure class="card_picture">
                <img src="../assets/CerroOro1.jpg" alt=""  class="card_img">
            </figure>
            <div class="card_texts">
                <h2 class="card_title">no te detengas</h2>
                <p class="card_paragraph"> siggue asi</p>
            </div>
        </div>
       </div>
       <div class="card_item">
        <div class="card_content">
            <figure class="card_picture">
                <img src="../assets/CerroOro1.jpg" alt="" class="card_img">
            </figure>
            <div class="card_texts">
                <h2 class="card_title">no te detengas</h2>
                <p class="card_paragraph"> siggue asi</p>
            </div>
        </div>
       </div>
       <div class="card_item">
        <div class="card_content">
            <figure class="card_picture">
                <img src="../assets/CerroOro1.jpg" alt=""  class="card_img">
            </figure>
            <div class="card_texts">
                <h2 class="card_title">no te detengas</h2>
                <p class="card_paragraph"> siggue asi</p>
            </div>
        </div>
       </div>
    </div>
</template>

<script>
    export default {
      name: 'Componentdificultades',
      props: {
        msg: String
      }
    }
    </script>

    <style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.card{
    width: 90%;
    margin: 0 auto;
    padding: 60px 0;
    max-width: 1200px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 3.5em;
    flex-wrap: wrap;
}

.card_item{
    background: #FFC200 ;
    padding-bottom: 3em;
    flex-basis: 280px;
    max-width: 450px;
    flex-grow: 1;
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

    </style>