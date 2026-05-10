<script setup>
import { posts } from '../data/posts.js'
</script>

<template>
  <div style="max-width: 800px; margin: 0 auto">
    <h2>Blog Posts</h2>
    <el-card v-for="post in posts" :key="post.id" style="margin-bottom: 16px">
      <template #header>
        <span style="font-size: 18px; font-weight: 600">{{ post.title }}</span>
      </template>
      <p style="color: #909399; font-size: 13px">{{ post.date }}</p>
      <p>{{ post.excerpt }}</p>
      <div style="margin-bottom: 12px">
        <el-tag v-for="tag in post.tags" :key="tag" size="small" style="margin-right: 6px">
          {{ tag }}
        </el-tag>
      </div>
      <el-button type="primary" size="small" @click="$router.push(`/post/${post.id}`)">
        Read More
      </el-button>
    </el-card>
  </div>
</template>
