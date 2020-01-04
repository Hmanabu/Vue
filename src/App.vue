<template>
  <div>
    <myheader></myheader>
    <router-view></router-view>
  <myfooder></myfooder>
  </div>
</template>

<script>
//header load
import myheader from './components/myheader';
import myfooder from './components/myfooder'
export default {
    components: {
      myheader,
      myfooder
    },
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      clear() {
        this.msg = ''
      }
    }
}
</script>
