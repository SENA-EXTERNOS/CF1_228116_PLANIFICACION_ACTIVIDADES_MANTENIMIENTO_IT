<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Centro de datos
  
    .row.container.justify-content-around.align-items-center
        .row 
          .col-lg-12
            figure
                img(src='@/assets/curso/temas/img1-centro-datos-tema2.png', alt='Texto que describa la imagen').img1-centro-datos-tema2

        .row 
          .col-lg-10.cajon-color-tema2
            .cajon.color-adicional-1.p-4
              p.txt-cajon-color-tema2.p-4 Son tipos, características, componentes, normas y estándares (organismos nacionales e internacionales), ambientes de desarrollo e integración de plataformas.
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .row 
          .col-lg-4
              
              figure
                img(src='@/assets/curso/temas/img2-tema2.png', alt='Texto que describa la imagen').img2-tema2

          .col-lg-8
              .cuadro-color-tema2.tarjeta
              p.txt-cuadro-color-tema2 Es importante conocer un data center real de Google ubicado en la ciudad de Oregón USA. Al realizar el recorrido virtual en 360º podrá conocer información relevante sobre niveles de acceso, ubicación y sistemas de protección, temas necesarios para comprender el por qué un data center es configurado de esa manera y por qué es tan importante su protección y vigilancia.

              .link-ext-tarj2-tema2
                a.anexo.mb-4.mb-lg-0(href="https://youtu.be/zDAYZU4A3w0" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web Para conocer sobre Google Data Center 360° Tour, visualice el siguiente video
    br
    br
    br

    .row.container.justify-content-around.align-items-center

      .row 
        .col-lg-7

          p Un data center o centro de datos, Centro de Procesamiento de Datos CPD, Internet Data Center IDC en inglés, Centro de Cómputo América Latina o Centro de Cálculo, hace referencia a la ubicación física donde se concentran todos los dispositivos tecnológicos que permiten que la red funcione y opere con normalidad. En la actualidad utilizamos servicios en nuestros dispositivos móviles como portátiles, teléfonos inteligentes o tablets sin percatarnos que todos y cada uno de esos servicios son suministrados por un equipo servidor conectado a un data center físico en algún lugar del mundo.
          p De acuerdo a la necesidad de cada usuario (empresas o clientes privados) se reserva un espacio físico en el data center, allí estarán albergados servidores que ofrecerán los “servicios” empresariales, según el tamaño de la empresa; el data center podrá disponer de salas completas, dispuestas a alojar armarios -rack- con infraestructura TI suficiente para soportarla. Los centros de datos implementan sistemas de seguridad y protección de la información como: sistema de alimentación eléctrico, alimentación de contingencia, refrigeración, sistema de cableado, sistema de detección y extinción de incendios, detectores de agua, humo, control de acceso y monitoreo.

        .col-lg-5
            figure
                img(src='@/assets/curso/temas/img3-tema2.png', alt='Texto que describa la imagen').img3-tema2

      
      p.txt-inf-centros-datos Los centros de datos modernos requieren de supervisión y seguimiento permanente, la domótica y los sensores se vuelven piezas requeridas para su operación. Aspectos como la humedad, temperatura, acceso, niveles de energía, entre otros, son elementos fundamentales cuyos niveles normales permiten que los servicios ofrecidos por el data center operen adecuadamente.        

    br
    br
    br

    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .col-lg-8
        
            p De acuerdo a la lista desarrollada por la empresa StakeScale, uno de los objetivos centrales con respecto a la reducción de la huella de carbono es permitir minimizar el impacto en el medio ambiente a través de la utilización de energías limpias, el uso del aire frío traído desde el exterior para refrigerar el centro de datos o la implementación de paneles solares para optimizar el consumo de energía eléctrica, utilización de elementos naturales que no deterioren la capa de ozono e implementación de energías 100% limpias y renovables.
            p La principal característica de un data center es suministrar servicios a sus usuarios finales, por tanto son susceptibles a implementar tecnología de punta para su funcionamiento.
            p Algunas de las funciones clave de un data center son:
        
        .col-lg-4
            
            figure
                img(src='@/assets/curso/temas/img-data-center-tema2.png', alt='Texto que describa la imagen').img-data-center-tema2

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        SlyderF(columnas="col-lg-6 col-xl-4")
          
          .tarjeta.fondo-carr-tarj-tema2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img1-carr-tarj-tema2.png' alt='AvatarTop').img-carr-tarj-tema2
            //h2.text-center FIRST
            p.txt-carr-tarj-tema2.text-center Contar con un sistema de seguridad y monitoreo que garantice su funcionamiento.

          .tarjeta.fondo-carr-tarj-tema2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img2-carr-tarj-tema2.png' alt='AvatarTop').img-carr-tarj-tema2
            //h2.text-center 2
            p.txt-carr-tarj-tema2.text-center Cumplir con las normas y estándares internacionales.

          .tarjeta.fondo-carr-tarj-tema2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img3-carr-tarj-tema2.png' alt='AvatarTop').img-carr-tarj-tema2
            //h2.text-center 3
            p.txt-carr-tarj-tema2.text-center Aplicar sistemas de seguridad en la información que permitan la protección de los datos y la reducción de amenazas al sistema informático.
          
          .tarjeta.fondo-carr-tarj-tema2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img4-carr-tarj-tema2.png' alt='AvatarTop').img-carr-tarj-tema2
            //h2.text-center 4
            p.txt-carr-tarj-tema2.text-center Registro de fallas que permiten retroalimentar el sistema y mejorar constantemente su funcionamiento.

          .tarjeta.fondo-carr-tarj-tema2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img5-carr-tarj-tema2.png' alt='AvatarTop').img-carr-tarj-tema2
            //h2.text-center 4
            p.txt-carr-tarj-tema2.text-center Realizar copias de seguridad e implementar respaldos de información dentro del mismo centro de datos, así como en ubicaciones exteriores que permitan garantizar la protección de la información.

          .tarjeta.fondo-carr-tarj-tema2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img6-carr-tarj-tema2.png' alt='AvatarTop').img-carr-tarj-tema2
            //h2.text-center 5
            p.txt-carr-tarj-tema2.text-center Ejecutar funciones básicas, como por ejemplo los servicios para los cuales fueron diseñados.

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .row.fondo-tarj-anexo-tema2.tarjeta.p-4
          .col-lg-2
            .icon-pdf-tarj-anexo-tema2
              
                img(src="@/assets/template/icono-pdf.svg")

          .col-lg-8

              h4.txt-tarj-anexo-tema2 Estándares y Normativas Nacionales e Internacionales para TI
              p.txt-tarj-anexo-tema2 Para conocer los Estándares y Normativas Nacionales e Internacionales para las TI que regulan todos los procesos y permiten establecer los parámetros de configuración y administración de un centro de datos y la Infraestructura tecnológica, lo invitamos a revisar el siguiente material de apoyo:
              
          .col-lg-2
            .icon-boton-tarj-anexo-tema2
              a.boton.boton--b(:href="obtenerLink('/downloads/anexo_4 Estandares y normas.pdf')" target="_blank")
                .anexo__texto
                span Descargar
                i.fas.fa-file-download
    br    
    br    
    br

    .row.container.justify-content-around.align-items-center

        .row 
          .col-lg-11.bloque-cajon-color
            .cajon.color-primario.p-4
              .h5 Características técnicas y los componentes de un centro de datos
              p Para conocer las características técnicas y los componentes de un centro de datos y los ambientes de desarrollo e integración de plataformas, lo invitamos a revisar el siguiente material de apoyo: 

              .col-lg-7        
                a.anexo.mb-4(:href="obtenerLink('/downloads/anexo_2 Caracteristicas centro datos.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. Características técnicas y los componentes de un centro de datos


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

<style lang="sass"></style>
