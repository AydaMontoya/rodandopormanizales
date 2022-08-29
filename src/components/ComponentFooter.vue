<template>
    <div>
        <footer>
        <div class="contenedor-footer">
            <div class="content-foo">
                <h4>Phone</h4>
                <p>8296312</p>
            </div>
            <div class="content-foo">
                <h4>Email</h4>
                <p>8296312</p>
            </div>
            <div class="content-foo">
                <h4>Location</h4>
                <p>8296312</p>
            </div>
        </div>
        <h2 class="titulo-final">&copy; Creado por | Ayda Montoya 
            <a href="https://github.com/AydaMontoya" target="_blanck">
            <img class="git-logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="gitlogo"/></a>
        </h2>
    </footer>
    </div>
</template>

<script>
export default {
  name: 'ComponentFooter',
  props: {
    msg: String
  }
}
</script>

<style>

footer{
    background: #474747;
    padding: 10px 0 10px 0;
    margin: auto;
    overflow: hidden;
}

.contenedor-footer{
    display: flex;
    width: 70%;
    justify-content: space-evenly;
    margin: auto;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(219, 215, 215);
}

.content-foo{
    text-align: center;
}

.content-foo h4{
    color: rgb(246, 240, 240);
    border-bottom: 3px solid hsl(23, 82%, 50%);
    padding-bottom: 5px;
    margin-bottom: 10px;
}

.content-foo p{
    color: #ccc;
}

.titulo-final{
    text-align: center;
    font-size: 24px;
    margin: 20px 0 0 0;
    color: #f9f4f4;
}

.git-logo {
  width: 30px;
  margin-left: 4px;
}

@media screen and (max-width:900px){
    header{
        background-position: center;
    }

    .contenedor-sobre-nosotros{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .sobre-nosotros .contenido-textos{
        width: 90%;
    }

    .imagen-about-us{
        width: 90%;
    }
    }
    </style>