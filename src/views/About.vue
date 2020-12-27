<template>
  <div class="about">
    <ul>
      <li>
        <router-link to="/about/a">a页面</router-link>
        <router-link to="/about/b">b页面</router-link>

      </li>
    </ul>

    <!-- 用于存放这个页面上的组件 -->
  <router-view/>
  </div>
</template>

<script>
// export default {
//   name:'About'
// }
</script>