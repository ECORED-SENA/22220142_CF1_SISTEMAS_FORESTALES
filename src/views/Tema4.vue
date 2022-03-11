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
      .tarjeta.bg--red.p-3(x="20%" y="30%" titulo="Sigot Colombia")
        .titulo-icono.d-flex.align-items-center
          img(src='@/assets/curso/temas/42.svg', alt='Texto que describa la imagen' style="width: 39px").me-2
          h4.mb-0 Sigot Colombia
        p.mb-2 Contiene insumos para la  planeación y el ordenamiento  territorial del país.
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Sigot Colombia</b> 
              br
              |https://sigot.igac.gov.co/
      .tarjeta.bg--red.p-3(x="50%" y="15%" titulo="Instituto Geográfico<br>Agustín Codazzi IGAC")
        .titulo-icono.d-flex.align-items-center
          img(src='@/assets/curso/temas/42.svg', alt='Texto que describa la imagen' style="width: 39px").me-2
          h4.mb-0 Instituto Geográfico Agustín Codazzi IGAC
        p.mb-2 Aquí puede encontrar información como: mapa de cartografía básica; mapa de cartografía básica con relieve; mapa de sistema nacional catastral; mapa dinámico de líneas de vuelo; mapa de emergencia invernal; mapa de la subdirección de agrología; consulta de planchas a nivel nacional; consulta de planchas a escala 1:2.000 para Bogotá; socios internacionales del IGAC; visor de patrones Corine Land Cover, y consulta de aerofotografías a color.
        a.anexo.mb-4.mb-lg-0(href="https://geoportal.igac.gov.co/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Instituto Geográfico Agustín Codazzi IGAC</b> 
              br
              |https://geoportal.igac.gov.co/
      .tarjeta.bg--red.p-3(x="80%" y="30%" titulo="Colombia en mapas")
        .titulo-icono.d-flex.align-items-center
          img(src='@/assets/curso/temas/42.svg', alt='Texto que describa la imagen' style="width: 39px").me-2
          h4.mb-0 Colombia en mapas
        p.mb-2 Compilación de información geográfica del país.
        a.anexo.mb-4.mb-lg-0(href="https://www.colombiaenmapas.gov.co/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Colombia en mapas</b> 
              br
              |https://www.colombiaenmapas<br>.gov.co/
      .tarjeta.bg--red.p-3(x="80%" y="60%" titulo="Visor SIAC")
        .titulo-icono.d-flex.align-items-center
          img(src='@/assets/curso/temas/42.svg', alt='Texto que describa la imagen' style="width: 39px").me-2
          h4.mb-0 Visor SIAC
        p.mb-2 Compilación de información geográfica del país.
        a.anexo.mb-4.mb-lg-0(href="http://sig.anla.gov.co:8083/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Visor SIAC</b> 
              br
              |http://sig.anla.gov.co:8083/
      .tarjeta.bg--red.p-3(x="50%" y="80%" titulo="Geoportal Servicio<br>Geológico  Colombiano")
        .titulo-icono.d-flex.align-items-center
          img(src='@/assets/curso/temas/42.svg', alt='Texto que describa la imagen' style="width: 39px").me-2
          h4.mb-0 Geoportal Servicio Geológico  Colombiano
        p.mb-2 Contiene información geológica del país.
        a.anexo.mb-4.mb-lg-0(href="https://www2.sgc.gov.co/sgc/mapas/Paginas/geoportal.aspx" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Geoportal Servicio Geológico  Colombiano</b> 
              br
              |https://www2.sgc.gov.co/<br>sgc/mapas/Paginas/<br>geoportal.aspx
      .tarjeta.bg--red.p-3(x="25%" y="60%" titulo="Geoportal IDEAM")
        .titulo-icono.d-flex.align-items-center
          img(src='@/assets/curso/temas/42.svg', alt='Texto que describa la imagen' style="width: 39px").me-2
          h4.mb-0 Geoportal IDEAM
        p.mb-2 Aquí se encuentran diferentes recursos  con información climática del país.
        a.anexo.mb-4.mb-lg-0(href="http://www.ideam.gov.co/geoportal" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Aquí se encuentran diferentes recursos  con información climática del país.</b> 
              br
              |http://www.ideam.gov.co<br>/geoportal

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

<style lang="sass">
.bg--red
  background-color: #f9c6c0
  min-width: 335px
</style>
