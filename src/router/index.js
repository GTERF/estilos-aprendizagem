import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Main from '@/features/index/main'
import EstiloAprendizagem from '@/features/content/estiloAprendizagem'
import EspacoVirtual from '@/features/content/espacoVirtual'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/estilo-aprendizagem',
      name: 'EstiloAprendizagem',
      component: EstiloAprendizagem
    },
    {
      path: '/uso-do-espaco-virtual',
      name: 'EspacoVirtual',
      component: EspacoVirtual
    }
  ]
})
