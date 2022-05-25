<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-0.pt-0.pb-5

    .row.justify-content-center.bg-color1.mt-0
      .col-11
        .row.justify-content-center
          .col-lg-12
            figure.my-5
              img(src="@/assets/curso/sintesis.svg", alt="alt")

</template>

<script>
export default {
  name: 'Sintesis',
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
