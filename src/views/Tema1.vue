<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Esquema organizativo 
    
    br
    
    .row.container.justify-content-around.align-items-center
      
      
    p.txt-inicial Dentro de un esquema organizativo se contempla la infraestructura tecnológica, así como sus características y los modelos de gestión desde una red de datos; a continuación, se describen dichos conceptos. 
      
      br
      #infraestructura-tecnologica
        .titulo-segundo.color-primario
          h2 1.1 Infraestructura tecnológica

      .row 
        .col-lg-7
          .cuadro-color-tema1
          p.txt-infras-tema1 La infraestructura tecnológica hace referencia a todo componente físico que la compone: distribución espacial, eléctrica, red de datos, equipos de cómputo, servidores, terminales IP y todo aquello que pueda ser integrado al sistema como cámaras de vigilancia, sensores y demás. Conocer la infraestructura tecnológica permite identificar cada elemento como parte de un todo y garantizar que con su funcionamiento no se presentarán novedades para los usuarios finales. 


        .col-lg-5
            figure
                img(data-aos="fade-left")(src="@/assets/curso/temas/img1-tema1.png", alt="alt").img1-tema1
    br
    br

    .row.container.justify-content-around.align-items-center

        .titulo-sexto.color-secundario.mb-3
            h5 Tabla 1.
            span <em>Clasificación de los dispositivos de la infraestructura tecnológica en un centro de datos. </em>

        .tabla-a.color-acento-botones 
          table
            caption Nota. Elaboración del experto 2022.
            thead
              tr
                th Equipos
                th Comunicación
                th Red

            tbody
              tr
                td Servidores
                td <em>Routers</em>
                td Cableado

              tr
                td Cámaras de seguridad
                td <em>Modems</em>
                td Sistema eléctrico

              tr
                td Terminales IP
                td <em>Switch</em>

              tr
                td Sensores
                td <em>Access Point</em>


              tr
                td UPS
                td <em>Firewall</em>


              tr
                td Planta eléctrica

    br
    br
    br

        
    .row.container.justify-content-around.align-items-center

      .row 
        .col-lg-5

            figure
                  img(data-aos="flip-up")(src="@/assets/curso/temas/img-finf-tabla-tema1.png", alt="alt").img-finf-tabla-tema1
        
            
        .col-lg-7

            p #[strong  Ejemplo:] en un edificio bancario existe un cuarto exclusivo para ubicar el centro de datos, allí se encuentran dispositivos como: servidores, racks con switch, routers, módems, pantallas, sensores, red eléctrica, cableada, y lo necesario para permitir su funcionamiento. Todos estos componentes integran la infraestructura tecnológica, pero no podemos dejar de lado el edificio como tal; construir un ambiente apropiado para albergar tecnología requiere de conocimientos de normatividad dado que es indispensable velar porque variables como la temperatura, humedad e incluso nivel de acceso, se garanticen en una disponibilidad del 100% 24/7 (24 horas al día por 7 días a la semana). Factores como la altura, volumen, capacidad de carga, hasta el piso, deben ser revisados con detalle y por ello es importante estudiar estos temas a profundidad. 
            p Si desea conocer sobre las características de la infraestructura de red, criterios de dimensión de un data center, criterios de gestión de servidores y modelos de gestión TI, por favor consulte el siguiente material:

            .col-lg-10
            a.anexo.mb-4(:href="obtenerLink('/downloads/anexo_1 Caracteristicas red.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                    p #[strong Anexo] Características de la infraestructura 




      
    
    
    
    br
    br
    br

    .row.container.justify-content-around.align-items-center.fondo-red-de-datos-tema1.p-4
          
        #red-de-datos
        .titulo-segundo.color-primario
          h2 1.2 Red de datos
        
        .row 
          
          .col-lg-7
          
              p Una red de datos no es más que la interconexión física que existe entre varios dispositivos y que permite la transmisión de información de un equipo a otro o a los demás que están conectados; es decir, una red de datos permite el intercambio de información de manera directa utilizando un medio de comunicación. Al momento de hablar con otras personas, se requiere de un medio de comunicación, un emisor y un receptor, ¿verdad? Así mismo funciona una red de datos, el emisor corresponde al equipo host que desea enviar la información, el medio será cableado, el mismo aire a través de una conexión wifi y el equipo receptor se convierte en aquel para el cual fue enviado el mensaje inicial. Así bien, las redes de datos se pueden crear entre dos dispositivos a través de un cable cruzado, conectados a través de una conexión wifi, dispositivo bluetooth, infrarrojo o todo aquel que permita el intercambio de datos de un equipo al otro. 
              p Si desea reconocer las características e identificar las tipologías y topologías de red que se pueden diseñar a la hora de estructurar la infraestructura tecnológica en una organización, consulte el siguiente material:
          
          .col-lg-5
              
              figure
                  img(data-aos="fade-right")(src="@/assets/curso/temas/img-red-de-datos-tema1.png", alt="alt").img-red-de-datos-tema1
        
        .row
          .col-lg-8
            a.anexo.mb-4(:href="obtenerLink('/downloads/anexo_1 Caracteristicas red.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Características, tipologías y topologías de la red

    separador

    br

    .row.container.justify-content-around.align-items-center
        
        #modelos-de-referencia
        .titulo-segundo.color-primario
          h2 1.3 Modelos de referencia
        
        br

        .row 
          .col-lg-10.bloque-cajon-color-mod-refer
            .cajon.color-primario.p-4
              p Los protocolos de red generalmente están estructurados en capas, La Organización Internacional para la Estandarización (ISO) ha diseñado el modelo de referencia de Interconexión de Sistemas Abiertos (OSI) que implementa 7 capas según la actividad de la red y cada uno de ellos tiene asociado uno o más protocolos. <em>“Las capas representan las operaciones de transferencia de datos comunes a todos los tipos de transferencias de datos entre las redes de cooperación”.</em>

        .row 

          .titulo-sexto.color-secundario.mb-3
              h5 Tabla 2.
              span <em>Capas del modelo OSI</em>

          .tabla-a.color-acento-botones 
            table
              caption Nota. Elaboración del experto 2022.
              thead
                tr
                  th Nro. Capa
                  th Comunicación
                  th Red
                  //th Encabezado 4
                  //th Encabezado 5
              tbody
                tr
                  td.text-center 7
                  td.col2-tabla1-tema1 Aplicación
                  td Servicios y aplicaciones que conocemos para realizar la transferencia de datos entre equipos, que podemos utilizar fácilmente desde cualquier ordenador. 

                tr
                  td.text-center 6
                  td.col2-tabla1-tema1 Presentación
                  td Establece un sistema de comunicación que garantice que ambos “leen” el mismo lenguaje, es decir, el sistema que recibe comprende con facilidad la información que le fue enviada a través de la red.

                tr
                  td.text-center 5
                  td.col2-tabla1-tema1 Sesión
                  td Para garantizar que la comunicación en la red se realizará únicamente entre los dos dispositivos señalados y que no habrá posibles pérdidas de datos, se debe entablar una sesión que administre y termine la conexión. Esta capa garantiza la administración entre los sistemas que cooperan. 

                tr
                  td.text-center 4
                  td.col2-tabla1-tema1 Transporte
                  td Permite crear un sistema de envío de datos por paquetes que garantiza que la información enviada será la misma que se recibe en el otro dispositivo en la red. 

                tr
                  td.text-center 3
                  td.col2-tabla1-tema1 Red
                  td Los vínculos permiten crear esos enlaces entre los dispositivos físicos en la red, la red permite que se puedan identificar cada uno de ellos y transferir la información ya sea en la red LAN o en redes externas. 

                tr
                  td.text-center 2
                  td.col2-tabla1-tema1 Vínculo de datos
                  td Una vez se reconoce el componente físico en la red, se deben establecer los sistemas de comunicación entre los que se desea crear una “conexión”, esta capa permite administrar la transferencia de datos a través de la red. 

                tr
                  td.text-center 1
                  td.col2-tabla1-tema1 Física
                  td Corresponde al <em>hardware</em> de red, sus características y operabilidad. Permite identificar el “dispositivo” y reconocerlo en la red. 

    br
    br
    br

    .row.container.justify-content-around.align-items-center

      .row.fondo-tarj-anexo-tema2.tarjeta.p-4
        .col-lg-2
          .icon-pdf-tarj-anexo-tema2
            
              img(src="@/assets/template/icono-pdf.svg")

        .col-lg-8

            h4.txt-tarj-anexo-tema2 Anexo
            p.txt-tarj-anexo-tema2 Para conocer más sobre el modelo OSI, el sistema de direccionamiento IP, protocolos de enrutamiento y las características de los sistemas de cableado estructurado, sistemas de almacenamiento y sistemas en la nube, consulte el siguiente material: 
            
        .col-lg-2
          .icon-boton-tarj-anexo-tema2
            a.boton.boton--b(:href="obtenerLink('/downloads/anexo_3 Modelo OSI.pdf')" target="_blank")
              .anexo__texto
              span Descargar
              i.fas.fa-file-download



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

<style lang="sass"></style>
