<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Ciclo del diagnóstico empresarial
    .row.bg-color14
      .col-12.px-5
        p.mb-5 El proceso de diagnóstico empresarial debe ser un proceso cíclico, amparado en la auditoría del entorno y de los factores internos, dado que cualquier afectación a la capacidad competitiva, si es creciente y no se aprovecha, genera un lucro cesante, y si es negativa se está en condición de desventaja y se deja de crecer. Por esta razón, se dice que es un proceso dinámico y permanente, que debe ser monitoreado, verificando permanentemente el impacto creciente de las decisiones propositivas.
        .row.justify-content-center.my-5
          .col-lg-10
            .cajon.color-primario.p-4
              p.mb-0.text-center En la siguiente figura se establece el proceso cíclico del diagnóstico empresarial:
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 5]. Ciclo del diagnóstico empresarial.
        figure
          img(src='@/assets/curso/tema7/img1.svg').m-auto
    

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
