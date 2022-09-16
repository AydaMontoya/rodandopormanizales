
<template>
    <div class="titulo">
          <h1>Escoge tu aventura !!!</h1>
        </div>
    <div class="content-dificultades">
    <div class="card">
        <div class="imgBx">
            <img src="../assets/DifMedia.jpg" alt="">
        </div>
        <div class="content">
            <div class="details">
                <h2>Bosque Popular<br><span>Muy buena</span></h2>
                <div class="data">
                    <h3>345<br><span>Distancia</span></h3>
                    <h3>34<br><span>Altitud</span></h3>
                    <h3>345<br><span>Tipo de bicicleta</span></h3>
                </div>
                <div class="actionBtn">
                    <button>follow</button>
                    <button>messaje</button>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="imgBx">
            <img src="../assets/DifMedia.jpg" alt="">
        </div>
        <div class="content">
            <div class="details">
                <h2>Bosque Popular<br><span>Muy buena</span></h2>
                <div class="data">
                    <h3>345<br><span>Distancia</span></h3>
                    <h3>34<br><span>Altitud</span></h3>
                    <h3>345<br><span>Tipo de bicicleta</span></h3>
                </div>
                <div class="actionBtn">
                    <button>follow</button>
                    <button>messaje</button>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="imgBx">
            <img src="../assets/DifMedia.jpg" alt="">
        </div>
        <div class="content">
            <div class="details">
                <h2>Bosque Popular<br><span>Muy buena</span></h2>
                <div class="data">
                    <h3>345<br><span>Distancia</span></h3>
                    <h3>34<br><span>Altitud</span></h3>
                    <h3>345<br><span>Tipo de bicicleta</span></h3>
                </div>
                <div class="actionBtn">
                    <button>follow</button>
                    <button>messaje</button>
                </div>
            </div>
        </div>
    </div>
</div>
  </template>

<script>
    export default {
      name: 'ComponentDificultad',
      props: {
        msg: String
      }
    }
</script>

<style scoped>

.titulo{
    color: #0C233E;
    text-align: center;
}

.content-dificultades{
/*     display: flex;
    justify-content: center;
    align-items: center; */
   /*  min-height: 100vh; */
    background: #f2f2f2;
    width: 90%;
    margin: 0 auto;
    padding: 100px 0px 0px 0px;
    max-width: 1200px;
    min-height: 100vh;
    display: flex;
    align-items: flex-start; 
    justify-content: space-evenly;
    gap: 5.2em;
    flex-wrap: wrap;
}

.card{
    position: relative;
    width: 300px;
    height: 180px;
    background: #f2f2f2;
    border-radius: 20px;
    box-shadow: 0 35px 80px rgb(135, 132, 132);
    transition: 0.5s;
}

.card:hover{
    height: 450px;
}

.imgBx{
    position: absolute;
    left: 50%;
    top: -50px;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
    background: #f2f2f2;
    border-radius: 20px;
    box-shadow: 0 15px 50px black;
    overflow: hidden;
    transition: 0.5s;
}

.card:hover .imgBx{
    width: 250px;
    height: 250px;
}

.imgBx img{
    position: absolute;
    top: 0 ;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card .content{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
}

.card .content .details{
    padding: 40px;
    text-align: center;
    width: 100%;
    transition: 0.5s;
    transform: translateY(150px);
}

.card:hover .content .details{
    transform: translateY(0px);
}

.card .content .details h2{
    font-size: 1.25em;
    font-weight: 600;
    color: #364A61;
    line-height: 1.2em;
}

.card .content .details h2 span{
    font-size: 0.75em;
    font-weight: 500;
    opacity: 0.5;
}

.card .content .details .data{
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}

.card .content .details .data h3{
    font-size: 1em;
    color:#364A61;
    line-height: 1.2em;
    font-weight: 600;
}

.card .content .details .data h3 span{
    font-size: 0.85em;
    font-weight: 400;
    opacity: 0.5;
}

.card .content .details .actionBtn{
    display: flex;
    justify-content: space-between;
    /* gap: 20px; */
}

.card .content .details .actionBtn button{
    padding: 10px 30px;
    border-radius: 5px;
    border:none;
    outline: none;
    font-size: 1em;
    font-weight: 500;
    background: #FFC200;
    color: #f2f2f2;
    cursor: pointer;
}

.card .content .details .actionBtn button:nth-child(2){
    border: 1px solid #364A61;
    color: #364A61;;
    background: #f2f2f2;
}

</style>
