<template>
  <div class="button">
    <y-button>按钮</y-button>
    <y-button type="primary">按钮</y-button>
    <y-button type="success">成功按钮</y-button>
    <y-button type="warning">警告按钮</y-button>
    <y-button type="danger">错误按钮</y-button>
    <y-button type="info">info</y-button>
  </div>
</template>

<script>
import '../../public/svg.js'
import Button from '../../../../src/components/button/button'
export default {
    components:{
        'y-button': Button
    }
}
</script>

<style lang="scss" scoped>
</style>
