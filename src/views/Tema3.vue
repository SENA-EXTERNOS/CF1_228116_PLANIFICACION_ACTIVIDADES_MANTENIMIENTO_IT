<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Mantenimiento
    
    
    .row.container.justify-content-around.align-items-center.fondo-tarj2-tema3.p-4

      .bloque-texto-g.fondo-der-tema1.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/img1-tema3.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El mantenimiento es una acción que se realiza a los dispositivos y equipos, permitiéndole al técnico conocer el estado actual de funcionamiento, realizar ajustes, calibraciones y reemplazo de componentes para prolongar la vida útil de cada uno de ellos. 
          br
          br
          
          p #[strong ITIL en la operación del servicio propone ejecutar actividades de mantenimiento que permitan reducir las interrupciones o novedades que se presenten en el servicio.]

      .row.fila2-tarj1-tema3
        .col-lg-7

          p También COBIT ofrece un horizonte normativo en función al mantenimiento del centro de datos e infraestructura TI en su proceso de gestión de cambios, “…incluyendo cambios estándar y de mantenimiento de emergencia en relación con los procesos de negocio, aplicaciones e infraestructura. Esto incluye normas y procedimientos de cambio, análisis de impacto, priorización y autorización, cambios de emergencia, seguimiento, reporte, cierre y documentación” (ISACA, 2012). Así, podemos observar una convergencia en los modelos utilizados para parametrizar los mantenimientos y que, en efecto, a través de normativas permiten regular, administrar y controlar los servicios de mantenimiento en una empresa. 
          p A continuación, se darán los detalles de los tipos de mantenimiento y como a través de los protocolos y buenas prácticas se prolonga el tiempo de vida de la infraestructura tecnológica y se reducen al mínimo los incidentes por fallas, daños y/o averías en el sistema.

        .col-lg-5
            figure
                img(src='@/assets/curso/temas/img2-tema3.png', alt='Texto que describa la imagen').img2-tema3
        
        p.txt-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit illo. Optio accusamus incidunt ad aspernatur sed? Consectetur quam eveniet exercitationem saepe. Modi facere illo maiores quos suscipit, alias iste?

    br
    br
    br

    separador
    
    .row.container.justify-content-around.align-items-center
        
        #tipos
        .titulo-segundo.color-primario
          h2 3.1 Tipos
        
        p El mantenimiento que se puede llevar a cabo en un data center, así como en la infraestructura tecnológica en general, son de tres tipos:


        .bg--img_03
       
          
          .row.justify-content-center.mb-4
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/img1-tipos-tema3.png", alt="alt").img400.m-auto
            .col-lg-8
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo-acord-tema3")
                .row(titulo="Mantenimiento Preventivo")
                  .col-12
                    p.txt-acord-tema3.mb-0 Se realiza con periodicidad de acuerdo al protocolo establecido de mantenimiento y permite garantizar el funcionamiento de los dispositivos tecnológicos y prolongar su tiempo de vida útil dentro del sistema. 

                .row(titulo="Mantenimiento Correctivo ")
                  .col-12
                    p.txt-acord-tema3.mb-0 Se realiza una vez se presenta una novedad o incidencia con el dispositivo, generalmente se presentan fallas en ellos y se requiere de intervención para su reparación. Como una buena práctica se deben establecer contingencias que permitan cubrir la necesidad prevista con un dispositivo puntual y resolver la situación parcialmente mientras se encuentra la falla y se repara el equipo principal. 

                .row(titulo="Mantenimiento Predictivo")
                  .col-12
                    p.txt-acord-tema3.mb-0 Durante el mantenimiento preventivo o correctivo se pueden encontrar novedades en el funcionamiento de un sistema que pueden generar fallas a futuro; visualizarlas y repararlas en el momento permiten que el dispositivo reduzca el riesgo a una falla y permite prolongar el tiempo de uso del dispositivo en el sistema. Algunos ejemplos que se pueden citar son: lubricación de componentes, cambio en engranajes, ventiladores, extractores, entre otros. 

        p Prestar atención al proceso de gestión de operaciones que nos permite realizar monitoreo, control y mantenimiento a los servicios TI, garantiza que la plataforma tecnológica estará disponible y sus dispositivos bajo seguimiento para evitar la presencia de incidencias que afecten la normalidad en el funcionamiento de los recursos del sistema. 

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        #protocolo-de-mantenimiento
        .titulo-segundo.color-primario
          h2 3.2 Protocolo de mantenimiento

        .row 
            .col-lg-8
              
              p Para estructurar el protocolo de mantenimiento al centro de datos se debe conocer la normativa vigente a la hora de diseñar uno, disponibilidad de equipos y tipos de servicios que brinda, así se podrán generar esquemas de trabajo organizado en los cuales las interrupciones en la prestación del servicio asociados al centro de datos no afecten a los usuarios finales. De acuerdo con lo anterior, se debe tener presente el servicio y sus características, también los tiempos de respuesta a la hora de atender cada requerimiento; así se podrá estructurar un protocolo que responda a las necesidades organizacionales y que responda a los requerimientos propios de cada empresa. 
            
            .col-lg-4
                figure
                  img(src="@/assets/curso/temas/img-proto-mant-tema3.png", alt="alt").img-proto-mant-tema3
          
        .row.linea2-proto-mant-tema3

            h4 Servicios y características
            p Existen criterios para la prestación de servicios y protocolos de servicios, estos corresponden a los requerimientos hechos sobre novedades presentadas en la prestación de servicios TI, es decir, al sistema presentar una falla, un usuario responsable se encarga de diligenciar una novedad a través de un sistema de gestión de <em>tickets</em> (o servicios); una vez generada la solicitud, el administrador del sistema de acuerdo al nivel de atención que se requiera asignará a un técnico disponible para su atención y solución.


    .row.container.justify-content-around.align-items-center

        .tarjeta.tarj-acord-tema3.p-4
            figure
                img(src="@/assets/curso/temas/img-fondo-der-tema3.png", alt="alt").img-fondo-der-tema3

            SlyderA(tipo="b")

              .row.justify-content-center.align-items-center.my-lg-4
                .col-md-6.mb-4.mb-md-0
                  
                    p.texto-tarj-acorden Para distribuir los <em>tickets</em> de servicio de acuerdo a su importancia, se deben tener presente los siguientes aspectos:
                    ul.lista-ul--color.texto-tarj-acorden
                      li 
                        i.fas.fa-check
                        | Nivel de criticidad.
                      li 
                        i.fas.fa-check
                        | Disponibilidad.
                      li 
                        i.fas.fa-check
                        | Tiempos de respuesta.
                
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img1-slider-tema3.png', alt='Texto que describa la imagen').img-tarj-acorden
                    //figcaption Leyenda de la imagen

              .row.justify-content-center.align-items-center.my-lg-4

              
                .col-md-6.mb-4.mb-md-0
                  p.texto-tarj-acorden ITIL y COBIT proponen alternativas para la gestión y administración de los servicios en un sistema tecnológico, siempre teniendo presente:
                  
                  ul.lista-ul--color.texto-tarj-acorden
                      li 
                        i.fas.fa-check
                        | La agilidad en los tiempos de respuesta. 

                      li 
                        i.fas.fa-check
                        | Implementación de buenas prácticas. 

                      li 
                        i.fas.fa-check
                        | Ofrecer soluciones a los requerimientos presentados. 

                      li
                        i.fas.fa-check
                        | Acciones correctivas y presentar planes de mantenimiento a los dispositivos TI. 



                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img2-slider-tema3.png', alt='Texto que describa la imagen').img-tarj-acorden
                    //figcaption Leyenda de la imagen
              
              .row.justify-content-center.align-items-center.my-lg-4

              
                .col-md-6.mb-4.mb-md-0
                  p.texto-tarj-acorden Al llegar el <em>ticket</em> a la mesa de ayuda, el analista deberá clasificarlo según su nivel de criticidad, si se tiene un equipo de atención al usuario por fuera del sistema será mucho más urgente atenderlo que un equipo terminal al cual se le debe programar mantenimiento preventivo anual; como se puede observar, la asignación de los servicios siempre estará predispuesta al nivel que se le asigne a cada uno. En la mesa de servicio también se debe contar con personal técnico cualificado para resolver las novedades presentes en el sistema, se deben contar con roles dentro del área así:
                  ul.lista-ul--color.texto-tarj-acorden
                      li 
                        i.fas.fa-check
                        | Analista: recibe, clasifica y asigna los servicios.
                      li 
                        i.fas.fa-check
                        | Técnico de soporte: recibe las solicitudes clasificadas y atiende los servicios según su prioridad de respuesta.

                      li 
                        i.fas.fa-check
                        | Técnico prioritario: funciona como un “bombero” al cual se le asignan servicios vitales para el sistema “incendios” y él deberá “apagar” resolver con prioridad cada uno de ellos.

                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img3-slider-tema3.png', alt='Texto que describa la imagen').img-tarj-acorden
                    //figcaption Leyenda de la imagen

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .row
          .col-lg-10.cajon-color-buenas-pract
            .cajon.color-primario.p-4

              p Según las buenas prácticas establecidas, el sistema deberá almacenar una bitácora de servicios de cada dispositivo, también contar con la hoja de vida de cada uno de ellos, permitir el seguimiento e indicarle al usuario final que su solicitud fue resuelta; este a su vez podrá calificar el servicio recibido y así se van generando varios indicadores de calidad según corresponde, por ejemplo: los tiempos de respuesta, indicadores de gestión, cantidad de servicios atendidos al mes por el equipo y por cada técnico, entre otros.  
              p A continuación, se presenta un sitio web en el cual se podrá realizar una prueba por un periodo de 45 días para conocer el proceso de administración de un servicio y los recursos de red según las normas, estándares y modelos internacionales de administración TI. 


    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .row 
          .col-lg-5
              figure
                  img(src='@/assets/curso/temas/img-admin-plat-tema3.png', alt='Texto que describa la imagen').img-admin-plat-tema3
          
          .col-lg-7

              p Este es un recurso online que permite la administración de la plataforma tecnológica en una organización, hace uso de un plugin que permite reconocer todos los dispositivos de hardware conectados a la misma, posteriormente genera un inventario de dispositivos para los cuales estructura un plan de administración, control y seguimiento.  

              .col-lg-7
                a.anexo.mb-4.mb-lg-0(href="https://glpi-project.org/es/ " target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web Visitar GLPI Project.
        
    br

    separador

    br

    .row.container.justify-content-around.align-items-center

        #normas-y-estandares-de-los-data-center
        .titulo-segundo.color-primario
          h2 3.3 Normas y estándares de los data center

        .row 
          .col-lg-6
              
              figure
                  img(src='@/assets/curso/temas/img1-normas-data-center.png', alt='Texto que describa la imagen').img1-normas-data-center
       
          .col-lg-6
            p A través del siguiente vídeo podrá conocer sobre las normas y estándares vigentes para la certificación de un data center.
            
            a.anexo.mb-4.mb-lg-0(href="https://youtu.be/m9r73opxikg  " target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web Estándares Normas Guías y esas ensaladas en un Data Center – Teksar Labs
            
            h4 Normas y estándares nacionales e internacionales
            
            p Algunas certificaciones son requisitos obligatorios para el funcionamiento del data center, algunas otras son sugerencias de operación, administración y control del mismo.


    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .row.fondo-tarj-anexo-tema2.tarjeta.p-4
          .col-lg-2
            .icon-pdf-tarj-anexo-tema2
                img(src="@/assets/template/icono-pdf.svg")

          .col-lg-8

              h4.txt-tarj-anexo-tema2 Normas y estándares nacionales e internacionales
              p.txt-tarj-anexo-tema2 Para conocer un caso real de la implementación de buenas prácticas en un centro de datos, visualice el siguiente caso práctico de la licitación entregada por la Procuraduría General de la Nación, cuyo objetivo es reubicar el centro de datos según el siguiente anexo técnico:
              
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


        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img-normas-tar-color-tema3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Gracias al anexo técnico se pueden conocer las generalidades del data center, los estándares, reglamentos y buenas prácticas que se consideran implementar, especificaciones técnicas como el área para la planta eléctrica, UPS, espacios generales, cuartos de operaciones, máquinas, mecánicos, entre otros. Además, los sistemas que el contratista debe proveer como cableado estructurado, sistema eléctrico, aire acondicionado, sistema de control de fuego y acceso, monitoreo, iluminación, entre otros.


    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .row
            .col-lg-4

                figure
                    img(src='@/assets/curso/temas/img-final-tema3.png', alt='Texto que describa la imagen').img-final-tema3
     
            .col-lg-8

                p Se presentan las proyecciones de los sistemas eléctricos, normatividad para cada cuarto según requerimientos, equipos y dispositivos que irán en el centro de datos incluidas las sillas y los escritorios según la reglamentación técnica. Se presenta una tabla con el total de dispositivos eléctricos y las cargas que cada uno posee, tabla que permite calcular el total de carga (Potencia Total) que debe soportar la planta eléctrica, UPS y sistema eléctrico.
                p Para listar las pautas del mantenimiento, ya sea preventivo, predictivo o correctivo en un centro de datos, es imprescindible que se conozcan los criterios de manejo de incidentes según la normativa vigente y los estándares, por ello se tratará este tema que le permitirá reconocer a los actores en el proceso de prestación de servicios de mantenimiento a un data center, la estructura de distribución de los servicios y los tiempos de respuesta estimados según corresponda. 

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .row.fondo-tarj-anexo-tema2.tarjeta.p-4
          .col-lg-2
            .icon-pdf-tarj-anexo-tema2
              
                img(src="@/assets/template/icono-pdf.svg")

          .col-lg-8
              br
              h4.txt-tarj-anexo-tema2 Criterios de manejo de incidentes
              p.txt-tarj-anexo-tema2 Para identificar los criterios de manejo de incidentes en el centro de datos según la normatividad vigente y los estándares, consulte el siguiente material:
              
          .col-lg-2
            
            .icon-boton-tarj-anexo-tema2
              a.boton.boton--b(:href="obtenerLink('/downloads/anexo_6 Manejo incidentes.pdf')" target="_blank")
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
