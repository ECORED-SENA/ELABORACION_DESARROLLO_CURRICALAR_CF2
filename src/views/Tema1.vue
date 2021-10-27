<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Guía de desarrollo curricular

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p 
          strong La guía de desarrollo curricular 
          | orienta la formulación del proyecto formativo (en programas de formación titulada), el cual es concebido como 
          strong.etiqueta “un instrumento de gestión que prevé y organiza acciones de planeación técnico pedagógicas y de administración”
          |  (SENA, 1985, p. 21). 
        p Se debe tener en cuenta que el SENA asume la Formación por Proyectos “desde una visión amplia y metodológicamente integradora, que tiene en los Proyectos la base de las actividades formativas que se plantean a los aprendices en una Estructura Curricular y que incorpora otras Técnicas Didácticas Activas que los complementan” (Carrera, 2007, p. 76).
      .col-md-5(data-aos="fade-left")
        figure.mb-5
          img(src='@/assets/curso/tema1-img.png', alt='Texto que describa la imagen') 
  
    p.mb-4(data-aos="fade") Además, la guía de desarrollo curricular enmarca conceptualmente la elaboración de la planeación pedagógica del programa de formación y guías de aprendizaje que detallan las actividades que se plantean para el desarrollo de competencias y logro de resultados de aprendizaje. En resumen:

    .titulo-sexto.color-primario(data-aos="fade-down") 
      p.mb-0 <b>Figura 1.</b> Guía de desarrollo curricular
    figure.mb-5(data-aos="fade-down") 
      img(src='@/assets/curso/tema1-fig1.svg', alt='Guía de desarrollo curricular')
        
    .row.justify-content-center
      .col-md-10.mb-5(data-aos="fade-down") 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-img2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los equipos de desarrollo curricular están conformados por instructores de competencias técnicas y transversales y asesores pedagógicos, los cuales se convocan por la estrategia de la Red de conocimiento sectorial. 

    .row.justify-content-center
      .col-md-10
        .tarjeta.color-degrade.p-3
          .row.justify-content-around.align-items-center.px-md-5
            .col-3.col-sm-2.col-lg-2
              img.px-md-3(src="@/assets/curso/tema1-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 Guía de desarrollo curricular
                  p.mb-0.text-small Se le invita a realizar la consulta a detalle de la Guía de desarrollo curricular GFPI-G012 V3 (SENA, 2020).
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/GFPI-G-012_Guia_Desarrollo_Curricular.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
