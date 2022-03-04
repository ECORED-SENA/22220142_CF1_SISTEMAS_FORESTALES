<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de Información Geográfica SIG
    .row.mb-5.align-items-center.g-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/temas/10.png')
      .col-lg-6(data-aos='fade-left')
        .cajon-b.color-primario.abajo-derecha.text-regular.p-3.mb-5
          h2.h2.mb-2 Un sistema de información geográfica (SIG) es un sistema que <b>crea, administra, analiza y representa cartográficamente todo tipo de datos.</b>  Saavedra (1992).
        p.mb-0 Un SIG conecta datos a un mapa, integrando datos de ubicación (dónde están las cosas) con todo tipo de información descriptiva (cómo son las cosas ahí). 
          br
          | Esto sirve como base para la representación cartográfica y el análisis que se utiliza en la ciencia y en prácticamente todos los sectores. Un SIG ayuda a los usuarios a comprender los patrones, las relaciones y el contexto geográfico. Entre las ventajas se encuentran la mejora de la comunicación y la eficiencia, así como de la gestión y la toma de decisiones. 
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Definiciones y conceptos básicos
    p.mb-5 Para estructurar un sistema de información geográfica, se requiere de la conjugación de varios componentes, siendo el principal los datos o información, que pueden ser de tipo espacial (mapas, fotografías aéreas, imágenes satelitales, etc.) y atributiva de cada entidad geográfica, la cual se encuentra, por lo general, en bases de datos. Adicionalmente, se requiere de equipos tecnológicos (hardware) y de aplicaciones (software) que permitan el procesamiento y análisis de la información necesaria, dependiendo del tipo de usuario que la requiera, así: 
    .row.mb-5.justify-content-center
      .col-lg-6: img(src='@/assets/curso/temas/9.svg')
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.2 Tipos de objetos y datos espaciales
    .row.mb-5.align-items-center.g-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/temas/11.png')
      .col-lg-6(data-aos='fade-left')
        p.mb-0 Existen diversas maneras de modelar y representar el territorio, pero la forma más comúnmente usada, cuando se trabaja un sistema de información geográfica SIG, es por medio de entidades. Este modelo también se denomina modelo de objetos, y se compone de una descripción y de la ubicación del objeto en el espacio. Se utilizan diferentes figuras geométricas para representar la realidad, puntos para representar objetos puntales, líneas para representar objetos lineales y polígonos para identificar superficies.
          br
          br
          |En la imagen, se puede evidenciar cómo los rodales, que son superficies, se representan mediante polígonos y la vía, que es un elemento lineal, se puede representar mediante una línea. 
          br
          br
          |Para representar la realidad, se emplean elementos geométricos, que validan cada una de las entidades geográficas que se encuentran en un territorio; es así como un río o una vía se puede modelar por líneas, un árbol, por medio de puntos, y una superficie, por medio de polígonos, como se indica en la siguiente línea de tiempo: 
    .row.mb-5
      .col-lg-4
        .tarjeta-up.tarjeta.color-primario.p-5.h-100
          .tarjeta-up__img
            img(src='@/assets/curso/temas/12.jpg' alt='AvatarTop')
          .tarjeta-up__contenido
            img(src='@/assets/curso/temas/13.svg' style='width: 80px').mb-3
            h3 Punto
            p Entidades cuya forma no es considerada relevante o la superficie relativa que ocupan es muy pequeña con relación al espacio.
              br
              br
              |Ejemplos: ciudades, centros comerciales, árboles, postes, centros de salud, etc.
      .col-lg-4
        .tarjeta-up.tarjeta.color-secundario.p-5.h-100
          .tarjeta-up__img
            img(src='@/assets/curso/temas/16.jpg' alt='AvatarTop')
          .tarjeta-up__contenido
            img(src='@/assets/curso/temas/14.svg' style='width: 80px').mb-3
            h3 Líneas
            p Entidades con formas lineales, que por lo general constituyen redes.
              br
              br
              |Ejemplos: Ríos, vías, caminos, líneas de tubería, redes eléctricas, etc
      .col-lg-4
        .tarjeta-up.tarjeta.bg-verde.p-5.h-100
          .tarjeta-up__img
            img(src='@/assets/curso/temas/17.jpg' alt='AvatarTop')
          .tarjeta-up__contenido
            img(src='@/assets/curso/temas/15.svg' style='width: 80px').mb-3
            h3 Polígono
            p Entidades que representan un área o superficie.
              br
              br
              |Ejemplos: regiones, lotes, bosques, manzanas, barrios, etc.
    .row
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/18.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4.text-white
              h4 Ráster: 
              p Corresponde a cualquier tipo de imagen digital representada en mallas o celdas de la cuadrícula, conocidos generalmente como pixeles; dividen el espacio en celdas regulares, donde cada una de ellas representa un único valor.
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/19.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4.text-white
              h4 Vectorial:
              p En este modelo, los datos están basados en la representación vectorial del componente espacial de los datos geográficos. Su representación es mediante puntos, líneas y polígonos.
      .tarejta.bg-rojo.p-5
        #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
          .carousel-inner.px-5
            .carousel-item.active.px-5
              .row.justify-content-center.px-5
                .col-lg-6.mb-3 
                  h4.text-center Vectorial
                  img(src='@/assets/curso/temas/20.png')
                .col-lg-6.mb-3 
                  h4.text-center Ráster
                  img(src='@/assets/curso/temas/21.png')
                .col-lg-12.mb-5
                  .contendor-rojo.p-2
                    h4.text-center.mb-0 Puntos
            .carousel-item.px-5
              .row.justify-content-center.px-5
                .col-lg-6.mb-3 
                  h4.text-center Vectorial
                  img(src='@/assets/curso/temas/22.png')
                .col-lg-6.mb-3 
                  h4.text-center Ráster
                  img(src='@/assets/curso/temas/23.png')
                .col-lg-12.mb-5
                  .contendor-rojo.p-2
                    h4.text-center.mb-0 Líneas
            .carousel-item.px-5
              .row.justify-content-center.px-5
                .col-lg-6.mb-3 
                  h4.text-center Vectorial
                  img(src='@/assets/curso/temas/24.png')
                .col-lg-6.mb-3 
                  h4.text-center Ráster
                  img(src='@/assets/curso/temas/25.png')
                .col-lg-12.mb-5
                  .contendor-rojo.p-2
                    h4.text-center.mb-0 Polígonos
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 <em>Software</em> SIG
    p.mb-5 En el mundo de los sistemas de información geográfica, se encuentra gran variedad de software que cumple con las funciones básicas para la realización de geoprocesos necesarios para el tratamiento de los datos geográficos. 
      br
      br
      |Existen programas de código abierto, o libres, y software de pago. 
    .row.justify-content-center
      .col-lg-8
        .contenedor-verde.p-4
          .row
            .col-lg-6
              .tarjeta.h-100
                .tarjeta-icon-size.h-100
                  .tarjeta-icon-size__icon.p-5
                    img(src='@/assets/curso/temas/26.svg' alt='AvatarTop' style='hight: 106px')
                  .tarjeta-icon-size__content.bg--1.p-4
                    h4 ArcGis de la compañía ESRI
                    p Es el <em>software</em> más popularizado dentro de los ambientes SIG. Existen las versiones de escritorio, Pro, y en línea. Es un software muy versátil, pero es necesario adquirir la licencia para poder trabajar. 
            .col-lg-6
              .tarjeta.h-100
                .tarjeta-icon-size.h-100
                  .tarjeta-icon-size__icon.p-5
                    img(src='@/assets/curso/temas/27.svg' alt='AvatarTop')
                  .tarjeta-icon-size__content.bg--2.p-4
                    h4 <em>Software</em> QGIS
                    p Es un <em>software</em> libre, que está muy a la par del ArcGis, es un programa muy versátil, que presenta una muy buena interfaz de trabajo y, además, cuenta con complementos gratuitos para facilitar los procesos que se realizan con los datos espaciales.
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

<style lang="sass">
.text-regular
  .h2
    font-weight: 400 !important
    font-size: 30px !important
.cajon-b:before
  width: 60% !important
  opacity: 0.25
.abajo-derecha:before
  left: 36% !important
.bg-verde
  background-color: #80DCAB
.tarjeta.color-primario
  p, h3
    color: $color-sistema-texto !important
.bg-rojo
  background-color: #FCEFE0
.contendor-rojo
  background-color: #F9DEC1
.carousel-control-next-icon
  background-image: url(../assets/curso/temas/flecha-derecha.svg)
.carousel-control-prev-icon
  background-image: url(../assets/curso/temas/flecha-izquierda.svg)
button.carousel-control-next, button.carousel-control-prev
  &:hover, &:focus, &:active
    background-color: transparent !important
.tarjeta-icon-size
  height: 500px
  border-radius: 20px
  overflow: hidden
  &__icon
    background-color: #F0AD65
    img
      height: 106px
      margin: 0 auto
      transition: transform 0.3s ease-in-out
  &:hover
    .tarjeta-icon-size__icon
      img
        transform: scale(1.9)
.bg--1
  background-color: #34BD74
.bg--2
  background-color: #C7D851
.contenedor-verde
  background-color: #F4F7DC
</style>
