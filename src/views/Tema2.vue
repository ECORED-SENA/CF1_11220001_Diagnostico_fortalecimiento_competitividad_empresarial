<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Aspectos o factores competitivos a medir
    p.mb-5 La operación empresarial se da en un contexto de múltiples variables y aspectos que la afectan permanentemente, la cual ha aumentado su nivel de complejidad en los últimos años, debido a:
    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-left")
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width: 350px").m-auto
      .col-lg-7
        ul.lista-ul--color.mb-0
          li 
            i.lista-ul__vineta
            | 
            p.mb-0 Alta dinámica.
          li 
            i.lista-ul__vineta
            | 
            p.mb-0 Pluralidad de variables.
          li 
            i.lista-ul__vineta
            | 
            p.mb-0 Nuevos escenarios y actores.
          li 
            i.lista-ul__vineta
            | 
            p.mb-0 Efectos de la ruptura por la globalización e internacionalización para la actuación empresarial.
    .row.justify-content-center
      .col-lg-10.mb-5
        .bloque-texto-f.color-secundario.pt-4.px-5.mb-5.mt-4(data-aos="fade-right")
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-regular.bloque-texto-f__texto En este sentido, las empresas están llamadas a desarrollar capacidades competitivas mucho más exigentes y versátiles que les permita la sobrevivencia, donde si lo que se quiere es ser distinguido o llevar la delantera, deberá hacer muchos más esfuerzos a los que comúnmente realiza, es decir, desarrollar una ventaja competitiva creciente y sostenida, esto demanda un diagnóstico que pretende evaluar o anticipar las alternativas desde el presente.
          .bloque-texto-f__autor.mb-3
            h4.mb-0 -Rodríguez, 2012.
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/tema2/img1.png')
        p.mb-5 Por estas razones, realizar un diagnóstico empresarial con fines de fortalecimiento y competitividad requiere de la clasificación de variables, que agrupadas conforman lo que se denominan factores y aspectos a evaluar. Para hacer este ejercicio se parte del análisis de variables, identificando cuáles son controlables y cuáles no por parte de la empresa, determinando si afectan:
        .row(data-aos="fade-left")
          .col-lg-6.mb-4.mb-lg-0
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img2.svg' alt='AvatarTop')
              .tarjeta.tarjeta--piel1
                .p-3
                  h4 Positivamente
                  p Permiten los éxitos, logros de la empresa.
          .col-lg-6
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img3.svg' alt='AvatarTop')
              .tarjeta.tarjeta--piel1
                .p-3
                  h4 Contraposición
                  p Afectando negativamente la empresa.
    separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Factores y variables endógenos
    p.mb-5 Lo endógeno corresponde a lo interno, es decir, al conjunto de variables o aspectos a evaluar donde su comportamiento depende de las actuaciones de la empresa, por tanto, son absolutamente controlables. Se pueden identificar como:
    .row.justify-content-evenly.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .row.bg-color7
          .col-12.px-0.bg-img
            figure
              img(src='@/assets/curso/tema2/img2.png')
            .overlay
              p.txt-deco2 Las variables empresariales que impactan positivamente la empresa y facilitan su sostenibilidad y crecimiento.
          .col-12.p-2.bg-txt
            p.mb-0.text-center.text-white #[b Fortalezas]
      .col-lg-4
        .row.bg-color7
          .col-12.px-0.bg-img
            figure
              img(src='@/assets/curso/tema2/img3.png')
            .overlay
              p.txt-deco2 Variables que hacen que se pierda competitividad, afectando la eficiencia y efectividad empresarial.
          .col-12.p-2.bg-txt
            p.mb-0.text-center.text-white #[b Debilidades]
    p.text-center.mb-5 Entre esas variables y factores se encuentran:
    .tarjeta.tarjeta--piel.p-4.mb-5
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Gestión administrativa estratégica
            p.mb-0 Busca identificar los avances y dificultades frente al logro y cumplimiento de los preceptos de misión, visión, de los objetivos, principios y valores empresariales.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img5.png', style="width: 350px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Productos y servicios
            p.mb-0 Analiza el portafolio, las categorías, gama de productos, la rotación, productos más fuertes, la estacionalidad, la relación calidad/precio, los factores de diferenciación, promoción y otras consideraciones adicionales en función de la empresa, como por ejemplo, la asistencia técnica, garantías, el desarrollo de nuevos productos, la obsolescencia, vida útil y su cumplimiento, entre otros.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img6.png', style="width: 350px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Mercado de clientes
            p.mb-0 Estudia el ámbito geográfico, la segmentación, el posicionamiento, la participación, el modelo de negocio, los criterios de compra y factores de decisión, el censo de oferta o de competidores directos, clientes existentes, nuevos clientes potenciales, clientes insatisfechos, rotación de clientes, etc., (ver anexo Clasificación de clientes).
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img7.png', style="width: 350px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Procesos empresariales
            p.mb-0 Evalúa si son eficaces y suficientes los ámbitos de gestión, métodos, procedimientos, los sistemas de información, los procesos en línea y automatización, junto con los factores referentes a la producción, la cadena de valor, definiendo o revisando la necesidad de capacidades potencial y real, incluyendo la logística e innovación.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img8.png', style="width: 350px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 #[i Marketing] y comunicación
            p.mb-0 Analiza todos aquellos factores referentes al #[i marketing mix] y a la comunicación, tanto la realizada por los medios tradicionales, como la comunicación #[i online] a través de #[i banners], redes sociales, #[i blogs], portales, entre otros.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img9.png', style="width: 350px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Recursos humanos y organización
            p.mb-0 Analiza variables como la composición de la planta de personal, su estructura, organización, tipos de contratación, percepción del clima laboral y nivel de salarios.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img10.png', style="width: 350px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Posición financiera
            p.mb-0 Estudia los estados financieros: balance general, estafo de resultados, flujo de caja, cartera y su ciclo, la concentración de esta; cartera de proveedores (endeudamiento a corto o largo plazo), la calidad de la deuda, entre otros que considere cada empresa.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img11.png', style="width: 350px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Tecnología disponible
            p.mb-0 Evalúa la posición frente a cambios, si se cuenta con recursos actualizados, #[i software] integrado para crecer, plan de renovación, sustitución y mantenimientos.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img12.png', style="width: 350px").m-auto
    p.text-center.mb-5 En el siguiente video se hace una explicación más profunda de los factores endógenos:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    .row.bg-color8
      .col-12.px-5
        #t_2_2
        .titulo-segundo.color-acento-contenido
          h2 2.2 Factores y variables exógenos
        p Lo exógeno corresponde a lo externo, es decir, al conjunto de variables o aspectos a evaluar donde su comportamiento no depende de las actuaciones de la empresa, por tanto, no están bajo su control.
        p.mb-5 Las múltiples variables se agrupan según su naturaleza en factores, determinando un escenario de macroentorno y microentorno, permitiendo identificar cambios del escenario empresarial o del sector o industria y en donde se pueden identificar posibles oportunidades de crecimiento o amenazas que pueden representar dichas variables no controlables.
        figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img4.svg', style="width: 950px").m-auto
        p.text-center.mb-5 Los factores exógenos se dividen en:
        .row.justify-content-center.mb-5
          .col-lg-8
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Políticos y gubernamentales")
                .col-12
                  figure
                    img(src='@/assets/curso/tema2/img13.png', style="width: 650px").m-auto
                  p Contempla la legislación tributaria, comercial, laboral, etc., las políticas fiscales, el riesgo del país y la estabilidad normativa.
              .row(numero="2" titulo="Económicos")
                .col-12
                  figure
                    img(src='@/assets/curso/tema2/img14.png', style="width: 650px").m-auto
                  p Relacionados con la recesión o reactivación económica, inflación, la tasa de cambio, el porcentaje de desempleo, las tasas de interés, el ingreso per cápita, y demás variables que considere la empresa con que esté relacionada.
              .row(numero="3" titulo="Sociales y demográficos")
                .col-12
                  figure
                    img(src='@/assets/curso/tema2/img15.png', style="width: 650px").m-auto
                  p Tienen en cuenta la composición social por edades, género, ubicación rural o urbana, tasa de natalidad, tasa de mortalidad, esperanza de vida, nivel educativo, estratos socioeconómicos, hábitos sociales y culturales, religión, etnias, etc.
              .row(numero="4" titulo="Tecnológicos")
                .col-12
                  figure
                    img(src='@/assets/curso/tema2/img16.png', style="width: 650px").m-auto
                  p Asociados a la formación para su manejo, nuevos avances, comercialización y representación de esas nuevas tecnologías, inversión en I+D en el sector o actividad de la empresa, etc.
              .row(numero="5" titulo="Clientes")
                .col-12
                  figure
                    img(src='@/assets/curso/tema2/img17.png', style="width: 650px").m-auto
                  p Evalúa cómo se concentran, si están agremiados, cómo son las tendencias de consumo, si existe tasa de rotación de los clientes y, el poder de negociación que tienen según su clasificación.
              .row(numero="6" titulo="Proveedores")
                .col-12
                  figure
                    img(src='@/assets/curso/tema2/img18.png', style="width: 650px").m-auto
                  p Identifica su concentración y ubicación, están agremiados, existe flexibilidad de precios, existen materias primas, insumos y suministros sustitutos.
              .row(numero="7" titulo="Competencia")
                .col-12
                  figure
                    img(src='@/assets/curso/tema2/img19.png', style="width: 650px").m-auto
                  p Contempla cómo es el censo de composición de la oferta de la zona de la empresa, si existe rivalidad en el sector para la venta, tasa de crecimiento y presencia de nuevos actores, etc.
        p.mb-5 El ejercicio del diagnóstico busca identificar los efectos y en qué medida cada uno de estos factores del entorno podrían impactar positiva o negativamente a la empresa, denotando oportunidades a las que puede optar para su desarrollo, y cuáles son las amenazas en las que debe prepararse para minimizar el impacto y que no le afecte, sino que tenga cubierto dicho riesgo.
        .row.justify-content-center.my-5
          .col-lg-8(data-aos="fade-right")
            .cajon.color-primario.p-4
              p.mb-0.text-center En el siguiente video se hace una explicación más profunda de los factores exógenos:
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema2',
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
