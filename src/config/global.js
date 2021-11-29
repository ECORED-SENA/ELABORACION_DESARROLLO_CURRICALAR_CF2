export default {
  global: {
    componenteFormativo: 'Proyecto formativo',
    descripcionCurso:
      'A través del desarrollo de este componente, abordará elementos para orientar a los equipos de desarrollo curricular, la formulación de un proyecto formativo para programas de formación titulada desde el punto de vista conceptual y procedimental, de manera que ellos sean pretextos pedagógicos y didácticos para llevar a cabo los procesos de formación en competencias de manera integral. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Guía de desarrollo curricular',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Desarrollo curricular',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Procedimiento',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Alcance',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Equipo de desarrollo curricular',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Proyecto de formación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Naturaleza',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Componentes',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Carrera, M. (2007). Marco conceptual y pedagógico para la formación por proyectos en el SENA. Servicio Nacional de Aprendizaje SENA.',
    },
    {
      referencia:
        'López, M., Ramos, E. y Malagón, M. (2007). El aprendizaje por proyectos en el SENA: el caso del Centro de la Construcción del SENA, Regional Valle del Cauca. SENA. ',
      link: 'https://repositorio.sena.edu.co/handle/11404/6016',
    },
    {
      referencia:
        'Martí, J., Heydrich, M., Rojas, M. y Hernández, A. (2010). Aprendizaje basado en proyectos: Una experiencia de innovación docente. REVISTA Universidad EAFIT, 46(158), p. 11-21.',
    },
    {
      referencia: 'SENA. (1985). Unidad Técnica. Publicaciones SENA.',
    },
    {
      referencia:
        'SENA. (2020). Guía de Desarrollo Curricular. Publicaciones SENA.',
    },
    {
      referencia:
        'Villar, S. (2013). Aprendizaje basado en proyectos. Universidad de Zaragoza.',
    },
  ],
  glosario: [
    {
      termino: 'Desarrollo curricular',
      significado:
        'Procedimiento mediante el cual se planea, diseña y ejecuta la ruta de aprendizaje de cada aprendiz, mediante proyectos formativos y planeación pedagógica que contienen actividades de aprendizaje, y aplicación de técnicas didácticas activas que permiten desarrollar sus competencias con ritmos de aprendizaje personalizados.',
    },
    {
      termino: 'Proyecto formativo',
      significado:
        'El proyecto es un instrumento de gestión que prevé y organiza acciones de planeación técnico-pedagógicas y de administración (SENA, 1985).',
    },
    {
      termino: 'Recurso didáctico',
      significado:
        'Es un instrumento que se elabora con una finalidad educativa.',
    },
  ],
  complementario: [
    {
      texto:
        'Ley 119 de 1994. [Congreso de Colombia]. Por la cual se reestructura el Servicio Nacional de Aprendizaje, SENA, se deroga el Decreto 2149 de 1992 y se dictan otras disposiciones.',
      tipo: 'PDF ',
      descarga: '/downloads/Ley_119_de_1994.pdf',
    },
    {
      texto:
        'Decreto 249 de 2004. [Congreso de Colombia]. Por el cual se modifica la estructura del Servicio Nacional de Aprendizaje, SENA.',
      tipo: 'PDF',
      descarga: '/downloads/Decreto_249_de_2004.pdf',
    },
    {
      texto:
        'Decreto 1426 de 1998. [Departamento Administrativo de la función pública]. Por el cual se establece el sistema de nomenclatura, clasificación y remuneración de los empleos públicos del Servicio Nacional de Aprendizaje, SENA.',
      tipo: 'PDF',
      descarga: '/downloads/Decreto_1426_de_1998.pdf',
    },
    {
      texto:
        'Acuerdo 0012 de 1985. [Consejo Directivo del SENA]. Por medio del cual se establecen los lineamientos fundamentales de la política Técnico-Pedagógica del SENA y se fijan las directrices para su gestión con miras a lograr y conservar la Unidad Técnica en la Entidad.',
      tipo: 'PDF',
      descarga: '/downloads/Acuerd_ 0012_de_1985.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Alexandra Hoyos Figueroa',
        cargo: 'Profesional de diseño y desarrollo curricular',
        centro:
          'Centro para el Desarrollo de Hábitat y la Construcción <br>Regional',
      },
      {
        nombre: 'Hernán Darío Córdoba Escobar ',
        cargo: 'Instructor',
        centro:
          'Centro para el Desarrollo de Hábitat y la Construcció <br>Regional',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial <br>Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja <br>Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
