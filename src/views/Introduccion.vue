<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-color1
      .col-12.px-5
        .row.justify-content-center.my-5(data-aos="fade-left")
          .col-lg-10
            .cajon.color-primario.p-4
              p.mb-0.text-center El siguiente video describe el sentido del diagnóstico empresarial como sustento para la toma de decisiones y el desarrollo competitivo en las empresas.
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/3DGUsp5fl1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
