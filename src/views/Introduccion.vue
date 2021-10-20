<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      img(src='@/assets/curso/intro-banner.png', alt='Texto que describa la imagen')

    p.mb-4(data-aos="fade") Apreciado participante, le damos la bienvenida a este momento de aprendizaje orientado al abordaje de proyectos formativos según la metodología SENA. Antes de empezar le sugerimos revisar la siguiente infografía para identificar el contexto de aprendizaje.      



    p(data-aos="fade") A lo largo de este documento se le presentarán conceptos fundamentales sobre los proyectos formativos, de manera que pueden ser útiles para la formulación de estos.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
