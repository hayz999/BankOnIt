<template>
  <section>
    <a href='http://localhost:8080/#/'>
      <img  :src='image' alt='logo' />
    </a>
  </section>
</template>

<script>
import image from '@/assets/Design.png'

export default {
  name: 'MainHeader',
  data: () => {
    return {
      image: image
    }
  }
}
</script>

<style scoped>
  img {
    width: 40%;
    height: auto;
    padding-left: 1rem;
    padding-bottom: 1rem;

  }
  
  section {
    background-image: url('../assets/header.jpg');
    background-size: cover;
  }

  @media only screen and (max-width: 600px) {
    img {
      width: 80%;
    }
  
}
</style>

