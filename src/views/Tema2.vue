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
</style>
