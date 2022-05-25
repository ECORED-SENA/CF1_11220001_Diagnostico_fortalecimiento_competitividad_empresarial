<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ámbito de participación: áreas de la empresa
    .row.bg-color10
      .col-12.px-5
        p.mb-5 Se sugiere que el ejercicio de diagnóstico no sea una actividad de la dirección o gerencia de la empresa, como un ejercicio discrecional, ocasional y repentino, debido a que la toma de decisiones se ha convertido en procesos sistemáticos y continuos, y serán los participantes de la empresa quienes conviertan en realidad las acciones a seguir, por  ser ellos mismos los responsables; la eficiencia del diagnóstico radica en que el equipo de personas de la empresa lideradas por un coordinador de diagnóstico, que puede ser de la empresa o un agente externo consultor, que identifique el estado actual y tendencia de las variables en las que están relacionados y promuevan por consenso las conclusiones y medidas de acción para el desarrollo.
        .row.align-items-center.bg-color9.mb-5
          .col-auto
            figure
              img(src='@/assets/curso/tema3/img1.svg', style="width: 400px").m-auto
          .col
            p Los procesos de diagnóstico se promueven desde los niveles estratégicos-directivos hasta los operativos, organizando líderes funcionales de los procesos de información, en un ambiente de armonía y de preparación para la reflexión, no de supervisión o de ajuste.
            p.mb-0 Si la empresa tiene una estructura funcional o de procesos bien definida, se compone un equipo capaz de recopilar información de cada una de estas instancias, en conformidad con la naturaleza de la información, con el fin de que sea compartida y analizada más adelante por todo el equipo, pero son ellos, por ser las fuentes primarias de dicha información, los encargados de prepararla.
        p.mb-5 Cada área funcional, compras, marketing, finanzas, entre otras, fijará un coordinador para llevar a cabo la canalización de la información de manera oportuna y guardando el principio de fiabilidad. Este ejercicio permitirá que las personas se orienten y dispongan de la información al momento de la captura y no se caiga en ejercicios especulativos, ver figura.
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-5
              p.mb-0 #[b Figura 2]. Niveles de participación diagnóstica según el ámbito del factor al que se relacionan.
            figure
              img(src='@/assets/curso/tema3/img2.svg', style="width: 950px").m-auto
              figcaption Nota. Tomado de Escobar (2009). Caso de estudio Organización empresarial.

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
