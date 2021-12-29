<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Desarrollo curricular

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p 
          strong El desarrollo curricular 
          |  es el procedimiento que permite en el SENA la elaboración de los diferentes instrumentos que hacen posible la materialización del diseño curricular para la formación integral en competencias, de manera que se cumpla la misión de la entidad, la cual precisa una formación profesional para la inserción de los egresados en el mundo del trabajo; es decir, se ejecuta la ruta de aprendizaje del aprendiz. 
        p Los instrumentos de desarrollo curricular que se implementan en las diversas modalidades de formación (presencial, bimodal o virtual) corresponden a:
        ul.lista-ul--color.lista-secundario
          li.mb-2
            i.fas.fa-check
            | El proyecto formativo.
          li.mb-2 
            i.fas.fa-check
            | La planeación pedagógica.
          li.mb-2 
            i.fas.fa-check
            | Las guías de aprendizaje.
          li.mb-0 
            i.fas.fa-check
            | Los instrumentos de evaluación.      
      .col-md-5(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema2-img.png', alt='Texto que describa la imagen') 

    .row
      .col-md-5.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2-img2.svg', alt='Texto que describa la imagen')   
      .col-md-7.mb-4(data-aos="fade-left")
        p El desarrollo curricular está normalizado por:
        ul.lista-ul--color.lista-secundario
          li.mb-2
            i.fas.fa-check
            | La Ley 119 de 1994 de reestructuración del SENA.
          li.mb-2 
            i.fas.fa-check
            | El Decreto 249 de 2004, que orienta a la entidad para definir los lineamientos para llevar a cabo los procedimientos involucrados en la formación profesional integral. 
          li.mb-2 
            i.fas.fa-check
            | El Decreto 1426 de 1998, que define la clasificación y remuneración de empleos públicos. 
          li.mb-2 
            i.fas.fa-check
            | La unidad técnico-pedagógica de 1985.     
          li.mb-2 
            i.fas.fa-check
            | El estatuto de la formación profesional integral de 1997, entre otros.   

    .row.justify-content-center.mb-5
      .col-md-10
        .tarjeta.color-degrade.p-3
          .row.justify-content-around.align-items-center.px-md-5
            .col-3.col-sm-2.col-lg-2
              img.px-md-3(src="@/assets/curso/tema2-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 Documento GFPI-AN-006
                  p.mb-0.text-small Cuando se lleven a cabo jornadas de desarrollo curricular para diseños de modalidad virtual, se recomienda remitirse al documento GFPI-AN-006, publicado en la plataforma CompromISO. ¡Revíselo!       
    
    p.mb-4(data-aos="fade") Tenga en cuenta que, para realizar el procedimiento de 
      strong desarrollo curricular 
      | de un programa de formación titulado, este debe estar en 
      strong ejecución en la plataforma Sofia Plus, 
      | de manera que se pueda crear el 
      strong proyecto formativo. 
      | Para programas de formación complementaria, deben estar en estado aprobado en la plataforma.

    .row.justify-content-center
      .col-md-10
        .bloque-texto-a.color-primario.p-4.p-md-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              img.mb-0(src="@/assets/curso/tema2-img3.svg")
            .col-lg-7
              .bloque-texto-a__texto.p-4
                p El elemento básico de entrada para emprender el procedimiento es el 
                  strong diseño curricular 
                  | del programa de formación; adicionalmente, los recursos que aporta el sistema de bibliotecas del SENA. 
    
    Separador


    // 2.1
    #t_2_1.titulo-segundo(data-aos="fade-right")
      .h2 2.1  Procedimiento

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        .bloque-texto-b.color-secundario.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 El procedimiento de desarrollo curricular es un documento complementario alojado en la plataforma CompromISO, permite operacionalizar la ruta para la elaboración de los instrumentos que lo componen; además, la asignación de los recursos humanos y físicos en el marco de las normas vigentes. 
            i.fas.fa-quote-right
        p.px-md-3 - Procedimiento de desarrollo curricular GFPI-P-013 V3 (SENA, 2020).  
      .col-md-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2-1-img.png', alt='Texto que describa la imagen') 

    Separador


    // 2.2
    #t_2_2.titulo-segundo(data-aos="fade-right")
      .h2 2.2  Alcance

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade-down") 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2-2-img.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El procedimiento abarca la ruta desde la generación de la necesidad hasta la disposición de los instrumentos y recursos sobre la plataforma educativa. A continuación, se presenta un diagrama simplificado y se invita a leerlo en el documento del procedimiento.

    .titulo-sexto.color-primario(data-aos="fade-down") 
      p.mb-0 <b>Figura 2.</b> Procedimiento desarrollo curricular 
    figure(data-aos="fade-down") 
      img(src='@/assets/curso/tema2-2-figura.svg', alt='Procedimiento desarrollo curricular ')

    Separador


    // 2.3
    #t_2_3.titulo-segundo(data-aos="fade-right")
      .h2 2.3  Equipo de desarrollo curricular
    
    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Para elaborar el desarrollo curricular de un programa de formación, se requiere conformar un equipo interdisciplinario, de manera que se puedan diseñar acciones de aprendizaje que permitan materializar las competencias tanto específicas como transversales y claves. Los gestores de red de conocimiento son quienes solicitan a los coordinadores académicos los tiempos de los instructores. 
          strong El equipo de desarrollo curricular 
          | se conformará y convocará mediante acciones coordinadas con la 
          strong Dirección de Formación Profesional, 
          | a través de la estrategia 
          strong Redes de Conocimiento Sectorial. 
        p Los instructores convocados para conformar un equipo de desarrollo curricular deberán cumplir con lo establecido en el perfil del instructor del programa de formación (cada una de las competencias del diseño curricular del programa de formación establece el perfil del instructor), y serán convocados a través de la estrategia de redes de conocimiento para conformar los equipos de Desarrollo Curricular. Uno de los instructores convocados a la jornada de Desarrollo Curricular asumirá el rol de asesor pedagógico, el cual deberá tener experiencia en la elaboración de proyectos formativos.  
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2-3-img.png', alt='Texto que describa la imagen') 

    .lista-ul--color.lista-primario
      li.mb-2
        i.fas.fa-chevron-right
        h3 Conformación de los equipos de desarrollo curricular.
    
    p(data-aos="fade") De acuerdo con la guía de desarrollo curricular, los equipos se conforman de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-md-7(data-aos="fade-down") 
        .titulo-sexto.color-primario(data-aos="fade-down") 
          p.mb-0 <b>Figura 3.</b> Conformación de los equipos de desarrollo curricular según nivel del programa 
        figure(data-aos="fade-down") 
          img.mb-3(src='@/assets/curso/tema2-3-figura.svg', alt='Conformación de los equipos de desarrollo curricular según nivel del programa')
        figcaption Nota. Guía de desarrollo curricular SENA, 2020

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade-down") 
        .cajon.color-secundario.p-4
          .row.justify-content-center.px-md-4
            .col-md-2.col-5.mb-md-0.mb-4
              img.px-md-2(src='@/assets/curso/tema2-3-ico.svg', alt='Imagen decorativa') 
            .col-md-10
              p La información sobre los equipos de Desarrollo Curricular para los programas en modalidad virtual o a distancia se puede ampliar según lo establecido en el documento publicado en CompromISO GFPI-AN-006 Anexo conformación equipos técnico – pedagógicos y líneas de producción  (
                strong link http://compromiso.sena.edu.co/documentos/vista/descarga.php?id=1719
                |) Debe acceder con su usuario y contraseña.

    .lista-ul--color.lista-primario
      li.mb-2
        i.fas.fa-chevron-right
        h3 Actividades.

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Los equipos de desarrollo curricular 
          strong elaboran el plan de trabajo que les permitirá dar cuenta del proyecto formativo, 
          | en el caso de la formación titulada, la planeación pedagógica, las guías de aprendizaje y los instrumentos de evaluación, además de los recursos didácticos que apoyarán la ejecución de la formación profesional integral. Cuando los programas sean virtuales, el equipo contará con el acompañamiento de un diseñador instruccional para la virtualización de los contenidos. 
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2-3-img2.png', alt='Texto que describa la imagen') 


</template>

<script>
export default {
  name: 'Tema2',
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
