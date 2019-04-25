<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <x />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import x from '../../components/Chart/line'
export default {
  name: 'Dashboard',
  components: {
    x: x
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted() {
    console.log(this.$moment())
    console.log(this.$chart)
    console.log(this.$el)
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
