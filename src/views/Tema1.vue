<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Diagnóstico empresarial
    .row.bg-color2
      .col-12.px-5
        p.mb-5 ¿Para qué se realiza un diagnóstico empresarial? El siguiente video presenta un preámbulo a la temática y muestra por qué en las empresas lo utilizan.
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-10
            .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 Es así como en el ejercicio empresarial es muy importante contar con información fiable y disponible para la toma de decisiones; cada vez se requiere más información contextualizada y no aislada, lo que es normal dado que las empresas tienen un comportamiento sistémico, sus decisiones son integradas y sistémicas, por lo cual el diagnóstico empresarial se constituye en una herramienta que faculta gerencial y colectivamente a quienes trabajan en las empresas.
        p Un diagnóstico empresarial es un método de investigación que las organizaciones realizan para determinar el estado de competitividad y condiciones en que se opera en la actualidad. 
        p.mb-5 Se puede decir que es la identificación o determinación del estado actual y real de la organización, el marco de referencia de operación, que sirve para tomar decisiones frente a logros esperados o metas proyectadas.
        .row.justify-content-center.mb-5(data-aos="fade-right")
          .col-lg-8
            .bloque-texto-c.color-secundario.p-4
              i.fas.fa-quote-right
              h4.my-2 Hoy por hoy es una herramienta de gestión que permite identificar las debilidades y fortalezas 
              span - ATA, 2021
    p.text-center.mb-5 El proceso incluye la evaluación de:
    .row.justify-content-around.mb-5(data-aos="fade-left")
      .col-9.col-sm-6.col-md-4.col-xl-2
        .row.bg-color3.p-1.h-100
          .col-12.px-0.bg-img
            figure
              img(src='@/assets/curso/tema1/img2.png')
          .col-12.p-2.bg-txt
            p.mb-0.text-center.text-white #[b Productos]
      .col-9.col-sm-6.col-md-4.col-xl-2
        .row.bg-color3.p-1.h-100
          .col-12.px-0.bg-img
            figure
              img(src='@/assets/curso/tema1/img3.png')
          .col-12.p-2.bg-txt
            p.mb-0.text-center.text-white #[b Servicios]
      .col-9.col-sm-6.col-md-4.col-xl-2
        .row.bg-color3.p-1.h-100
          .col-12.px-0.bg-img
            figure
              img(src='@/assets/curso/tema1/img4.png')
          .col-12.p-2.bg-txt
            p.mb-0.text-center.text-white #[b Estrategia de ventas]
      .col-9.col-sm-6.col-md-4.col-xl-2
        .row.bg-color3.p-1.h-100
          .col-12.px-0.bg-img
            figure
              img(src='@/assets/curso/tema1/img5.png')
          .col-12.p-2.bg-txt
            p.mb-0.text-center.text-white #[b Marketing]
      .col-9.col-sm-6.col-md-4.col-xl-2
        .row.bg-color3.p-1.h-100
          .col-12.px-0.bg-img
            figure
              img(src='@/assets/curso/tema1/img6.png')
          .col-12.p-2.bg-txt
            p.mb-0.text-center.text-white #[b Publicidad]
    p.mb-5.text-center Lo que permitirá descubrir cuáles son los puntos fuertes y débiles para actuar en consecuencia.
    .row.mb-5
      .col-lg-8.p-3.bg-color4
        .row.align-items-center.mt-2
          .col-1
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img2.svg', style="width: 20px").m-auto
          .col
            p.mb-0 #[b Importancia del diagnóstico empresarial]
    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-left")
        .bloque-texto-f.color-secundario.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-regular.bloque-texto-f__texto El objetivo principal de un diagnóstico empresarial es sensibilizar sobre las necesidades de cambio y mejora que la empresa pueda tener. En muchas ocasiones el éxito comercial y la generación de beneficios se confunden con competitividad, lo que puede cambiar en mediano y largo plazo dado que no evolucionan los procesos, la innovación de productos y el servicio, entre otros aspectos, convirtiendo la empresa en un ente reactivo ante las adversidades, y no en un ente proactivo que esté a la vanguardia, es así como el diagnóstico empresarial adquiere importancia en las empresas, porque permite hacer un ejercicio de sensibilización sobre la necesidad de cambio y mejora de estas.
          .bloque-texto-f__autor.mb-3
            h4.mb-0 -Laurence, 2014.
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/tema1/img7.png')
      .col-lg-10.mb-5
        p El diagnóstico permite la autorreflexión, cohesión y alineación institucional, reactivando la motivación y satisfacción de los empleados y participantes, debido a que evidencia un sentido de aporte para la identificación de problemas y propuestas de soluciones, la construcción de nuevos valores y capacidades productivas que son el futuro de la empresa.
      .col-lg-8.p-3.bg-color5
        .row
          .col-12.mb-2
            figure
              img(src='@/assets/curso/tema1/img4.svg', style="width: 20px")
        .row.align-items-center
          .col
            p.mb-0.text-center #[span.txt-deco1 ¿]Qué factores se deben tener en cuenta para que un diagnóstico sea exitoso#[span.txt-deco1 ?]
          .col-auto
            a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
              span Observar
              i.fas.fa-search-plus
              .indicador--click(v-if="mostrarIndicador")
        .row
          .col-12.mt-2
            figure.d-flex.justify-content-end
              img(src='@/assets/curso/tema1/img5.svg', style="width: 20px")
    ModalA.bg-color6(:abrir-modal.sync="modal1")
      .row.align-items-center.justify-content-center
        .col-auto
          figure
            img(src='@/assets/curso/tema1/img6.svg', style="width: 350px").m-auto
        .col
          p.mb-0 El objetivo principal de un diagnóstico empresarial es sensibilizar sobre las necesidades de cambio y mejora que la empresa pueda tener. En muchas ocasiones el éxito comercial y la generación de beneficios se confunden con competitividad, lo que puede cambiar en mediano y largo plazo dado que no evolucionan los procesos, la innovación de productos y el servicio, entre otros aspectos, convirtiendo la empresa en un ente reactivo ante las adversidades, y no en un ente proactivo que esté a la vanguardia, es así como el diagnóstico empresarial adquiere importancia en las empresas, porque permite hacer un ejercicio de sensibilización sobre la necesidad de cambio y mejora de estas (Laurence, 2014).
    .row.bg-color6
      .col-12.px-5
        p.my-5 Debe tener como punto de partida que el gerente de la empresa sea consciente de la necesidad de dicho estudio y asuma con responsabilidad el compromiso que conlleva, de él depende la aprobación para que la información requerida sea suministrada; con el fin de aportar para la solución y obtención de nuevas prácticas favorables para la empresa. Cabe destacar, que estos flujos de información y de estudios son confidenciales y que no acarrean en problema alguno por su manejo al interior de la empresa.
        .row.mb-5
          .col-lg-8.p-3.bg-color4
            .row.align-items-center.mt-2
              .col-1
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img2.svg', style="width: 20px").m-auto
              .col
                p.mb-0 #[b Tipos de diagnóstico]
        p.mb-5 Los tipos de diagnóstico empresarial son según Meza (2020):
        .row.justify-content-center.mb-5
          .col-lg-10
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--piel")
              .row(titulo="Diagnóstico cultural").align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img8.png', style="width: 350px")
                .col-lg-6
                  p Busca identificar o determinar cómo es el clima organizacional y la interrelación funcional de los procesos y personas en sí, en función del cumplimiento de sus labores funcionales y de los principios y valores institucionales de la empresa, así mismo, identificar cómo los factores sociales, espirituales, materiales y estructurales, inciden en el comportamiento organizacional.
                  p.mb-0 Este análisis se realizará mediante técnicas como entrevistas personales o colectivas y cuestionarios, entre otras.
              .row(titulo="Diagnóstico funcional").align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img9.png', style="width: 350px")
                .col-lg-6
                  p Permite establecer los factores incidentes en la comunicación organizacional que repercuten en la empresa en su función de operación entre los empleados en los diversos ámbitos productivos que posee, y que afecta la productividad por aspectos de armonización funcional.
                  p.mb-0 El uso de cuestionarios, entrevistas, sistematización de experiencias y análisis grupal permite establecer los mecanismos de comunicación generales de toda la organización.
              .row(titulo="Diagnóstico específico").align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img10.png', style="width: 350px")
                .col-lg-6
                  p.mb-0 Permite determinar el estado actual de un proceso específico en la empresa, unidad de negocio o línea de producto, analizando los diferentes aspectos relacionados como estados financieros, el proceso de mercadeo y ventas, la gestión y producción de la empresa y, la administración del talento humano, entre otros.
              .row(titulo="Diagnóstico organizacional integral").align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img11.png', style="width: 350px")
                .col-lg-6
                  p Abarca un análisis de todas las funciones que soportan la competitividad de la empresa, por lo cual incluye factores y aspectos de los anteriores tipos de diagnóstico, o un compendio de factores y aspectos en que la empresa está inmersa para su operación y desarrollo, esto implica un análisis de factores exógenos y endógenos determinando su posición relativa, si es favorable o no para la empresa, es decir, si conduce hacia el éxito o han desmejorado en su capacidad para el desarrollo y crecimiento.
                  p.mb-0 Regularmente tiene un enfoque eminentemente estratégico, pues de él se deriva la competitividad en el largo plazo por su integralidad (Portugal, s.f.).
        .row.mb-5
          .col-lg-8.p-3.bg-color4
            .row.align-items-center.mt-2
              .col-1
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img2.svg', style="width: 20px").m-auto
              .col
                p.mb-0 #[b Características del diagnóstico para la competitividad]
        p.mb-5 Estas son:
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img9.svg')
          .tarjeta.color-acento-botones.p-3(x="19%" y="87%" numero="+")
            h5.mb-2 Enfoque
            p.text-small Todo diagnóstico que se realice en una empresa debe aportar al desarrollo o fortalecimiento estratégico, esto es, que de sus resultados deben surgir mejoras o ventajas competitivas, haciendo que las ventajas sean sostenibles en el tiempo.
          .tarjeta.color-acento-botones.p-3(x="40%" y="87%" numero="+")
            h5.mb-2 Globalidad
            p.text-small Los diagnósticos deben ser transversales a toda la organización, es decir, todos los niveles de la empresa deben participar, el nivel directivo o estratégico, el táctico o de coordinación y el operativo; si los diagnósticos son específicos todos los niveles deben participar, procurando que las personas relacionadas con los procesos estén involucradas.
            p.text-small.mb-0 En un diagnóstico organizacional de competitividad es recomendable la participación interactiva de las diferentes áreas funcionales de estos tres niveles de la empresa, buscando las revelaciones de las interacciones horizontales dentro de un mismo nivel, ya que son ellas las que develan ante una dificultad o problema las posibles causas y por ende, saben cómo podrían armonizar su trabajo.
          .tarjeta.color-acento-botones.p-3(x="60.4%" y="87%" numero="+")
            h5.mb-2 Periódico
            p.text-small La toma de decisiones no debe ser un ejercicio que se realiza de repente e improvisado, las empresas llevan a cabo ejercicios diagnósticos con fines estratégicos, lo que implica una regularidad en la evaluación de las condiciones de cada momento futuro, previa a esas decisiones, por tanto, no debe ser esporádico o extraordinario, sino un ejercicio planeado, programado, bien sea para el seguimiento y control o para el establecimiento de nuevas medidas y orientaciones estratégicas, esto hace que los diagnósticos tengan un carácter periódico, que se vuelvan la herramienta gerencial o el marco referencial para la toma de decisiones.
          .tarjeta.color-acento-botones.p-3(x="81.3%" y="87%" numero="+")
            h5.mb-2 Participantes
            p.text-small Los diagnósticos se deben adelantar con base en la información suministrada por parte del personal interno y externo que está relacionado con los procesos a evaluar (empleados, freelance, contratistas, entre otros), promoviendo en ellos la aptitud y actitud para el desarrollo diagnóstico como una práctica sistemática en la empresa para el mejoramiento, desarrollo e innovación, y no meramente como un evento esporádico.
            p.text-small.mb-0 Es decir, se debe volver parte de la cultura de gestión de la empresa y de sus grupos estratégicos, solo ellos conocen y perciben aspectos sensibles que impactan las funciones, los procesos y a la empresa, pues no mucha de la información para la competitividad, el buen servicio y cumplimiento con la promesa de valor de la empresa es capturada por los medios convencionales de registros contables, ventas o producción.
    .row.mb-5
      .col-lg-8.p-3.bg-color4
        .row.align-items-center.mt-2
          .col-1
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img2.svg', style="width: 20px").m-auto
          .col
            p.mb-0 #[b Proceso para el diagnóstico empresarial]
    p.mb-5 La empresa al hacer un diagnóstico organizacional busca identificar aspectos propios de sus capacidades funcionales y de la cultura, sus principios y valores corporativos que son los aspectos que representan su competitividad y le permiten acercarse a los objetivos estratégicos de la planeación, ejercicio que se debe hacer desde el ámbito interno y externo.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p.text-center.mb-0 La siguiente figura presenta el ejemplo de un diagnóstico organizacional:
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 1]. Proceso del diagnóstico empresarial.
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img10.svg', style="width: 950px").m-auto
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
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
