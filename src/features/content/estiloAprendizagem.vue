<script>
import { solveEstiloAprendizagem } from '../../services'
export default {
  data () {
    return {
      title: 'Estilo de Aprendizagem',
      definition: `Este questionário está desenhado para conhecer seu Estilo de Aprendizagem.<br>
        Este questionário é anônimo.<br>
        Neste questionário não existem respostas corretas ou incorretas.<br>
        <span class="font-weight-bold">Autores: </span>Catalina M. Alonso e Daniela Melaré.<br>
        `,
      instructions: 'Assinale as afirmativas que têm significado com seu estilo de seu Estilo de aprendizagem.',
      selected: []
    }
  },
  computed: {
    options () {
      return this.$store.state.estiloAprendizagem
    },
    reflexivo () {
      return solveEstiloAprendizagem(this.selected).reflexivo
    },
    ativo () {
      return solveEstiloAprendizagem(this.selected).ativo
    },
    teorico () {
      return solveEstiloAprendizagem(this.selected).teorico
    },
    pragmatico () {
      return solveEstiloAprendizagem(this.selected).pragmatico
    }
  }
}
</script>

<template>
  <b-container>
    <b-img src="../../assets/banner.png" class="banner" fluid center/>
    <p class="title"><strong>{{ title }}</strong></p>

    <p class="head"><strong>Definição</strong></p>
    <p v-html="definition"></p>

    <p class="head"><strong>Instruções</strong></p>
    <p v-html="instructions"></p>
    <b-form-group>
      <b-form-checkbox-group stacked v-model="selected" :options="options"/>
    </b-form-group>
    <b-button v-b-modal.resultado>Verificar</b-button>

    <b-modal id="resultado" title="Resultado" ok-only=true>
      <div>
        <b-row>
          <b-col cols="4" sm="2"><b-img src="../../assets/reflexivo.png" fluid/></b-col>
          <b-col cols="8" sm="10">
            <p class="head-text reflexivo">Estilo Reflexivo</p>
            <p class="info-percent">{{ reflexivo }}%</p>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row>
          <b-col cols="4" sm="2"><b-img src="../../assets/ativo.png" fluid/></b-col>
          <b-col cols="8" sm="10">
            <p class="head-text ativo">Estilo Ativo</p>
            <p class="info-percent">{{ ativo }}%</p>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row>
          <b-col cols="4" sm="2"><b-img src="../../assets/teorico.png" fluid/></b-col>
          <b-col cols="8" sm="10">
            <p class="head-text teorico">Estilo Teórico</p>
            <p class="info-percent">{{ teorico }}%</p>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row>
          <b-col cols="4" sm="2"><b-img src="../../assets/pragmatico.png" fluid/></b-col>
          <b-col cols="8" sm="10">
            <p class="head-text pragmatico">Estilo Pragmático</p>
            <p class="info-percent">{{ pragmatico }}%</p>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </b-container>
</template>

<style>
.title {
  font-size: 16pt;
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 12pt;
}
.head {
  font-size: 12pt;
}
.container-content {
  margin: 30px 12px 12px 12px
}
.head-text {
  font-weight: bold;
  font-size: 1.2em;
}
.reflexivo {
  color: #E44661
}
.ativo {
  color: #50AFAF
}
.teorico {
  color: #AF8F3F
}
.pragmatico {
  color: #4B7F9A
}
.info-percent {
  font-size: 1.8em;
}
</style>
