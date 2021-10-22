<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.align-items-center.justify-content-between
    .col-md-5.mb-4.mb-md-0
      .botones
        img(src='@/assets/curso/botones-fondo.svg', alt='Texto que describa la imagen')
        .botones__item(
          v-for="(boton, index) in botones"
        )
          .botones__btn(
            :style="getStyles(boton, index)"
            @mouseover="hover = index"
            @mouseleave="hover = null"
            @click="selected = index"
          )
            .indicador--click(v-if="index === 1 && indicador")
    .col-md-7.col-lg-6(:style="{'z-index':'2'}")
      
      .tarjeta-botones.color-secundario-botones.p-3(v-if="selected === 0")
        h4 1. Propósito
        p.mb-0 Orientar a los equipos de desarrollo curricular para la formulación de proyectos formativos, estrategia metodológica por excelencia implementada por el SENA, con el fin de promover la formación desde el enfoque de competencias. 

      .tarjeta-botones.color-secundario-botones.p-3(v-else-if="selected === 1")
        h4 2. Formulación de proyectos
        p.mb-0 Esta estrategia permite potencialmente que instructores y aprendices asuman los procesos de enseñanza y de aprendizaje como sistemas secuenciales, inductivos, donde los problemas del mundo del trabajo son aterrizados a los ambientes de aprendizaje, para que, a través de la propuesta y ejecución de las soluciones, los aprendices desarrollen competencias que les permitirán desempeñarse laboralmente o continuar en cadena de formación hacia la profesionalización, si así lo desean.

      .tarjeta-botones.color-secundario-botones.p-3(v-else-if="selected === 2")
        h4 3. Aprendizaje basado en proyectos
        p.mb-0 Tenga en cuenta que, a partir del Aprendizaje Basado en Proyectos (ABP), los aprendices planean, implementan y evalúan proyectos que tienen aplicación en el mundo real, más allá del aula de clase (Blank, 1997; Dickinson et al, 1998; Harwell, 1997).

      .tarjeta-botones.color-secundario-botones.p-3(v-else-if="selected === 3")
        h4 4. Solución
        p.mb-0 A partir de una problemática identificada, brindan una solución, bien sea a través de un modelo o prototipo como mejora a un proceso, la innovación o la optimización del funcionamiento de un producto.

      .tarjeta-botones2.color-acento-botones-botones.p-3(v-else-if="selected === 4")
        h4 Elementos esenciales del aprendizaje basado en proyectos
        ul.lista-ul--color.lista-primario
          li.mb-1
            i.fas.fa-check
            | La pregunta como punto de partida.
          li.mb-1
            i.fas.fa-check
            | Utilización de las TIC y herramientas Web 2.0. 
          li.mb-1
            i.fas.fa-check
            | La investigación como estrategia pedagógica.
          li.mb-1
            i.fas.fa-check
            | Trabajo a partir de los intereses de los aprendices.
          li.mb-1
            i.fas.fa-check
            | Desarrollo del proyecto teniendo en cuenta la realidad y el contexto inmediato.
          li.mb-1
            i.fas.fa-check
            | Búsqueda de la posible solución a la pregunta desde la reflexión.
          li
            i.fas.fa-check
            | Puntualización de las metas de aprendizaje.



</template>

<script>
export default {
  name: 'Botones',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,

    botones: [
      {
        img: require('@/assets/curso/botones-ico-01-a.svg'),
        img_h: require('@/assets/curso/botones-ico-01-b.svg'),
        pos_x: '26%',
        pos_y: '2.5%',
        size: '43%',
      },
      {
        img: require('@/assets/curso/botones-ico-02-a.svg'),
        img_h: require('@/assets/curso/botones-ico-02-b.svg'),
        pos_x: '48%',
        pos_y: '12%',
        size: '46%',
      },
      {
        img: require('@/assets/curso/botones-ico-03-a.svg'),
        img_h: require('@/assets/curso/botones-ico-03-b.svg'),
        pos_x: '59%',
        pos_y: '36.5%',
        size: '41%',
      },
      {
        img: require('@/assets/curso/botones-ico-04-a.svg'),
        img_h: require('@/assets/curso/botones-ico-04-b.svg'),
        pos_x: '48%',
        pos_y: '59%',
        size: '46%',
      },
      {
        img: require('@/assets/curso/botones-ico-05-a.svg'),
        img_h: require('@/assets/curso/botones-ico-05-b.svg'),
        pos_x: '26.5%',
        pos_y: '70%',
        size: '42%',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image =
        this.hover === index || this.selected === index
          ? boton.img_h
          : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: boton.size,
        'padding-top': boton.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.botones
  position: relative
.botones__btn
  background-size: contain
  background-repeat: no-repeat
  position: absolute
  cursor: pointer
  transition: background-image 0.2s ease-in-out

.tarjeta-botones, .tarjeta-botones2
  z-index: 2
.tarjeta-botones:before
  content: ""
  display: block
  top: 66%
  left: 50%
  width: 8%
  height: 2px
  position: absolute
  background: #FFB600
  transform: translate(-85%)
  z-index: -1
.tarjeta-botones2:before
  content: ""
  display: block
  top: 66%
  left: 50%
  width: 8%
  height: 2px
  position: absolute
  background: #5A189A
  transform: translate(-85%)
  z-index: -1
</style>
