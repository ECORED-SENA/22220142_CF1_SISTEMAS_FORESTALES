<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Componente espacial del Plan de Manejo Forestal y Agroecológico.
    .row.mb-5.align-items-center.g-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/temas/0.png')
      .col-lg-6(data-aos='fade-left')
        p.mb-0 Toda actividad que desarrolla el ser humano sucede en algún lugar del espacio; <b>las actividades agrícolas, pecuarias, forestales, entre otras, siempre se van a desarrollar en una finca</b>, la cual, de acuerdo con la distribución administrativa de Colombia, se encuentra en una vereda, en un corregimiento o en un municipio de alguno de los 32 departamentos del país. 
          br
          br
          |Adicionalmente, este predio o finca tiene unas características especiales, dependiendo del lugar donde se encuentre, relacionadas con los suelos, el clima, la vegetación y la fauna.
    p.mb-5 Por esta razón, para <b>todo plan de manejo forestal y/o agroecológico</b>, se deben contemplar como mínimo los siguientes elementos espaciales: 
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Localización y accesibilidad al predio
    .row.mb-5.align-items-center.g-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/temas/1.png')
      .col-lg-6(data-aos='fade-left')
        p.mb-0 La localización y accesibilidad al predio es un elemento importante de contemplar, por tanto, <b>se debe ubicar en un mapa el área de ubicación del predio donde se realizará el proyecto (aprovechamiento, establecimiento de recursos naturales, entre otros),</b> especificando los linderos, la extensión y vías de acceso, entre otros elementos. 
          br
          br
          |Es necesario, también, <b>realizar la ubicación del predio de acuerdo con la división administrativa</b>, ya sea municipio, vereda, corregimiento, paraje, entre otros.
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Características biofísicas de la unidad de manejo forestal y/o agroecológica
    p.mb-5 Como parte de esta medición, se deben describir los usos actuales y coberturas del suelo, al igual que sus potencialidades, las características climáticas, geológicas, geomorfológicas, topográficas, hidrológicas, entre otras, así:
    .tarjeta.bg--2-c1.p-4.mb-5
      h3.text-center.mb-4 CARACTERÍSTICAS BIOFÍSICAS DEL PREDIO
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="1").px-5.align-items-center
          .col-md-4.mb-4.mb-md-0: img(src='@/assets/curso/temas/2.jpg' style='border-radius: 20px')
          .col-md-6.mb-4.mb-md-0
            p
              b Componente espacial
              br
              | Climático
              br
              br
              b Descripción
              br
              | Información sobre la temperatura, precipitación, distribución, brillo solar, humedad relativa.
        .row(titulo="2").px-5.align-items-center
          .col-md-4.mb-4.mb-md-0: img(src='@/assets/curso/temas/3.jpg' style='border-radius: 20px')
          .col-md-6.mb-4.mb-md-0
            p
              b Componente espacial
              br
              | Geología – Geomorfología- Topografía - Suelos
              br
              br
              b Descripción
              br
              | Geología, grados de estabilidad, relieve, pendientes, geomorfología, características físicas - químicas de los suelos.
        .row(titulo="3").px-5.align-items-center
          .col-md-4.mb-4.mb-md-0: img(src='@/assets/curso/temas/4.jpg' style='border-radius: 20px')
          .col-md-6.mb-4.mb-md-0
            p
              b Componente espacial
              br
              | Uso potencial de los suelos.
              br
              br
              b Descripción
              br
              | Identificar áreas para usos agrícolas, pecuarios, forestales, de protección; características de estas áreas.
        .row(titulo="4").px-5.align-items-center
          .col-md-4.mb-4.mb-md-0: img(src='@/assets/curso/temas/5.jpg' style='border-radius: 20px')
          .col-md-6.mb-4.mb-md-0
            p
              b Componente espacial
              br
              | Uso actual del suelo.
              br
              br
              b Descripción
              br
              | Identificar áreas actualmente en uso agrícola, pecuario, forestal; sistemas utilizados.
        .row(titulo="5").px-5.align-items-center
          .col-md-4.mb-4.mb-md-0: img(src='@/assets/curso/temas/6.jpg' style='border-radius: 20px')
          .col-md-6.mb-4.mb-md-0
            p
              b Componente espacial
              br
              | Hidrografía e hidrología. 
              br
              br
              b Descripción
              br
              | Se debe resaltar red hidrográfica de la zona, ubicar obras de acueductos u otras relevantes, estado actual de protección, caudales promedio.
        .row(titulo="6").px-5.align-items-center
          .col-md-4.mb-4.mb-md-0: img(src='@/assets/curso/temas/7.jpg' style='border-radius: 20px')
          .col-md-6.mb-4.mb-md-0
            p
              b Componente espacial
              br
              | Procesos erosivos.
              br
              br
              b Descripción
              br
              | Procesos erosivos existentes en el predio, susceptibilidad a la erosión.
    .row.mb-5.justify-content-center
      .col-lg-10
        .contenedor-verde.p-4 
          img(src="@/assets/curso/temas/8.svg").mb-4
          .row.justify-content-end
            .col-xl-8
              p
                b Adicional a esta información, también es necesario identificar la infraestructura vial de la zona donde se va a desarrollar el proyecto.
                  br
                  br
                  |En el caso de planes de manejo y aprovechamiento forestal, se deben definir espacialmente las áreas o unidades de manejo existentes a aprovechar y para la realización de actividades de reforestación.  

            


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.contenedor-verde.p-4
  position: relative
  background-color: #ABE8C7
  img
    position: absolute
    top: -10%
    left: 3%
    width: 280px
  @media (max-width: $bp-max-lg)
    img
      position: relative
      margin: 0 auto
</style>
