<script>
export default {
  methods: {
    goTo (link) {
      this.$router.push({name: link})
    },
    onfocus () {
      let choices = document.getElementsByClassName('choices')
      for (const element of choices) {
        element.style.cursor = 'pointer'
      }
    }
  }
}
</script>

<template>
  <b-container>
    <b-img src="../../assets/banner.png" class="banner" fluid center/>
    <b-row class="choices" @click="goTo('EstiloAprendizagem')" v-on:mouseover="onfocus()">
        <b-col cols="4">
            <b-img src="../../assets/questionario.png" fluid right/>
        </b-col>
        <b-col cols="8">
            <b-row class="title">
                Conheça seu estilo de aprendizagem
            </b-row>
            <b-row class="info">
                Indicado para estudantes do ensino presencial
            </b-row>
        </b-col>
    </b-row>
    <b-row class="choices" @click="goTo('EspacoVirtual')" v-on:mouseover="onfocus()">
        <b-col cols="4">
            <b-img src="../../assets/questionario.png" fluid right/>
        </b-col>
        <b-col cols="8">
            <b-row class="title">
                Conheça seu estilo de uso do espaço virtual
            </b-row>
            <b-row class="info">
                Indicado para estudantes do ensino a distância digital/semipresencial
            </b-row>
        </b-col>
    </b-row>
  </b-container>
</template>

<style>
.choices {
  margin-top: 32px;
}
.title {
  font-size: 16pt;
}
.info {
  font-size: 8pt;
  background-color: black;
  color: white;
  margin-right: 8px;
  padding: 8px;
  text-align: center;
  border-radius: 8px;
}
.banner {
  padding: 32px;
}
</style>
