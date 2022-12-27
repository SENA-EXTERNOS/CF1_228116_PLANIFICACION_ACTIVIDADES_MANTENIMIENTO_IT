<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Redes convergentes

    
    .row.container.justify-content-around.align-items-center

        
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img1-tema4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las redes convergentes o multiservicio permiten integrar servicios de voz, datos y vídeo sobre un mismo protocolo de nivel de red, basadas en la comunicación IP, VoIP. Como podrá imaginar, una red convergente requiere de una infraestructura capaz de soportar diferentes servicios sobre la misma red de datos, haciéndola más robusta y multiservicio.
            br
            br

            p Anteriormente las redes ofrecían servicios separados, gracias al protocolo IP, la integración de servicios de voz, datos y vídeos sobre una misma red se ha podido llevar a cabo, revolucionando la industria de las telecomunicaciones y posicionando Internet, dándole capacidad de transmisión de diferentes paquetes a través de la misma red, concepto que dio nacimiento a la comunicación celular, por ejemplo. 


    br
    
    separador
    
    br

    .row.container.justify-content-around.align-items-center
        
        #modelo-de-red-de-convergencia
        .titulo-segundo.color-primario
          h2 4.1 Modelo de red de convergencia

        .row 
          .col-lg-4
            
            figure
                img(src='@/assets/curso/temas/img-mod-red-conver-tema4.png', alt='Texto que describa la imagen').img-mod-red-conver-tema4

          .col-lg-8
            p Una red de convergencia basada en el protocolo IP se construye a través de tres elementos fundamentales:
            p El desarrollo tecnológico permite ofrecer múltiples servicios sobre una red (la red multipropósito basado en IP y el sistema de protocolos) para que la información fluya adecuadamente. 
            p La Voz sobre IP o VoIP es un ejemplo de red convergente, eficiente, flexible y económico que permite la integración de la voz a través de paquetes utilizando el protocolo IP para su envío, así se podrá implementar sobre la infraestructura de red LAN un servicio de VoIP que permita la construcción de una red de convergencia que permita administrar una planta telefónica, llamadas y terminales telefónicas IP en el modelo. 



    br

    separador

    br

    .row.container.justify-content-around.align-items-center.color-secc-caract-arquit.p-4
        
        #caracteristicas-de-la-arquitectura
        .titulo-segundo.color-primario
          h2 4.2 Características de la arquitectura
        p Una red de convergencia basada en el protocolo IP se construye a través de tres elementos fundamentales:
        
        .row.bloque-cajon-color-caract-arquit 
              
            .col-lg-5

                figure
                    img(src='@/assets/curso/temas/img-caract-arquitec-tema4.png', alt='Texto que describa la imagen').img-caract-arquitec-tema4


            .col-lg-7

                .cajon.color-acento-botones.cajon-color-caract-arquit.p-4
                    p La integración de voz y datos sobre una misma red indica que la infraestructura es multiservicio, soporta el tráfico de datos y voz, también podrá soportar tráfico según los requerimientos y la calidad de la infraestructura. Por tanto, las dos características fundamentales de una red convergente serán la flexibilidad y habilidad para reaccionar a los cambios del tráfico, con el fin de garantizar la prestación de los servicios. 
                br
                p Con la arquitectura MPLS y su mecanismo de ingeniería de tráfico TE, posibilita el control dinámico del flujo de datos para optimizar la utilización de los recursos según la carga de la red y “cambiarlos” a una red con carga más liviana o congestionada. 

                p.txt-color-cajon-caract-arquit La clave para el funcionamiento de las redes convergentes es destinar equipos con propósitos específicos, así se podrán generar soluciones que permitan escalar satisfaciendo las necesidades organizacionales. 
                
            

  
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        h4 Retos técnicos sobre redes convergentes

        TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Pérdida de paquetes")
              h4 Pérdida de paquetes
              p La pérdida de paquetes está ligada con la calidad de los datos transmitidos, por ejemplo, al tratarse de voz su calidad no sería la óptima. Algunas de las técnicas que se implementan para reducir este fenómeno son: 
              
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Mejora de la red; al mejorar el ancho de banda de la red se mejora la calidad y como resultado una transmisión de paquetes mucho más “limpia”.

                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Substitución por silencio: básicamente lo que hace el sistema es sustituir un paquete perdido por “silencio” y así se reduce la tasa de pérdida al 1%.

                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Substitución por ruido: se reproduce “ruido blanco” en vez de silencio.

                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Repetición del paquete anterior: se realiza intermodulación si el último paquete recibido es similar al paquete anterior perdido.

                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Interpolación de paquetes; se produce el reemplazo al utilizar los paquetes “vecinos” y cambiar los paquetes faltantes, así no se altera el flujo de voz. 
                li 
                  .lista-ol--cuadro__vineta
                    span 6
                  | Intercalado de tramas: se utiliza para redondear un paquete completo en el receptor y así no se presenta la pérdida de un fonema, sino más bien varios pequeños segmentos no consecutivos “imperceptibles”, aunque aumenta el retardo en la entrega de paquetes. 

                li
                  .lista-ol--cuadro__vineta
                    span 7
                  | Corrección de errores: se envían varios paquetes “completos” con toda la información, así en caso de pérdida de algún paquete se puede extraer del paquete “completo”. 
                


              
            .tarjeta.color-acento-botones--borde.p-4(titulo="Retardo de paquetes")
              h4 Retardo de paquetes

              p A través de la comunicación Half-Duplex se ha determinado que un retardo debe ser menor a 150 ms, así se considera “aceptable”. Algunos de los retardos más comunes son: 
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Retardo de códec: conversión entre A/D y compresión para reducir el ancho de banda.

                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Retardo de serialización: mientras mayor es la longitud del paquete, mayor será su retardo en la serialización. 

                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Retardo en las colas: una vez el paquete llega al Gateway, éste deberá esperar “su turno” en la salida de acuerdo a la cola y las características del tráfico. 

                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Retardo en la propagación: tiempo que se requiere para que la señal electromagnética u óptica viaje de un punto a otro. 

            .tarjeta.color-acento-botones--borde.p-4(titulo="Variaciones en el retardo")
              h4 Variaciones en el retardo
              p La varianza de los tiempos entre llegadas de paquetes al receptor (jitter), es impactante para la VoIP ocasionado por el mismo retardo, así un paquete perdido afecta la calidad de la voz; dichas variaciones se presentan por ejemplo en la cola de salida y la posibilidad latente de que cada paquete tome una ruta diferente dentro de la red IP. 
                  
  
    br
    br
    br

    .row.container.justify-content-around.align-items-center
        
        p En redes que requieran mayor tráfico de paquetes se deberán especificar los siguientes aspectos:
        
        .row.bloque-inf-pto-cal-tema4
            .col-lg-12
              ImagenInfografica.color-primario
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/temas/img-pto-caliente-tema4.png', alt='Texto que describa la imagen').img-pto-caliente-tema4
                      //figcaption Leyenda de la imagen

                  .tarjeta.fondo-tarj-tema4.p-3(x="20%" y="5%" numero="+")
                    //.h5.mb-2 titulo
                    p 1. Elementos que reduzcan los errores, pérdidas de paquetes, reducción de latencia, ancho de banda predeterminado y optimización en el tráfico de la red.

                  .tarjeta.fondo-tarj-tema4.p-3(x="50%" y="95%" numero="+")
                    //.h5.mb-2 titulo
                    p 2. La utilización de servicios que incluyan vídeo como teleconferencias, bibliotecas digitales, telemedicina, entre otros.

                  .tarjeta.fondo-tarj-tema4.p-3(x="80%" y="5%" numero="+")
                    //.h5.mb-2 titulo
                    p 3. Centrar su tráfico enfocándose en el transporte y comprensión de paquetes, con el fin de controlar, reducir el error y la degradación en la calidad de la transmisión. 
            
            .col-lg-6.link-extern-tema4
              a.anexo.mb-4.mb-lg-0(href="https://doi.org/10.18359/rcin.1269 " target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Redes convergentes] Para conocer más sobre redes convergentes, consulte el siguiente artículo:
 
    br
    br
    br
    br
    separador
    

    .row.container.justify-content-around.align-items-center

        #sistema-de-telefonia
        .titulo-segundo.color-primario
          h2 4.3 Sistema de telefonía

        .row 
          .col-lg-7

            p La telefonía se ha convertido en el servicio más usado a través de la conexión entre dispositivos celulares, en su comienzo fue análoga y en la actualidad es completamente digital, también conocida como celda o célula y por ello recibe el nombre de tecnología celular. 
            p La infraestructura técnica del sistema telefónico está conformada por la red de comunicación y los terminales. 
            p Se ha convertido en un instrumento de comunicación indispensable en el siglo XXI  y permite desarrollar las actividades del día a día a través del teléfono móvil. Recordemos que anteriormente la telefonía al ser análoga dependía de un cable de cobre conectado a una central y al terminal que permitía establecer la comunicación entre el emisor y el receptor pero ambos debían permanecer “conectados” en la llamada a través de un dispositivo fijo conectado a un RJ11.

          .col-lg-5
              
              figure
                  img(src='@/assets/curso/temas/img-sist-telefonia.png', alt='Texto que describa la imagen').img-sist-telefonia
          
    br

    separador

    br

    .row.container.justify-content-around.align-items-center

        #caracteristicas
        .titulo-segundo.color-primario
          h2 4.4 Características 

        .row 
            .col-lg-4
                figure
                  img(src='@/assets/curso/temas/img-caract-tema4.png', alt='Texto que describa la imagen').img-caract-tema4

            .col-lg-8

                p La telefonía móvil combina una red de estaciones, centrales telefónicas y terminales, así el móvil genera una solicitud de conexión (llamada) que llega a la estación por medio de antenas, allí se ubica el móvil receptor y se envía el enlace para generar la comunicación entre dos terminales. Durante el proceso intervienen aspectos como las antenas, las estaciones, sistemas de computación y medios de transporte (radio enlace, satelital, digital). Se deben tener presente aspectos como la cobertura de la señal y su potencia, adicionalmente la velocidad de carga y descarga de datos para conocer los tipos de comunicación celular, como se verá a continuación. 
            
                .row.fondo-tarj-anexo-tema4.tarjeta.p-4
                  .col-lg-2
                    .icon-pdf-tarj-anexo-tema4
                      .anexo__icono
                          img(src="@/assets/template/icono-pdf.svg")

                  .col-lg-8

                      h4.txt-tarj-anexo-tema4 Tipos de redes de comunicación 
                      p.txt-tarj-anexo-tema4 Para conocer sobre los tipos de redes de comunicación, convergencia de la telefonía móvil, dispositivos inteligentes y sus características principales, además de las aplicaciones y la conectividad, le invitamos a revisar el material: 
                      
                  .col-lg-2
                    .icon-boton-tarj-anexo-tema4
                      a.boton.boton--b(:href="obtenerLink('/downloads/anexo_7 Tipo redes.pdf')" target="_blank")
                        .anexo__texto
                        span Descargar
                        i.fas.fa-file-download


          

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
