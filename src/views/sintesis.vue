<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A través del componente formativo se realizará el proceso de adquisición de conocimientos teóricos para conocer las normativas vigentes sobre un data center; también la gestión, administración y control del mismo a través de normas internacionales y nacionales que reglamentan la prestación del servicio, tiempos de disponibilidad y configuración de los dispositivos que integran la infraestructura tecnológica del data center. 


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/img-sintesis.png", alt="alt").img-sintesis
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
