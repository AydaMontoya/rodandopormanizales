<template>
  <div class="benefits">
    <div class="container benefits">
      <h1 class="title">Beneficios de montar en bicicleta</h1>
      <div class="container-benefits">
        <img src="@/assets/HomeBenefits.png" alt="" class="img-benefits" />
        <ul class="text-content">
          <li>Reduce los niveles de estrés</li>
          <li>Mejora la autoestima</li>
          <li>Previene el deterioro cognitivo</li>
          <li>Mejora la memoria</li>
          <li>Ayuda a controlar las adcciones</li>
          <li>Mejora el estado animico</li>
          <li>Reduce la agresividad</li>
          <li>Te ayuda a ser mas productivo</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Benefits",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.benefits {
  padding: 0px 0px 10px 0px;
}

.container-benefits {
  display: flex;
  justify-content: space-evenly;
}

.title {
  color: var(--color3);
  text-align: center;
  margin-bottom: 30px;
  padding: 10px 0px 5px 0px;
}

.img-benefits {
  width: 35%;
  border-radius: 10%;
  padding: 0px 0px 30px 0px;
}

.benefits .text-content {
  width: 40%;
  list-style: none;
  padding: 25px 0px 0px 0px;
}

.text-content li {
  margin-bottom: 15px;
  padding: 0px 0px 0px 80px;
  color: var(--color2);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
}

li::before {
  content: "";
  display: inline-block;
  width: 40px;
  height: 40px;
  background-image: url(@/assets/icono.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  margin-right: 8px;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
}

@media screen and (max-width: 900px) {
  .container-benefits {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .benefits .text-content {
    width: 50%;
    padding: 0px 0px 0px 0px;
  }

  .img-benefits {
    width: 50%;
  }
}

@media screen and (max-width: 500px) {
  .img-benefits {
    margin-bottom: 40px;
    width: 99%;
  }

  .benefits .text-content {
    width: 95%;
  }
}

@media screen and (max-width: 426px) {
  .benefits .text-content {
    width: 80%;
  }

  .img-benefits {
    margin-bottom: 1px;
    width: 99%;
  }

  .text-content li {
    margin-bottom: 12px;
    padding: 0px 0px 0px 40px;
  }
}
</style>
