export default {
  global: {
    componenteFormativo: 'Diseño e implementación diagnóstica',
    descripcionCurso:
      'En este componente el aprendiz focaliza su aprendizaje en el diagnóstico empresarial como herramienta para el desarrollo y competitividad, el diseño del plan de trabajo a realizar frente a sus diferentes fases, factores o aspectos a indagar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
        titulo: 'Diagnóstico empresarial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Aspectos o factores competitivos a medir',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Factores y variables endógenos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Factores y variables exógenos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ámbito de participación: áreas de la empresa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Métodos y técnicas diagnósticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Levantamiento de información y participación diagnóstica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Líder o consultor de diagnóstico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Ciclo del diagnóstico empresarial',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Asesoría empresarial y coaching ejecutivo – JDELCA. (2020). <em>¿Cómo iniciar el proceso del diagnóstico empresarial en mi organización? Fase I</em> [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=xbS2KO92BZU',
    },
    {
      referencia:
        'ATA -Autónomos- Federación Nacional de Asociaciones de Trabajadores Autónomos. (2021). Guía. Diagnóstico empresarial en tiempos de Covid-19. ',
      link:
        'https://ata.es/wp-content/uploads/2021/05/ATA-guia-diagnostico-empresarial-en-tiempos-de-covid-murcia-V2.pdf',
    },
    {
      referencia:
        'Enred Consultoría, S.L. (2011). <em>Metodología para la elaboración de diagnóstico y plan para la igualdad en empresas y entidades privadas</em>. EMAKUNDE - Instituto Vasco de la Mujer. ',
      link:
        'https://www.emakunde.euskadi.eus/u72-igualorg/es/contenidos/informacion/ig_org_enlaces/es_material/adjuntos/metodologia-definitiva-web.pdf',
    },
    {
      referencia:
        'Escobar, V. (2009). Caso de estudio Organización empresarial. ',
      link:
        'https://www.monografias.com/trabajos-pdf2/organizacion-empresarial/organizacion-empresarial.pdf',
    },
    {
      referencia:
        'Hernández Sampieri, R. (2016). Metodología de la investigación. ',
      link:
        'http://m3todologia1.blogspot.com/2016/02/instrumentos-de-recoleccion-de-datos.html',
    },
    {
      referencia:
        'Laurence, P. (2014). <em>Diagnóstico organizacional</em>. Centro Regional de Ayuda Técnica.',
      link: '',
    },
    {
      referencia:
        'Meza, A. (2020). <em>El diagnóstico organizacional: elementos, métodos y técnicas</em>. ',
      link:
        'https://www.infosol.com.mx/miespacio/el-diagnostico-organizacional-elementos-metodos-y-tecnicas/',
    },
    {
      referencia:
        'Portugal, V. (s.f.). <em>Diagnóstico empresarial</em>. Fundación Universitaria del Área Andina. ',
      link: '',
    },
    {
      referencia:
        'Rodríguez, D. (2012). <em>Diagnóstico organizacional</em> (4ta Edición ed.). Alfa Omega Grupo Editor. ',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'Se puede identificar como la probabilidad de que un aspecto crítico, muy relacionado con la actividad de la empresa, la afecte sin poder evitarlo, solo puede mitigar o reducir el impacto.',
    },
    {
      termino: 'Captura de información',
      significado:
        'Es la acción de registrar la información que se desea analizar a través de un instrumento como pueden ser formularios, cuestionarios o entrevistas grabadas, etc.',
    },
    {
      termino: 'Conclusiones diagnósticas',
      significado:
        'Son el conjunto de aspectos más relevantes para la empresa, que son críticos por su nivel de impacto. Pueden ser aspectos para mejorar o consolidar, pueden por ende estar en condición de desventaja o de ventaja competitiva, y sobre las cuales se adelantarán acciones o vigilancia y control.',
    },
    {
      termino: 'CONPES',
      significado: ' Consejo Nacional de Política Económica y Social.',
    },
    {
      termino: 'Consultor',
      significado:
        'Es el experto en diseño y coordinación de actividades diagnósticas en empresas, que define el mejor protocolo para la empresa, con el fin de facilitar la determinación del estado actual de la empresa en su contexto de operación.',
    },
    {
      termino: 'Cronograma',
      significado:
        'En diagnóstico, se refiere a la determinación en función del tiempo, de las actividades a realizar para capturar la información, como es la configuración de equipos de trabajo, diseño de instrumentos, etc.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'Son aspectos y hábitos comunes en las personas de la empresa, que comparten con los compañeros, tal como puede ser el cumplimiento, la calidad, las buenas maneras, lo que se defiende y cumple sin necesidad de normatividad, a pesar de que existe.',
    },
    {
      termino: 'Debilidad',
      significado:
        'Es el comportamiento que tiene una variable controlable dentro de un factor, que hace que los impactos para la empresa sean desfavorables, por ejemplo, retrasos en las entregas.',
    },
    {
      termino: 'Diagnóstico empresarial',
      significado:
        'Es un proceso de análisis integral de información de los diferentes aspectos o factores en los cuales está inmerso el ejercicio empresarial, con el fin de identificar el estado actual de competitividad, los aspectos a mejorar y las oportunidades por las que debe optar para un mejor futuro.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Técnica de aplicación de un cuestionario a una muestra de personas o de manera general o censal a todas las personas. Proporciona información sobre opiniones, actitudes y comportamientos de los empleados, clientes, proveedores, etc.',
    },
    {
      termino: 'Estadísticas',
      significado:
        'Son conjuntos de información agregada por tipo de variable o factor en la empresa, que se consolidan para efectos del análisis y la toma de decisiones',
    },
    {
      termino: 'Factores',
      significado:
        'Conjunto de variables o aspectos que se agrupan por su familiaridad, facilitando su análisis, por ejemplo, factores económicos, factores de comercialización y ventas.',
    },
    {
      termino: 'Factores críticos',
      significado:
        'Son los aspectos o variables que inciden en la empresa de manera significativa, se denominan críticos porque repercuten en el estado actual de la empresa. No siempre son los mismos, pueden cambiar con el tiempo.',
    },
    {
      termino: '<em>Focus group</em>',
      significado:
        'Metodología de sensibilización, indagación o investigación, que busca obtener información descriptiva o cualitativa, donde se reúne un conjunto de participantes para adelantar una entrevista o una argumentación temática, que busca registrar dichos argumentos u opiniones sobre un proceso, productos, servicios, resultados pasados, etc.',
    },
    {
      termino: 'Metodología',
      significado:
        'Para procesos de diagnóstico corresponde a definir las diferentes formas de capturar la información que se utilizará para el análisis.',
    },
    {
      termino: 'Objetivos',
      significado:
        'Propósitos de logros que fija la empresa a partir de su condición actual, los cuales pueden ser para crecer, vender, pero a su vez pueden ser mitigar o erradicar una debilidad, ya que es plenamente controlable.',
    },
    {
      termino: 'Oportunidad',
      significado:
        'Son las posibilidades que se le presentan a la empresa de poder actuar en condiciones de favorabilidad o beneficio, desarrollo.',
    },
    {
      termino: 'Participación diagnóstica',
      significado:
        'Es el ejercicio de interpretación de la información capturada, por parte de equipos de trabajo diagnóstico, con el fin de identificar el estado actual de la variable o factor, si representa condición de relevancia o alto impacto en la operación de la empresa.',
    },
    {
      termino: 'Preguntas abiertas',
      significado:
        'Son las maneras que se tiene para obtener respuestas contextualizadas libremente por parte del empleado o encuestado, además permiten plantear una temática a la reflexión cuando la temática lo exija.',
    },
    {
      termino: 'Preguntas cerradas',
      significado:
        'Son las preguntas que se determinan dado que se conocen las alternativas de respuesta, facilitan la tabulación y el conteo.',
    },
    {
      termino: 'Registro',
      significado:
        'Es la captura de la información suministrada por los entrevistados y encuestados, que aporta un sentido de realidad, cumplimiento para quien lo expone, ya sea favorable o desfavorable.',
    },
  ],
  complementario: [
    {
      texto:
        'SENA. (2022). <em>Clasificación de clientes - Participación y análisis de la cartera de clientes en los procesos diagnósticos</em>.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo1.pdf',
    },
    {
      texto:
        'Asesoría empresarial y coaching ejecutivo – JDELCA. (2020). <em>¿Cómo iniciar el proceso del diagnóstico empresarial en mi organización? Fase I</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xbS2KO92BZU',
    },
    {
      texto:
        'Enciso, J. (2012). <em>Guía para el diagnóstico empresarial</em>.',
      tipo: 'PDF',
      link:
        'https://www.academia.edu/18588124/La_Guia_de_Diagnostico_Empresarial',
    },
    {
      texto:
        'Reyes y Martínez. (2019). <em>Instrumento de diagnóstico organizacional (W-R&M)</em>.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo3.pdf',
    },
    {
      texto:
        'Documento CONPES. (2008). <em>Política nacional de competitividad y productividad</em>.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo2.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección general',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Fernando Riaño',
        cargo: 'Experto temático',
        centro: 'Centro de Diseño y Metrología - Regional Bogotá',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Oscar Palito',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
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
