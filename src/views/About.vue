<template>
  <div class="about">
    <div class="container">
      <p class="text-justify mx-auto top">Liczenie kaloryczności posiłków może być naprawdę denerwujące. Na szczęście, nie musisz już nosić ze sobą tabel kalorii, kalkulatora, notesu i długopisu – wystarczy twój telefon lub dostęp do internetu. </p>
      <p class="text-justify mx-auto my-3">Właśnie odkryłeś fantastyczną aplikację, dzięki której możesz prowadzić swój dzienniczek żywieniowy! </p>
      <p class="text-justify mx-auto my-3">Można z niego korzystać zarówno z telefonu za pomocą apki, jak i z komputera za pomocą strony internetowej.</p>
      <p class="text-justify mx-auto my-3"> Zakładamy konto, ustawiamy swoje cele i możemy spisywać nasze posiłki!</p>
      <div class="big-logo mt-5" >Bądź Fit z <span class="food">Food</span><span class="log">Log</span>!</div>
    </div>

    
    <div id="img-parallax" v-bind:style="{'background-image': 'url('+ image + ')' }" style="z-index:1"></div>

    
    <div id="authors">
      <div class="container">
        <div class="row">
          <p class="col-md text-center">Autorzy Projektu</p>
          <ul class="col-md">
            <li class="my-3">Antoni Kurek</li>
            <li class="my-3" >Krzysztof Kwolek</li>
            <li class="my-3">Katarzyna Knapik</li>
          </ul>
        </div>
      </div>
    </div>

    
  </div>
  

</template>
<script>

import firebase from '../firebase/init'

export default {
  name: 'About',
  data: function(){
    return {
      image: '',
    }
  },
  created(){
    firebase.storage.ref('fit2.png').getDownloadURL().then(url => {
      this.image = url
    })
    .catch(err => console.error(err))
  }
}
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500&family=Inconsolata&display=swap');

*{
  font-family: 'Exo', sans-serif;
}

  .container p {
    font-family: 'Exo', sans-serif;
    letter-spacing: 1.2;
    max-width: 800px;
    line-height: 1.7;
    font-size: 20px;
    color: #fff;
  }

  .container .top{
    color: #fff;
    letter-spacing: 1.3;
    font-size: 27px
  }

 #img-parallax {
    min-height: 550px; 
    background-color: #fff ;

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 15px;
 }


#authors p {
  font-size: 60px;
  color: #fff;
  margin-top: 30px;
}

ul {
  list-style-type: none ;
  font-size: 26px;
  color: #fff;
  margin: 30px auto 140px auto;
}

.container .big-logo{
  letter-spacing: 1.2;
  font-size: 48px;
  text-align: center;
  font-weight: 400;
}

.food{
  color: #f5f563
}

.log{
  color: #fb974f
}

@media (max-width: 900px){
  #authors p{
    font-size: 30px;
    margin-bottom: 10px;
    padding-bottom: 0px;
  }

  ul{
    font-size: 22px;
    margin: 10px auto 130px auto;
    padding: 0 auto;
  }

  #img-parallax{
    max-height: 450px;
  }

}

@media (max-width: 700px){
  .container p{
    font-size: 15px;
  }

  .container .top{
    font-size: 19px;
  }

  .container .big-logo{
    margin: 30px auto 4px auto;
    font-size: 27px;
  }
}
</style>
