<script setup>
</script>

<template>
  <el-container style="min-height: 100vh">
    <el-header>
      <el-menu mode="horizontal" :ellipsis="false" router>
        <el-menu-item index="/">
          <span style="font-size: 20px; font-weight: bold">My Blog</span>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style>
body {
  margin: 0;
}
</style>
