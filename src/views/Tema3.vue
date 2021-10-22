<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Proyecto de formación

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p El proyecto formativo es el 
          strong pretexto pedagógico y didáctico 
          | que permite traer 
          strong situaciones del mundo del trabajo 
          | susceptibles de ser resueltas en los 
          strong ambientes de aprendizaje virtual y presencial 
          | para el desarrollo de 
          strong competencias 
          | específicas, transversales y básicas. Revise el siguiente material que precisa aspectos relevantes sobre el proyecto formativo y su concepción desde el aprendizaje basado en proyectos.
      .col-md-5(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema3-img.png', alt='Texto que describa la imagen')

    .tarjeta.color-secundario2.p-md-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador


    // 3.1
    #t_3_1.titulo-segundo(data-aos="fade-right")
      .h2 3.1  Naturaleza

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p 
          strong La formulación de proyectos formativos 
          | es responsabilidad de los equipos de desarrollo curricular a partir del conocimiento del sector productivo, el contexto, experiencia profesional y como instructores.
        p Los proyectos formativos enfrentan a los aprendices con problemas que potencialmente encontrarán en el ámbito laboral; a través de darles solución, se adquirirán las competencias que les permitirán insertarse de manera pertinente al trabajo productivo.  En el contexto de la formación profesional integral, el desarrollo de los proyectos formativos, a través de la estrategia “
          strong aprender haciendo
          |”, permite el alcance de los resultados de aprendizaje.   
      .col-md-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-1-img.png', alt='Texto que describa la imagen')
    
    Separador


    // 3.2
    #t_3_2.titulo-segundo(data-aos="fade-right")
      .h2 3.2  Características

    p.mb-4(data-aos="fade") Los proyectos formativos en el SENA 
      strong son una estratégica pedagógica, didáctica y metodológica, 
      | además son un instrumento de administración educativa, pues, a través de ellos, se organizan las acciones de la planeación pedagógica. Revise el siguiente mapa, el cual presenta sus características.

    .titulo-sexto.color-primario(data-aos="fade-down") 
      p.mb-0 <b>Figura 4.</b> Proyecto formativo 
    figure(data-aos="fade-down") 
      img(src='@/assets/curso/tema3-2-figura.svg', alt='Proyecto formativo')

    Separador


    // 3.3
    #t_3_3.titulo-segundo(data-aos="fade-right")
      .h2 3.3  Componentes

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade-down") 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3-3-img.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 De acuerdo con el procedimiento de desarrollo curricular, los equipos conformados para tal fin, a partir del diseño, 
              strong plantean una situación problema en contexto que pueda ser resuelta a través de un proyecto a lo largo de la ejecución de la formación profesional integral, 
              | en colaboración entre aprendices, con la orientación del equipo de instructores.

    p.mb-4(data-aos="fade") El Servicio Nacional de Aprendizaje decidió adoptar los proyectos formativos por fases que permitan articular las actividades a su interior, de manera coherente y armónica, y promover con su ejecución la adquisición de competencias. Las fases son las siguientes: 
      strong búsqueda y análisis de la información, planificación, ejecución de las acciones y evaluación, 
      | tal como se muestra en la siguiente tabla.

    .titulo-sexto.color-secundario(data-aos="fade-down") 
      p.mb-0 <b>Tabla 1.</b> Fases de un proyecto formativo
    .tabla-a.color-primario.mb-5 
      table
        thead
          tr
            th.py-3.text-white 
              h4.mb-0 Fase
            th.py-3.text-white 
              h4.mb-0 ¿En qué consiste?
            th.py-3.text-white 
              h4.mb-0 ¿Por qué?
        tbody
          tr
            td 
              strong Búsqueda y análisis de la información
            td Es el primer encuentro con el problema. 
              br 
              | Los aprendices deben reformularlo o redefinirse. Como procedimiento de madurez de la implementación del AAP, se llegará al momento en que los aprendices formulen sus propios problemas. Se debe recopilar la información básica y necesaria para la ejecución de las actividades del proyecto.
            td Estimula la participación de los estudiantes en la reformulación y solución de un problema, hace que estos se involucren con él.
              br
              | Fomenta la capacidad de buscar y trazar la información.
          tr
            td 
              strong Planeación o Planificación del Proyecto
            td Organización de tareas, tiempos, responsabilidades, recursos, etc. Las responsabilidades recaen en los miembros del equipo, quienes incluso proponen estrategias a seguir.
            td Fomenta la capacidad de planear de un modo autorresponsable el proceso metodológico y de división del trabajo. Se fomentan las competencias sociales relacionadas con el trabajo en equipo y la negociación.
          tr     
            td 
              strong Ejecución o realización/ Autocontrol de la calidad
            td Cada miembro del proyecto realiza su tarea según la planeación o división del trabajo acordada. Supervisión de los resultados parciales. Autocontrol por parte de los propios alumnos. Posibilidad de descubrir ellos mismos posibles fallos y, en caso de ser posible, corregir los fallos detectados. 
              br
              | Supervisión conjunta (instructor, alumnos)
            td Permite viabilizar una actuación autónoma, creativa y responsable en la realidad. Fomenta la competencia social. Construcción de conocimiento tecnológico, técnico y metodológico como producto de la actividad de resolución de un problema.
          tr
            td 
              strong Evaluación
            td Discusión y valoración de los resultados del proyecto. Profundización teórica de los resultados. Evaluación final del proyecto.
            td Potencia el aprender a evaluar su trabajo con las características de calidad definidas. Fomenta la capacidad de autoevaluación reflexiva y crítica.
              br 
              | Permite la valoración de las experiencias de aprendizaje. Tomar conciencia de las interrelaciones entre la teoría especializada y la práctica. 
              br
              | Identifica puntos de vinculación con otros contenidos de aprendizaje.    

    p.mb-4(data-aos="fade") El proyecto formativo debe contener, de manera explícita, el nombre del proyecto, a qué programa de formación responde, el tiempo estimado de ejecución, las palabras clave que lo orientan. Revise su estructura en el siguiente diagrama.

    .titulo-sexto.color-primario(data-aos="fade-down") 
      p.mb-0 <b>Figura 5.</b> Estructura de un proyecto formativo
    figure.mb-5(data-aos="fade-down") 
      img(src='@/assets/curso/tema3-3-figura.svg', alt='Estructura de un proyecto formativo')

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Con el fin de 
          strong promover la ejecución del proyecto formativo en el marco de la formación profesional integral, 
          | se propone enunciar de manera explícita las fases del proyecto (por ejemplo, a partir de seguir el ciclo PHVA de los sistemas integrados de gestión: 
          strong Planear, Hacer, Verificar y Actuar
          |), incluyendo cada uno de los resultados de aprendizaje del diseño curricular y las actividades del proyecto que permitan dar respuesta a los objetivos planteados y, con ello, dar solución al problema planteado. Las actividades del proyecto permitirán desagregarse a través de actividades de aprendizaje y deberán ser coherentes con las fases del proyecto. 
        p A las actividades del proyecto se les asocian las competencias y los resultados de aprendizaje, teniendo en cuenta que se puedan alcanzar con su realización.   
        .cajon.color-secundario.p-4
          p.mb-0 Por último, debe quedar claro quiénes son los responsables de la ejecución del proyecto, los ambientes físicos, especializados y virtuales necesarios, y los materiales requeridos en detalle, de acuerdo con el número de grupos que se abran por año en cada centro de formación. 
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-3-img2.png', alt='Texto que describa la imagen')
    
    p.mb-4(data-aos="fade") Se propone el siguiente esquema para valorar la calidad de un proyecto formativo.

    .titulo-sexto.color-primario(data-aos="fade-down") 
      p.mb-0 <b>Figura 6.</b> Criterios de calidad de un proyecto formativo
    figure.mb-5(data-aos="fade-down") 
      img(src='@/assets/curso/tema3-3-figura6.svg', alt='Criterios de calidad de un proyecto formativo')

    .row.justify-content-center.mb-5
      .col-md-8
        .tarjeta.color-degrade.p-3
          .row.justify-content-around.align-items-center.px-md-5
            .col-3.col-sm-2.col-lg-2
              img.px-md-1(src="@/assets/curso/tema3-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 Síntesis
                  p.mb-0.text-small Ver gráfica.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/CF2_Proyecto-formativo_Sintesis-PDF.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download



</template>

<script>
export default {
  name: 'Tema3',
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
