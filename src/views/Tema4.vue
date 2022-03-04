<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Fuentes de información geográfica
    .row.mb-5.align-items-center.g-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/temas/40.png')
      .col-lg-6(data-aos='fade-left')
        p Para la estructuración de un sistema de información geográfica SIG, se requiere de información geográfica o espacial en diversos formatos ráster o vectoriales, que permita construir la base cartográfica del sistema. 
          br
          br
          |Se pueden clasificar las fuentes de información como primarias y secundarias. Las fuentes de datos primarias corresponden a la información que cada usuario puede poseer o que es recolectada directamente en campo mediante dispositivos móviles o cualquier tipo de tecnología, cuya información se carga al software SIG para su procesamiento y análisis. También existe información no geográfica recolectada en formularios o tablas, con la cual se va a constituir la base de datos del SIG.
          br
          br
          |Las fuentes de datos secundarios corresponden a información disponible en bases de datos digitales o analógicas, obtenida a partir de los diferentes sitios web de cada una de las entidades que administran esta información.
    p.mb-5 Con el fin de ampliar los conceptos desarrollados y las fuentes oficiales de consulta, se relacionan los principales geoportales para consulta y descarga de información geográfica a nivel nacional y regional: 
    ImagenInfograficaC.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/41.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

      .tarjeta.color-acento-botones.p-3(x="20%" y="20%" titulo="Sigot Colombia")
        .titulo-icono.d-flex
          img(src='@/assets/curso/temas/42.svg', alt='Texto que describa la imagen' style="width: 39px").ms-3
          h4 Sigot Colombia
          p.mb-5 Contiene insumos para la  planeación y el ordenamiento  territorial del país.
        

</template>

<script>
import ImagenInfograficaC from './ImagenInfograficaC.vue'
export default {
  name: 'Tema4',
  components: {
    ImagenInfograficaC,
  },
  data: () => ({}),
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

<style lang="sass"></style>
