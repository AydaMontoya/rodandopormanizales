<template>
    <div>
        <footer>
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
    background: #364A61;
    padding: 10px 0 10px 0;
    overflow: hidden;
    flex-wrap: wrap;
    gap: 1rem;
}

.titulo-final{
    text-align: center;
    font-size: 20px;
    margin: auto;
    color: #f9f4f4;
    flex-basis: 20rem;
    flex-grow: 2;
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