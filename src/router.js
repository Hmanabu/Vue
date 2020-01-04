import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 自作したコンポーネントをimport
import Top from '@/components/Top'
import about from '@/components/news'
  import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    // デフォルトの定義（不要なら削除）
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // URLパスに対応するコンポーネントを定義
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/news',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
  ]
})
