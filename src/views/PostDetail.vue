<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { posts } from '../data/posts.js'

const route = useRoute()
const router = useRouter()

const postId = computed(() => parseInt(route.params.id))
const post = computed(() => posts.find(p => p.id === postId.value) || null)
</script>

<template>
  <div v-if="post" style="max-width: 800px; margin: 0 auto">
    <el-button @click="router.back()" style="margin-bottom: 16px">Back</el-button>
    <el-card>
      <template #header>
        <h2 style="margin: 0">{{ post.title }}</h2>
      </template>
      <p style="color: #909399; font-size: 13px">{{ post.date }}</p>
      <div style="margin-bottom: 16px">
        <el-tag v-for="tag in post.tags" :key="tag" size="small" style="margin-right: 6px">
          {{ tag }}
        </el-tag>
      </div>
      <div v-html="post.content" class="post-content"></div>
    </el-card>
  </div>
  <div v-else style="max-width: 800px; margin: 40px auto; text-align: center">
    <el-empty description="Post not found" />
  </div>
</template>

<style scoped>
.post-content :deep(h2) { margin-top: 24px; color: #303133; }
.post-content :deep(h3) { margin-top: 16px; color: #303133; }
.post-content :deep(p)  { line-height: 1.8; color: #606266; }
.post-content :deep(code) { background: #f5f5f5; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
.post-content :deep(blockquote) { border-left: 4px solid #409eff; padding-left: 16px; color: #909399; margin: 16px 0; }
</style>
