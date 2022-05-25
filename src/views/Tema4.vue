<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
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
    p.mb-5 Sin embargo, su finalidad y alcance denotan un sentido de evaluación de los aspectos funcionales y culturales de la empresa, por ende, se maneja información de carácter:
    .row.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/tema4/img1.svg', style="width: 950px").m-auto

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
