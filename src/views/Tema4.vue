<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Métodos y técnicas diagnósticas
    p.mb-5 Todo diagnóstico empresarial requiere de tres fases en cuanto al desarrollo de la información objeto de estudio, lo cual se expresa en la siguiente figura. Para poder desarrollar dichas fases de información es necesario identificar y establecer las metodologías y técnicas según la naturaleza de la información a obtener. (Enred Consultoría, S.L., 2011)
    .titulo-sexto.color-acento-contenido.mb-5
        p.mb-0 #[b Figura 3]. Fases del proceso de información diagnóstica.
    .row.justify-content-center.mb-2
      .col-lg-4.mb-4(data-aos="zoom-in")
        .crd_hover_txt1
          .crd_hover_txt--img.mb-0         
            img(src="@/assets/curso/tema4/img1.png")
          .crd_hover_txt--font
            .row.bg-color11.align-items-center
              .col.p-2
                h4.text-white.mb-0 Generación de información
            .row.bg-color12
              .col
                .p-2
                  p Forma o instrumentos para recoger la información.
                  p Metodología para capturar la información.
                  p.mb-0 Momento o frecuencia de recolección.
      .col-lg-4.mb-4(data-aos="zoom-in")
        .crd_hover_txt1
          .crd_hover_txt--img.mb-0         
            img(src="@/assets/curso/tema4/img2.png")
          .crd_hover_txt--font
            .row.bg-color11.align-items-center
              .col.p-2
                h4.text-white.mb-0 Organización de la información
            .row.bg-color12
              .col
                .p-2
                  p Proceso de compilación y procesamiento de la información/compilación.
                  p Almacenamiento y soportes de la información.
                  p.mb-0 Ordenamiento de la información.
      .col-lg-4.mb-4(data-aos="zoom-in")
        .crd_hover_txt1
          .crd_hover_txt--img.mb-0         
            img(src="@/assets/curso/tema4/img3.png")
          .crd_hover_txt--font
            .row.bg-color11.align-items-center
              .col.p-2
                h4.text-white.mb-0 Análisis e interpretación de la información
            .row.bg-color12
              .col
                .p-2
                  p Clasificar la información  como aspectos conducentes al éxto y al desmejoramiento, ya sean internos o externos.
                  p.mb-0 Establecer sugerencias o posibles orientaciones a seguir.
    .row.bg-color8
      .col-12.px-5
        p.mb-5 Sin embargo, su finalidad y alcance denotan un sentido de evaluación de los aspectos funcionales y culturales de la empresa, por ende, se maneja información de carácter:
        .row.justify-content-center.mb-5
          .col-lg-10(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema4/img1.svg', style="width: 950px").m-auto
        .row.justify-content-center.mb-5
          .col-lg-6(data-aos="fade-right")
            .cajon.color-primario.p-4
              p.text-center.mb-0 Este levantamiento de información se puede realizar de manera:
        .row.justify-content-center.mb-5
          .col-lg-10(data-aos="fade-up")
            PasosA.color-primario.mb-4(tipo="n")
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  p Determinación de aspectos a evaluar por tipo de instrumento:
                  ul.lista-ul.mb-0
                    li 
                      i.lista-ul__vineta
                      | Entrevistas.
                    li 
                      i.lista-ul__vineta
                      | Encuestas, etc.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema4/img2.svg', style="width: 300px").m-auto
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/img3.svg', style="width: 300px").m-auto
                .col-lg-6
                  p.text-deco3 Diseñar el instrumento de captura de información, tipo de formulario:
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Cuestionario.
                    li 
                      i.lista-ul__vineta
                      | Entrevista.
                  p.text-deco3.mb-0 Según corresponda con preguntas abiertas o cerradas, por la naturaleza de la información: cuantitativa o cualitativa.
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  p Levantamiento de información y participación diagnóstica, cronograma de jornadas para el diligenciamiento de cuestionarios o encuestas. Agendar las entrevistas:
                  ul.lista-ul.mb-0
                    li 
                      i.lista-ul__vineta
                      | Personales.
                    li 
                      i.lista-ul__vineta
                      | Colectivas.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema4/img4.svg', style="width: 300px").m-auto
            .hr
        p.text-center.mb-5 Entre las principales técnicas de captura de información cualitativa o cuantitativa, según sea el caso, están:
    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--piel")
          .row(titulo="Entrevistas individuales").align-items-start
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img5.png', style="width: 350px")
            .col-lg-8
              p Es una conversación empática en un clima de confianza mutua, compresión y afinidad emocional entre el entrevistador y el entrevistado.
          .row(titulo="Análisis de documentos previos").align-items-start
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img6.png', style="width: 350px")
            .col-lg-8
              p Se delega un investigador que reunirá los documentos que contengan la información a analizar, los cuales pueden ser informes cuantitativos o cualitativos, que necesitan ser estudiados, a fin de comprender la información histórica y demás características propias de la empresa, organización, etc.
          .row(titulo="Debates en grupos pequeños").align-items-start
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img7.png', style="width: 350px")
            .col-lg-8
              p Se adelantan sesiones grupales con un tema central a indagar, promoviendo los diferentes puntos de vista e interpretación que nutran la discusión dirigida frente a algún factor o variable y problema específico.
          .row(titulo="Entrevista colectiva").align-items-start
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img8.png', style="width: 350px")
            .col-lg-8
              p A partir de la convocatoria de un grupo de personas, el moderador o entrevistador aplicará una serie de preguntas registrando las respuestas diferenciadas y comunes, en un lenguaje amable.
          .row(titulo="Encuestas").align-items-start
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img9.png', style="width: 350px")
            .col-lg-8
              p Corresponde al diligenciamiento de formularios, que por medio de preguntas de los diferentes factores y aspectos a diagnosticar, busca que los participantes del diagnóstico expresen su percepción.
          .row(titulo="Autoevaluaciones").align-items-start
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img10.png', style="width: 350px")
            .col-lg-8
              p Se realiza con formularios o cuestionarios de consulta para obtener respuesta a partir de la reflexión de los trabajadores sobre los aspectos o factores.
        p Según Hernández Sampieri en Metodología de la investigación, los instrumentos de recolección de datos más usados son:
    .titulo-sexto.color-acento-contenido.mb-5
      p.mb-0 #[b Figura 4]. Técnicas de captura de información.
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema4/img5.svg').m-auto
      figcaption Nota. Tomado de Hernández Sampieri (s.f.). Metodología de la investigación.
    p.mb-5 Tanto las entrevistas como las encuestas manejan formularios para realizar las preguntas, que dependiendo de la naturaleza de la información pueden ser de pregunta cerrada o abierta cuando se busca información descriptiva.
    .cajon.color-acento-botones.p-4.mb-5(data-aos="fade-left")
      p.mb-0.text-center El moderador de estas técnicas debe promover y facilitar que se responda con precisión a preguntas tipo: qué, cómo, dónde, etc., las cuales deben estar orientadas a obtener datos de medidas cuantitativas y hechos objetivos, hábitos y opiniones.
    p.mb-5 En relación con el tamaño de la muestra a utilizar, dependiendo el tamaño de la empresa y del número de empleados, será necesario desarrollar y aplicar técnicas de muestreo como:
    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .row
          .col-md-6.col-lg.tarjeta--tabla.p-4
            .row.justify-content-center.mb-4
              .col-10
                img(src='@/assets/curso/tema4/img6.svg', style="width: 150px").m-auto
            h4 Aleatoria simple
            p Se “enumeran” todos los integrantes de la población a estudiar y se extrae una muestra al azar.
            p.mb-0 Esta forma de muestreo es la más simple, pero en los hechos solo es aplicable cuando se trabaja con bases de datos suministradas por el cliente.
          .col-md-6.col-lg.tarjeta--tabla.p-4
            .row.justify-content-center.mb-4
              .col-10
                img(src='@/assets/curso/tema4/img7.svg', style="width: 150px").m-auto
            h4 Muestra estratificada
            p Considera subcategorías al interior de la población a estudiar en sí (estratos), por ejemplo, clientes que pueden ser mayoristas, minoristas, detal, etc. De tal manera que se obtenga información homogénea entre una estatificación y otra.
          .col-md-6.col-lg.tarjeta--tabla.p-4
            .row.justify-content-center.mb-4
              .col-10
                img(src='@/assets/curso/tema4/img8.svg', style="width: 150px").m-auto
            h4 Muestreo representativo
            p La empresa y el líder del diagnóstico pueden aplicar algún tipo de muestreo que consideren sea representativo, siendo lo mejor en empresas pequeñas y medianas, la aplicación de muestras censales, es decir, a toda la población de la empresa, en todos los niveles jerárquicos, las cuales se pueden ajustar según su rol.

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
