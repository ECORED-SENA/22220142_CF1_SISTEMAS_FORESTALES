export default {
  global: {
    componenteFormativo:
      'Fundamentos de SIG aplicados en Sistemas Forestales y/o Agroecológicos',
    descripcionCurso:
      'En este contenido, se desarrollan aspectos básicos sobre sistemas de información geográfica y planes de ordenación de sistemas forestales y agroecológicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
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
        titulo:
          'Componente espacial del Plan de Manejo Forestal y Agroecológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Localización y accesibilidad al predio	',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Características biofísicas de la unidad de manejo forestal y/o agroecológica	',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistemas de Información Geográfica SIG	',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definiciones y conceptos básicos	',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de objetos y datos espaciales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<em>Software</em> SIG',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Principios de cartografía y geodesia	',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Geoide y elipsoide	',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Datum geodésico	',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Sistemas de coordenadas utilizados en Colombia',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Fuentes de información geográfica',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
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
        'Corporación Autónoma Regional de las Cuencas de los Ríos Negro y Nare [Cornare]. (2015). Términos de referencia elaboración de plan aprovechamiento y manejo forestal de bosque natural único.',
      link:
        'https://www.cornare.gov.co/Tramites-Ambientales/TR/Terminos_Referencia_Aprovechamiento_Forestal_BN_Unico.pdf',
    },
    {
      referencia:
        'DJI. (2021). Geoide vs Elipsoide: ¿Cuál es la diferencia y por qué es importante?',
      link:
        'https://djiarsmadrid.com/es/blog/dji-news/geoide-vs-elipsoide-cual-es-la-diferencia-y-por-que-es-importante',
    },
    {
      referencia:
        'Environmental Systems Research Institute [ESRI]. (s.f.). ¿Qué son los SIG?',
      link: 'https://www.esri.com/es-es/what-is-gis/overview',
    },
    {
      referencia:
        'Environmental Systems Research Institute [ESRI]. (2016). Cómo se representan las entidades en un ráster. ArcMap. ',
      link:
        'https://desktop.arcgis.com/es/arcmap/10.3/manage-data/raster-and-images/how-features-are-represented-in-a-raster.htm',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi [IGAC]. (s. f.). Sistema de Proyección Cartográfico para Colombia. Origen Nacional.',
      link: 'https://origen.igac.gov.co/',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi [IGAC]. (2016). Especificaciones técnicas. Cartografía Básica Digital.',
      link:
        'https://www.igac.gov.co/sites/igac.gov.co/files/documento_especificaciones_tecnicas_cartografia_basicas.pdf',
    },
    {
      referencia:
        'Muñoz, A. (s.f.). Geodesia y cartografía. Fundamentos de los sistemas de información geográfica. Universitat Oberta de Catalunya.',
      link:
        'https://www.studocu.com/pe/document/universidad-nacional-de-ucayali/topografia/munoz-geodesia-y-cartografia-fundamentos-de-los-sistemas-de-informacion-geografica/13507258',
    },
    {
      referencia:
        'Olaya, V. (s. f.). Sistemas de Información Geográfica. Fundamentos cartográficos y geodésicos.',
      link:
        'https://volaya.github.io/libro-sig/chapters/Fundamentos_cartograficos.html',
    },
    {
      referencia:
        'Saavedra, N. (1992). Los sistemas de información geográfica (SIG) una herramienta poderosa para la toma de decisiones. Ingeniería e Investigación, (28), p. 31-40.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Agroecología',
      significado:
        'Enfoque holístico e integrado que aplica simultáneamente conceptos y principios ecológicos y sociales al diseño y la gestión de sistemas agrícolas y alimentarios sostenibles.',
    },
    {
      termino: 'Coordenadas',
      significado:
        'Par de magnitudes (latitud y longitud) que sirven para determinar la posición de un punto en la superficie de la Tierra.',
    },
    {
      termino: 'Geodesia',
      significado:
        'Parte de la geología que determina, de forma matemática, la figura y magnitud de la Tierra o de gran parte de ella, y se ocupa de construir los mapas correspondientes.',
    },
    {
      termino: 'Geología',
      significado:
        'Ciencia que estudia el origen, formación y evolución de la Tierra, los materiales que la componen y su estructura.',
    },
    {
      termino: 'Geomorfología',
      significado:
        'Es la ciencia que estudia el relieve terrestre: su estructura, origen, historia y dinámica actual.',
    },
    {
      termino: 'Plan de Manejo Forestal',
      significado:
        'Es la formulación y descripción de los sistemas y labores silviculturales a aplicar en el bosque sujeto a aprovechamiento, con el objeto de asegurar su sostenibilidad, presentado por el interesado en realizar aprovechamientos forestales persistentes.',
    },
    {
      termino: 'Topografía',
      significado:
        'Conjunto de características que presenta la superficie o el relieve de un terreno.',
    },
  ],
  complementario: [
    {
      texto:
        'ESRI. (2016). Cómo se representan las entidades en un ráster. ArcMap.',
      tipo: 'Artículo',
      link:
        'https://desktop.arcgis.com/es/arcmap/10.3/manage-data/raster-and-images/how-features-are-represented-in-a-raster.htm',
    },
    {
      texto:
        'Morales, A. (s. f.). Los 10 formatos GIS vectoriales más populares. MappingGIS. ',
      tipo: 'Artículo',
      link:
        'https://mappinggis.com/2013/11/los-formatos-gis-vectoriales-mas-populares/',
    },
    {
      texto: 'Geoambiental. (2018). Geoide y Elipsoide [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=H7jYRhrjd8A',
    },
    {
      texto:
        'Decreto 1076 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible].  Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. ',
      tipo: 'Documento',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=78153',
    },
    {
      texto:
        'Cornare. (2015). Términos de referencia. Elaboración de plan aprovechamiento y manejo forestal de bosque natural único. ',
      tipo: 'Documento',
      link:
        'https://www.cornare.gov.co/Tramites-Ambientales/TR/Terminos_Referencia_Aprovechamiento_Forestal_BN_Unico.pdf',
    },
    {
      texto:
        'UNIGIS Girona. (2017). ¿Qué software y herramientas de SIG utilizamos? ',
      tipo: 'Artículo',
      link: 'https://www.unigis.es/software-sig/',
    },
    {
      texto:
        'Franco, R. (2016). Geoportales y visores geográficos en Colombia. Universidad Distrital Francisco José de Caldas. ',
      tipo: 'Documento',
      link:
        'https://mixdyr.files.wordpress.com/2016/03/rodolfo-franco-geoportales-y-visores-geograficos-en-colombia_v1-61.pdf',
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
      {
        nombre: 'Jorge Eduardo Álava Arévalo',
        cargo: 'nstructor',
        centro:
          'Centro Internacional de Producción Limpia Lope – Regional Nariño',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital ',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima ',
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
        nombre: 'Yuly Andrea Rey Quiñonez',
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
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
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
