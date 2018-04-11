<script>
import { solveEstiloAprendizagem } from '../../services'
export default {
  data () {
    return {
      title: 'Estilo de Aprendizagem',
      definition: `Este questionário está desenhado para conhecer seu Estilo de Aprendizagem.<br>
        Este questionário é anônimo.<br>
        Neste questionário não existem respostas corretas ou incorretas.<br>
        <span class="font-weight-bold">Autores: </span>Catalina M. Alonso, Domingo J. Galego e Peter Honey<br>
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
  },
  methods: {
    onfocus () {
      let imgs = document.getElementsByClassName('imgs')
      for (const element of imgs) {
        element.style.cursor = 'pointer'
      }
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
    <b-button v-b-modal.resultado variant="primary" class="verify">Verificar</b-button>

    <b-modal id="resultado" title="Resultado" ok-only=true>
      <div>
        <b-row>
          <b-col cols="4" sm="2"><b-img id="reflexivo" class="imgs" v-on:mouseover="onfocus()" src="../../assets/reflexivo.png" fluid/></b-col>
          <b-popover target="reflexivo" title="Estilo Reflexivo" triggers="click blur"
          content="Tem como elemento central como busca e pesquisa, no qual  o usuário aprende mediante a busca, seleção e organição do conteúdos. Os materiais de aprendizagem devem estar voltados a construções e sínteses que englobem a pesquisa  de um conteúdo. Portanto, sua denominação é estilo de uso busca e pesquisa  espaço virtual.">
          </b-popover>
          <b-col cols="8" sm="10">
            <p class="head-text reflexivo">Estilo Reflexivo</p>
            <p class="info-percent">{{ reflexivo }}%</p>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row>
          <b-col cols="4" sm="2"><b-img id="ativo" class="imgs" v-on:mouseover="onfocus()" src="../../assets/ativo.png" fluid/></b-col>
          <b-popover target="ativo" title="Estilo Ativo" triggers="click blur"
          content="Este nível de uso considera a participação como elemento central, no qual o indivíduo deve ter a ambiência do espaço. Além disso, para realizar um processo de aprendizagem no virtual, o nível A nescessita de metodologias e materiais que priorizem o contato com grupos online, que solicite buscar informações online, realizar trabalhos em grupo, realizar fóruns de discussão e dar ações aos materiais desenvolvidos. Portando, sua denominação é estilo de uso participativo no espaço virtal.">
          </b-popover>
          <b-col cols="8" sm="10">
            <p class="head-text ativo">Estilo Ativo</p>
            <p class="info-percent">{{ ativo }}%</p>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row>
          <b-col cols="4" sm="2"><b-img id="teorico" class="imgs" v-on:mouseover="onfocus()" src="../../assets/teorico.png" fluid/></b-col>
          <b-popover target="teorico" title="Estilo Teórico" triggers="click blur"
          content="Tem como elemento central para a aprendizagem a necessidade de desenvolver atividades que valorizem os aplicativos para gerar conteúdos e atividades de planejamento. Essas atividades devem basear-se em teorias e fundamentos sobre o que está desenvolvendo. Ficou denominado como estilo de estruturação e planejamento no espaço virtual">
          </b-popover>
          <b-col cols="8" sm="10">
            <p class="head-text teorico">Estilo Teórico</p>
            <p class="info-percent">{{ teorico }}%</p>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row>
          <b-col cols="4" sm="2"><b-img id="pragmatico" class="imgs" v-on:mouseover="onfocus()" src="../../assets/pragmatico.png" fluid/></b-col>
          <b-popover target="pragmatico" title="Estilo Pragmático" triggers="click blur"
          content="Tem como elemento central para a aprendizagem a necessidade de realização de serviços online e a rapidez na realização desse processo. Viabilizar  com rapidez é um dos eixos centrais deste estilo de uso; utilizar o espaço virtual como um espaço de ação e produção. Foi denominado de estilo de ação concreta e produção no espaço virtual.">
          </b-popover>
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
.verify {
  margin-bottom: 32px
}
</style>
