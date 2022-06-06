<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Levantamiento de información y participación diagnóstica
    .row.bg-color1
      .col-12.px-5
        .row.justify-content-center.mb-5
          .col-lg-10(data-aos="fade-left")
            .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4.mt-4
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/tema5/img1.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p Definidas las técnicas y la metodología se debe adelantar el diseño de los instrumentos cuestionario y entrevistas personales, colectivas y demás recursos para la captura de la información, bien sea por medios electrónicos o físicos.
                br
                br
                p.mb-0 Se sugiere consultar en la sección material complementario el anexo #[b Instrumento de cuestionario para el diagnóstico organizacional (W-R&M)], que lo orientará en el diseño de los instrumentos.
        p.text-center.mb-5 Los pasos para realizar el levantamiento de la información y la participación diagnóstica son:
        .row.justify-content-evenly.mb-5(data-aos="fade-down")
          .col-9.col-lg-4.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema5/img1.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  h4.text-center Directa
                  p.text-center Por interacción con los participantes.
          .col-9.col-lg-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema5/img2.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  h4.text-center Indirecta
                  p.text-center Por medio de observación.
        p.text-center.mb-5 Luego se continúa con el:
        .row.justify-content-center
          .col-lg-8.p-3.bg-color5(data-aos="fade-left")
            .row
              .col-12.mb-2
                figure
                  img(src='@/assets/curso/tema1/img4.svg', style="width: 20px")
            .row.align-items-center
              .col
                p.mb-0.text-center #[b Cronograma de Jornadas de aplicación de instrumentos]
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
                img(src='@/assets/curso/tema5/img3.svg', style="width: 350px").m-auto
            .col
              p.mb-0 Con los instrumentos diseñados y verificados en cuanto a su objetividad, y completitud de requerimiento de información para los factores o variables a evaluar, bien sea en medios físicos o electrónicos, redes, etc, se programarán los participantes y se les dará el tiempo suficiente para adelantar el cuestionario. En el caso de tratarse de entrevistas personales o colectivas, se debe hacer la convocatoria de dichas jornadas.

</template>

<script>
export default {
  name: 'Tema3',
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
