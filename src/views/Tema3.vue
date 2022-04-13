<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Principios de cartografía y geodesia
    .row.mb-5.align-items-center.g-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/temas/28.png')
      .col-lg-6(data-aos='fade-left')
        .cajon-b.color-primario.abajo-derecha.text-regular.p-3.mb-5
          h2.h2.mb-2 Teniendo en cuenta que los Sistemas de Información Geográfica SIG tienen una fuerte base espacial o geográfica, es necesario conocer algunos elementos básicos sobre cartografía y geodesia. 
    .contenedor-verde.p-5.mb-5
      .row.justify-content-center
        .col-xl-5
          .tarjeta.tarjeta-middle-text
            img(src='@/assets/curso/temas/29.jpg')
            .tarjeta-middle-text__content.p-4
              h5 Cartografía
              p Es la ciencia que estudia distintos sistemas o métodos para representar sobre un plano una parte o la totalidad de la superficie de la tierra, de forma que las deformaciones que se producen sean conocidas y se mantengan dentro de ciertos límites o condiciones que dependen de las características que en cada caso se pidan a la representación.
        .col-xl-5
          .tarjeta.tarjeta-middle-text
            img(src='@/assets/curso/temas/30.jpg')
            .tarjeta-middle-text__content.p-4
              h5 Geodesia
              p Es la ciencia que se encarga del estudio de la forma y las dimensiones de la tierra, considerando su orientación y posición relativa dentro del espacio. 
    p.mb-5 A continuación, se desglosarán algunos términos y conceptos claves en el entendimiento de estas ciencias. 
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Geoide y elipsoide
    .row.mb-5.justify-content-center
      .col-lg-10
        .contenedor-rojo.p-4 
          img(src="@/assets/curso/temas/31.svg").mb-4
          .row.justify-content-end
            .col-xl-8
              p.pe-4.mb-0
                b Para representar la forma de la tierra, se utilizan figuras geométricas que se aproximan a su realidad. Tradicionalmente, se dice que la tierra tiene una forma esférica, pero bien se sabe que la superficie de la tierra es irregular, presenta valles, mesetas, picos, entre otras figuras irregulares, lo cual hace que se aleje demasiado de esa forma tan perfecta que se ha idealizado. 
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-start.mb-4
          .col-6: img(src='@/assets/curso/temas/32.png', alt='Texto que describa la imagen' style='width: 236px')
          
        h5 Geoide
        p Los modelos geoides utilizan el nivel medio del mar para proyectar una representación más completa de la forma de la superficie de la tierra, prolongan el nivel de los mares por debajo de los continentes obteniendo una superficie equipotencial.  
          br
          br
          |La figura del geoide es la que se ha adoptado como la forma real de la tierra, pero, por ser irregular, presenta inconvenientes a la hora de representarla como superficie de referencia para realización de mediciones y proyecciones cartográficas.

      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-start.mb-4
          .col-8: img(src='@/assets/curso/temas/33.png', alt='Texto que describa la imagen' style='width: 333px height: 257px')
          
        h5 Elipsoide
        p Con el propósito de poder realizar mediciones, los científicos han utilizado una figura geométrica regular que se asemeja un poco más a la forma de la tierra, teniendo en cuenta el achatamiento que se presenta debido a la velocidad de rotación del planeta; esta figura geométrica se define como ELIPSOIDE y corresponde a una esfera achatada en los polos, por así nombrarlos, y la cual tiene unas medidas definidas, como son sus semiejes mayor y menor, y un factor de aplastamiento.
    .row.mb-5.justify-content-center
      .col-lg-8
        .cajon.color-acento-botones.bg--4.p-4.mb-4
          img(src='@/assets/curso/temas/34.svg' style='width: 42px').m-auto.mb-4
          p.text-center Dependiendo de la ubicación de cada país, se ha adoptado un elipsoide de referencia que se ajuste mejor y permita una mejor modelación del territorio. Colombia, actualmente, maneja el elipsoide GRS 1980 para la referencia espacial de su cartografía. 
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span Elipsoides y parámetros característicos
    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-primario.mb-5 
          table.table-border.text-center
            caption Nota. Tomada de Olaya (s. f.).
            thead
              tr.head-border.h4
                th.bg-table Elipsoide
                th.bg-white Semieje mayor
                th.bg-white Semieje menor
                th.bg-white \(\frac{1}{f}\)
            tbody
              tr
                td.bg-table.h5 Australian National
                td 6.378.160.000
                td 6.356.774.719
                td 298.250.000
              tr
                td.bg-table.h5 Bessel 1841
                td 6.377.397.155
                td 6.356.078.963
                td 299.152.813
              tr
                td.bg-table.h5 Clarke 1866
                td 6.378.206.400
                td 6.356.583.800
                td 294.978.698
              tr
                td.bg-table.h5 Clarke 1880 
                td 6.378.249.145
                td 6.356.514.870
                td 293.465.000
              tr
                td.bg-table.h5 Everest 1956
                td 6.377.301.243
                td 6.356.100.228
                td 300.801.700
              tr
                td.bg-table.h5 Fischer 1968
                td 6.378.150.000
                td 6.356.768.337
                td 298.300.000
              tr
                td.bg-table.h5 GRS 1980 
                td 6.378.137.000
                td 6.356.752.000
                td 298.257.222
              tr
                td.bg-table.h5 International 1924 (Hayford)
                td 6.378.388.000
                td 6.356.911.946
                td 297.000.000
              tr
                td.bg-table.h5 SGS 85
                td 6.378.136.000
                td 6.356.751.302
                td 298.257.000
              tr
                td.bg-table.h5 South American 1969
                td 6.378.160.000
                td 6.356.774.719
                td 298.250.000
              tr
                td.bg-table.h5 WGS 72
                td 6.378.135.000
                td 6.356.750.520
                td 298.260.000
              tr
                td.bg-table.h5 WGS 84
                td 6.378.137.000
                td 6.356.752.314
                td 298.257.224
    .row.mb-5.align-items-center.g-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/temas/35.png')
      .col-lg-6(data-aos='fade-left')
        p Modelar el planeta tierra como un elipsoide, en lugar de una esfera, <b>nos da una comprensión más precisa de su forma</b>, aunque sigue siendo completamente regular, desconociendo las formas del relieve; es así como, para obtener una imagen más precisa, se debe utilizar un modelo GEOIDE.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  <em>Datum</em> geodésico
    p.mb-5 El <em>datum</em> geodésico es un sistema de referencia espacial que describe la forma y el tamaño de la tierra y establece un origen para los sistemas de coordenadas; existen dos tipos de ;<em>Datum</em>, los horizontales y los verticales.  
    .row.mb-5
      .col-lg-6
        .tarjeta.tarjeta-modal.p-5.h-100
          .tarjeta-modal__boton(@click="modal1 = true")
            img(src='@/assets/curso/temas/36.svg' style='width: 158px').m-auto.mb-5
          .text-center
            p El <em>datum</em> horizontal oficial, definido para el país por el Instituto Geográfico Agustín Codazzi IGAC, mediante la Resolución 085 de 2005, se conoce como Marco Geocéntrico Nacional de Referencia MAGNA – SIRGAS, y tiene los siguientes parámetros.
      .col-lg-6
        .tarjeta.tarjeta-modal.p-5.h-100
          .tarjeta-modal__boton(@click="modal2 = true")
            img(src='@/assets/curso/temas/37.svg' style='width: 158px').m-auto.mb-5
          .text-center
            p El sistema de referencia o <em>datum</em> vertical del país está referido al nivel medio del mar, definido por el mareógrafo de Buenaventura, y sirve como referencia para definir la altitud o altura respecto al nivel medio del mar de todos los elementos geográficos que se encuentran en el país.
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-3.mb-4.mb-md-0: img(src='@/assets/curso/temas/39.svg')
        .col-md-9.mb-4.mb-md-0
          h4.text-center
          .row.g-0
            .col-3
              p.fw-bold Unidad angular:
                br
                br
                | <em>Datum</em> geodésico:
                br
                br

                | Elipsoide:
                br
                br

                | Semieje mayor:
                br
                br

                | Semieje menor:
                br
                br

                | Aplanamiento inverso:
                br
                br

                | Código EPSG:

            .col-6
              p 0,017453292519943299 grados decimales
                br
                br
                | MAGNA_SIRGAS
                br
                br

                | GRS 1980
                br
                br

                | 6378137 m
                br
                br

                | 6356752,314 m
                br
                br

                | 298,257222
                br
                br

                | 4686

          
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center.justify-content-center
        .col-md-6.mb-4.mb-md-0: img(src='@/assets/curso/temas/38.svg')
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Sistemas de coordenadas utilizados en Colombia
    p.mb-5 La información geográfica del país se base en dos sistemas de coordenadas, las geográficas o elipsoidales, que se referencian con elipsoide GRS 1980 y están dadas en medidas angulares (grados – minutos – segundos) correspondientes a longitud y latitud; y las planas o proyectadas, las cuales se basan en el sistema de proyección <em>Gauss_Krüger</em> y dependen del origen según su localización geográfica en el territorio nacional. En el siguiente recurso, se podrá identificar en detalle el sistema de coordenadas utilizado en Colombia.
    .video_bg.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/BSjcyo8cNxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
    modal2: false,
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

