<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Informática forense
    
    
    .row.container.justify-content-around.align-items-center

        .row 
          .col-lg-4
                  
              figure
                  img(src='@/assets/curso/temas/img1-tema5.png', alt='Texto que describa la imagen').img1-tema5

          .col-lg-8
            p La tecnología ha crecido a pasos gigantescos desde su aparición; en la actualidad el procesamiento de datos e información se realiza de manera ágil, sin embargo, los mismos pueden ser vulnerados a través de estrategias que infringen la privacidad y seguridad en los sistemas de información. Los ataques a los sistemas son cada vez más frecuentes, daños en bases de datos, sustracción de información personal, vulnerabilidades en los sistemas que permiten que personas inescrupulosas accedan a contenido confidencial sin autorización. La informática forense es una estrategia analítica que permite identificar, proteger, mitigar y salvaguardar la información, también permite realizar seguimiento, auditoría y control sobre desde qué dispositivo se realizó el ataque al sistema “escena del delito”, además de identificar la huella digital que quedó una vez se cometió el acceso no autorizado. 
 
  
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        p A continuación, se citan algunos ejemplos de noticias acerca de “ataques” a los sistemas masivos de información:
        
        .tarjeta.tarjeta--azul.p-4
          SlyderA(tipo="b")

            .row
              .col-md-6.mb-4.mb-md-0
                p.txt-slider-tema5 BBC News Mundo (2018). Un ciberataque a Facebook dejó expuestas casi 50 millones de cuentas. 
                .boton-slider-link
                  a.boton.boton--b(href='https://www.bbc.com/mundo/noticias-45685066' target="_blank")
                    span Ver enlace
                    i.fas.fa-link

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img1-slider-tema5.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

            .row
            
              .col-md-6.mb-4.mb-md-0
                p.txt-slider-tema5 Wikimedia, C. (2011). “Anonymous” anuncia ataque a Facebook para el 5 de noviembre. 
                .boton-slider-link
                  a.boton.boton--b(href='https://es.wikinews.org/wiki/%27Anonymous%27_anuncia_ataque_a_Facebook_para_el_5_de_noviembre' target="_blank")
                    span Ver enlace
                    i.fas.fa-link

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img2-slider-tema5.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
            
            .row

              .col-md-6.mb-4.mb-md-0
                p.txt-slider-tema5 I T Masters, Mag. (2022). Secuestran cuentas de Instagram o LinkedIn incluso antes de ser creadas, advierten.  
                .boton-slider-link
                  a.boton.boton--b(href='https://www.itmastersmag.com/noticias-analisis/ataques-presecuestro-acceden-a-cuentas-de-instagram-y-linkedin-antes-de-ser-creadas/' target="_blank")
                    span Ver enlace
                    i.fas.fa-link
                    
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img3-slider-tema5.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

            
            .row

              .col-md-6.mb-4.mb-md-0
                p.txt-slider-tema5 Higuera, A. (2022). Los ciberataques en empresas aumentaron un 150% y el principal vector de entrada de virus es el error humano. 
                .boton-slider-link
                  a.boton.boton--b(href='https://www.20minutos.es/tecnologia/ciberseguridad/los-ciberataques-en-empresas-aumentaron-un-150-y-el-principal-vector-de-entrada-de-virus-es-el-error-humano-5004982/' target="_blank")
                    span Ver enlace
                    i.fas.fa-link

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img4-slider-tema5.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

    br           
    br           
    br

    .row.container.justify-content-around.align-items-center   

        .row 
            .col-lg-5
                
                figure
                  img(src='@/assets/curso/temas/img-final-tema5.png', alt='Texto que describa la imagen').img-final-tema5
    
            .col-lg-7
                .cajon.color-acento-botones.cajon-final-tema5.p-4
                  p Es importante recordar que, sin importar el tipo de dispositivo utilizado, desde que cuente con acceso a Internet y tenga almacenada información valiosa para el usuario, este podrá ser víctima de un ataque cibernético. 
                  p En efecto y dada la facilidad de compartir información, las personas envían imágenes, pero no son conscientes que detrás de cada una de ellas se encuentran metadatos que entregan información valiosa como dispositivo que tomó la fotografía, tiempo, ubicación geográfica (georreferenciación) exposición, entre otros. Así, si una persona comparte con frecuencia fotografías, las personas podrán reconocer la ubicación de sus sitios frecuentes sin necesidad de consultar; por tanto, no solamente se puede ser víctima de un ciberataque, sino que sin darse cuenta se están cometiendo errores en la seguridad de la información, en casi todas las ocasiones por desconocimiento. 
                br
                p Ahora, la definición de informática forense es un proceso para la recopilación, análisis y presentación de información que sirva como evidencia. Entendido de otra manera, es la unión del derecho y la informática para presentar ante un tribunal de justicia las evidencias necesarias y que estas sean admisibles, esto encaminado a revelar algún ataque cibernético.
 
    br
    br
    br

    .row.container.justify-content-around.align-items-center   

        .row.fondo-tarj-anexo-tema2.tarjeta.p-4
            .col-lg-2
              .icon-pdf-tarj-anexo-tema2
                  img(src="@/assets/template/icono-pdf.svg")

            .col-lg-8

                h4.txt-tarj-anexo-tema2 Aplicación de la informática forense y las tendencias de los ecosistemas tecnológicos
                p.txt-tarj-anexo-tema2 Para conocer sobre la aplicabilidad de la informática forense y las tendencias de los ecosistemas tecnológicos, lo invitamos a revisar en siguiente documento:
                
            .col-lg-2
              .icon-boton-tarj-anexo-tema2
                a.boton.boton--b(:href="obtenerLink('/downloads/anexo_8 Informatica forense.pdf')" target="_blank")
                  .anexo__texto
                  span Descargar
                  i.fas.fa-file-download
    br
    br

    .row.container.justify-content-around.align-items-center   

        .row 
          .col-lg-10
            .cajon.color-secundario.p-4
              p Aprendiz, ha culminado satisfactoriamente el estudio de las temáticas de este componente formativo; ahora le invitamos a revisar el material complementario y a realizar la actividad didáctica para que reafirme sus conocimientos acerca de la Planificación de actividades para el mantenimiento de la infraestructura tecnológica.

</template>

<script>
export default {
  name: 'Tema3',
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
