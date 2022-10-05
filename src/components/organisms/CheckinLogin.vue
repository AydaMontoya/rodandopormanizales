<template>
  <div class="login">
    <div class="container">
      <input type="checkbox" id="flip" />
      <div class="cover">
        <div class="front">
          <img src="@/assets/LoginFront.jpg" alt="" />
        </div>
        <div class="back">
          <img class="backImg" src="@/assets/LoginBack.jpg" alt="" />
        </div>
      </div>
      <form action="#">
        <div class="form-content">
          <div class="login-form">
            <div class="title">Iniciar sesión</div>
            <div class="input-boxes">
              <div class="input-box">
                <i class="fas fa-envelope"></i>
                <!-- poner logo de mensaje -->
                <input type="text" placeholder="Correo electrónico" required />
              </div>
              <div class="input-box">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Contraseña"
                  required
                />
              </div>
              <div class="text"><a href="#">Olvidaste tu contraseña?</a></div>
              <div class="button input-box">
                <input type="submit" value="Ingresar" />
              </div>
              <div class="text sign-up-text">
                ¿Aún no tienes una cuenta? <label for="flip">Registrase Ahora</label>
              </div>
            </div>
          </div>
          <div class="signup-form">
            <div class="title">Registrarse</div>
            <div class="input-boxes">
              <div class="input-box">
                <i class="fas fa-user"></i>
                <!-- poner logo -->
                <input type="text" placeholder="Nombre completo" required />
              </div>
              <div class="input-box">
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Correo electrónico" required />
              </div>
              <div class="input-box">
                <i class="fas fa-lock"></i>
                <!-- poner icono -->
                <input
                  type="password"
                  placeholder="Contraseña"
                  required
                />
              </div>
              <div class="button input-box">
                <input type="submit" value="Registrarse" />
              </div>
              <div class="text sign-up-text">
                ¿Ya tienes una cuenta? <label for="flip">Inicia sesión ahora</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  padding: 30px;
}

.container {
  position: relative;
  max-width: 850px;
  width: 100%;
  background: #fff;
  padding: 40px 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  perspective: 2700px;
  border-radius: 20px;
}

.container .cover {
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 50%;
  /*  background: red; */
  z-index: 98;
  transition: all 1s ease;
  transform-origin: left;
  transform-style: preserve-3d;
}

.container .cover::before{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  /* background: #5e5e5a; */
  opacity: 0.4;
  z-index: 20;
}

.container .cover::after{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: #faf5e60f;
  /* opacity: 0.7; */
  z-index: 100;
  transform: rotateY(180deg);
}

.container #flip:checked ~ .cover {
  transform: rotateY(-180deg);
}

.container .cover img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 12;
  backface-visibility: hidden;
}

.container .cover .back .backImg{
  transform: rotateY(180deg);
}

.container form {
  height: 100%;
  width: 100%;
  background: #fff;
}

.container .form-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-content .login-form,
.form-content .signup-form {
  width: calc(100% / 2 - 25px);
}

form .form-content .title {
  position: relative;
  font-size: 24px;
  font-weight: 500;
  color: #333;
}

form .form-content .title:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 25px;
  background: #ffc200;
}

form .signup-form .title:before {
  width: 20px;
}

form .form-content .input-boxes {
  margin-top: 30px;
}

form .form-content .input-box {
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  margin: 10px 0;
  position: relative;
}

.form-content .input-box input {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  padding: 0 30px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.form-content .input-box input:focus,
.form-content .input-box input:valid {
  border-color: #ffc200;
}

.form-content .input-box i {
  position: absolute;
  color: #ffc200;
  font-size: 17px;
}

form .form-content .text {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

form .form-content .text a {
  text-decoration: none;
}

form .form-content .text a:hover {
  text-decoration: underline;
}

form .form-content .button {
  color: #fff;
  margin-top: 40px;
}

form .form-content .button input {
  color: #fff;
  background: #ffc200;
  border-radius: 6px;
  padding: 0;
  cursor: pointer;
  transition: all 0.4s ease;
}

form .form-content .button input:hover {
  background: #ffc200;
}

form .form-content label {
  color: #ffc200;
  cursor: pointer;
}

form .form-content label:hover {
  text-decoration: underline;
}

form .form-content .login-text,
form .form-content .sign-up-text {
  text-align: center;
  margin-top: 25px;
}

.container #flip {
  display: none;
}

@media (max-width: 730px) {
  .container .cover {
    display: none;
  }
  .form-content .login-form,
  .form-content .signup-form {
    width: 100%;
  }
  .form-content .signup-form {
    display: none;
  }
  .container #flip:checked ~ form .signup-form {
    display: block;
  }
  .container #flip:checked ~ form .login-form {
    display: none;
  }
}
</style>
