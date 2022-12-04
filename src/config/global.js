export default {
  global: {
    componenteFormativo:
      'Planificación de actividades para el mantenimiento de la infraestructura tecnológica',
    descripcionCurso:
      'A través de este componente formativo se conocerá la importancia de un centro de datos en una empresa y la gestión administrativa necesaria para su funcionamiento. Además de la planificación de actividades para el adecuado mantenimiento de la infraestructura de las tecnologías de la información. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/img-banner-principal2.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/img-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/img-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/img-decorativo-3.png'),
      },
    ],
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
        titulo: 'Esquema organizativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Infraestructura tecnológica',
            hash: 'infraestructura-tecnologica',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Red de datos',
            hash: 'red-de-datos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Modelos de referencia',
            hash: 'modelos-de-referencia',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Centros de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Mantenimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos',
            hash: 'tipos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Protocolo de mantenimiento',
            hash: 'protocolo-de-mantenimiento',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Normas y estándares de los <em>data Center</em>',
            hash: 'normas-y-estandares-de-los-data-center',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Redes convergentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Modelo de red de convergencia',
            hash: 'modelo-de-red-de-convergencia',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Características de la arquitectura',
            hash: 'caracteristicas-de-la-arquitectura',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Sistema de telefonía',
            hash: 'sistema-de-telefonia',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Características',
            hash: 'caracteristicas',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Informática forense',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema:
        'Guía para la gestión y clasificación de incidentes de seguridad de la información',
      referencia:
        'MinTIC. (2016). <em>Guía para la gestión y clasificación de incidentes de seguridad de la información.</em>',
      tipo: 'Guía',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G21_Gestion_Incidentes.pdf',
    },
    {
      tema: 'Licitación 132011 Procuraduría General de la Nación.',
      referencia:
        'Procuraduría general de la nación. <em>Anexo Licitación.</em>',
      tipo: 'PDF',
      link:
        'https://docs.google.com/document/d/1rvTl923YKMefGtAy-mtH2-EPm4j6_cZI/edit?usp=share_link&ouid=117119019426553866975&rtpof=true&sd=true',
    },
    {
      tema: 'Formato lista de chequeo alistamiento de equipos de cómputo ICBF',
      referencia:
        'Instituto Colombiano de Bienestar Familiar ICBF. (2018).<em>Formato lista de chequeo alistamiento de equipos de cómputo ICBF.</em>',
      tipo: 'Formato',
      link:
        'https://www.icbf.gov.co/el-instituto/sistema-integrado-de-gestion/formato-lista-de-chequeo-alistamiento-de-equipos-de',
    },
    {
      tema: 'Estándares Normas Guías y esas ensaladas en un Data Center.',
      referencia:
        'Teksar Labs (2020). <em>Estándares Normas Guías y esas ensaladas en un Data Center.</em>',
      tipo: 'Video',
      link: 'https://youtu.be/m9r73opxikg',
    },
  ],
  glosario: [
    {
      termino: '<em>Backup</em>',
      significado:
        'copia de respaldo de los datos, se puede realizar en el disco duro o en un dispositivo externo, también en la nube. ',
    },
    {
      termino: '<em>Cloud</em>',
      significado:
        'hace referencia a nube, Internet y todos los servicios que brinda. ',
    },
    {
      termino: 'COBIT 2019',
      significado:
        '<em>Control Objectives for Information and Related Technology.</em>',
    },
    {
      termino: 'Contingencia',
      significado:
        'equipo de repuesto que reemplaza y suple las necesidades básicas a la hora de presentarse un incidente.',
    },
    {
      termino: 'Data center',
      significado:
        'centro de datos. Lugar que administra, gestiona y controla todos los recursos de la red tecnológica, además provee los servicios para el funcionamiento de los sistemas de información en una organización.',
    },
    {
      termino: 'IP',
      significado: '<em>Internet Protocol.</em>',
    },
    {
      termino: 'ITIL',
      significado: '<em>Information Technology Infrastructure Library.</em>',
    },
    {
      termino: '<em>Jitter</em>',
      significado:
        'mide las variaciones al realizar una prueba de red a través del método PING, si su valor es alto indica que se producen interrupciones en la conexión. A menor <em>jitter</em>, mejor red.',
    },
    {
      termino: '<em>Ticket</em>',
      significado:
        'según las buenas prácticas internacionales para prestar Servicio TI,un ticket corresponde a una solicitud hecha por un usuario a través de un sistema para solicitar soporte sobre algún componente de la infraestructura TI.',
    },
    {
      termino: 'UPS',
      significado: '<em>Uninterruptible Power Supply.</em>',
    },
  ],
  referencias: [
    {
      referencia:
        'Avgerinou, M. et al. (2017). Trends in Data Center Energy Consumption under the European Code of Conduct for Data Center Energy Efficiency. <em>Energies</em>, (10), 14-70.',
      link: 'https://www.mdpi.com/1996-1073/10/10/1470/htm',
    },
    {
      referencia:
        'Baud, J. (2020). ITIL® 4 : Entender el enfoque y adoptar las buenas prácticas (DataPro). Ediciones ENI.',
      link: '',
    },
    {
      referencia:
        'Cabrera Duffaut, A., & Astudillo, C. (2019). Políticas de gestión de seguridad de la información, fundamentadas en la norma ISO/IEC 27001, centro de datos diseñado con el estándar ANSI/TIA 942. <em>Dominio De Las Ciencias</em>, (5), 132-158. ',
      link:
        'https://www.researchgate.net/publication/335507746_Pol.iticas_de_gestion_de_seguridad_de_la_informacion_fundamentadas_en_la_norma_ISOIEC_27001_centro_de_datos_disenado_con_el_estandar_ANSITIA_942',
    },
    {
      referencia:
        'J. J. K. Bustamante-Riaño. (2020). Avances de la informática forense en Colombia en los últimos cuatro años.<em> Revista Ingeniería, Investigación y Desarrollo</em>, (20), 69-78.',
      link:
        'https://revistas.uptc.edu.co/index.php/ingenieria_sogamoso/article/view/13384/10880',
    },
    {
      referencia:
        'Nieto Paredes, L. D., & Palacios García, J. R. (2018). Propuesta de implementación de un modelo de gestión para el centro de procesamiento de datos perteneciente a la carrera de sistemas de la Universidad Politécnica Salesiana campus sur. [Tesis de grado, Universidad Politécnica Salesiana. Repositorio Institucional de la Universidad Politécnica Salesiana.',
      link:
        'https://dspace.ups.edu.ec/bitstream/123456789/15917/1/UPS-ST003694.pdf',
    },
    {
      referencia:
        '<em>Païola, P. (2021). Microsoft Azure: Gestione su Sistema de Información en la Nube (Recursos Informáticos).</em> Ediciones ENI.',
      link: '',
    },
    {
      referencia:
        'Suarez-Cruz, I. et al. (2019). Unidades de climatización para centro de datos/Climate control units for Data Center. <em>Revista Vínculos,</em> (16), 128-147.',
      link:
        'https://revistas.udistrital.edu.co/index.php/vinculos/article/view/15273/15130',
    },
    {
      referencia:
        'Vega Luna, J. et al. (2019). <em>Sistema de monitorización de puertas y ventanas de un centro de datos con IoT.</em> Ingenius, Revista de Ciencia y Tecnología (22), 72-79.',
      link: '',
    },
    {
      referencia:
        'Wahlroos, M. et al. (2017). Utilizing data center waste heat in district heating – Impacts on energy efficiency and prospects for low-temperature district heating networks. <em> Energy (Oxford)</em>, (140), 1228-1238.',
      link: 'https://doi.org/10.1016/j.energy.2017.08.078',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