<style lang="sass">
.tarjeta-middle-text
  position: relative
  overflow: hidden
  img
    width: 100%
  &:hover
    .tarjeta-middle-text__content
      bottom: 0
      p
        opacity: 1
  .tarjeta-middle-text__content
    transition: bottom  0.5s ease-in-out
    position: absolute
    left: 0
    bottom: -48%
    min-height: 60%
    width: 100%
    background-color: rgba(246, 223, 222, 0.9)
    border-radius: 20px
    p
      opacity: 0
      transition: opacity 0.5s ease-in-out
.contenedor-verde
  background-color: #F4F7DC
.contenedor-rojo.p-4
  position: relative
  background-color: #FCE2DF
  img
    position: absolute
    top: -30%
    left: 3%
    width: 280px
  @media (max-width: $bp-max-lg)
    img
      position: relative
      margin: 0 auto
.bg--4
  background-color: #FCE2DF !important
.table-border
  border-top: 3px solid #33BC76 !important
.head-border
  border-top: 20px solid #FF615B !important
.bg-table
  background-color: #FCEFE0 !important
.tarjeta-modal
  border: 1px solid #F0AD65
  background-color: #FCEFE0
.tarjeta-modal__boton
  cursor: pointer
.modal-a__content
  background-color: #ABE8C7
</style>
