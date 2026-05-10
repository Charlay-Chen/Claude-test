<script setup>
import { ref } from 'vue'

const count = ref(0)
const input = ref('')
const tableData = ref([
  { id: 1, name: '张三', age: 28, address: '北京市' },
  { id: 2, name: '李四', age: 32, address: '上海市' },
  { id: 3, name: '王五', age: 25, address: '广州市' },
])

const dialogVisible = ref(false)
</script>

<template>
  <div class="container">
    <h1>Vue3 + Element Plus</h1>

    <!-- 按钮和计数器 -->
    <el-card class="card">
      <template #header>计数器</template>
      <div class="counter-area">
        <el-button type="primary" @click="count++">点击 +1</el-button>
        <el-button type="danger" @click="count = 0">重置</el-button>
        <span class="count-text">计数: {{ count }}</span>
      </div>
    </el-card>

    <!-- 输入框 -->
    <el-card class="card">
      <template #header>输入框</template>
      <el-input v-model="input" placeholder="请输入内容" />
      <p v-if="input">你输入了: {{ input }}</p>
    </el-card>

    <!-- 表格 -->
    <el-card class="card">
      <template #header>表格</template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column prop="age" label="年龄" width="100" />
        <el-table-column prop="address" label="地址" />
      </el-table>
    </el-card>

    <!-- 对话框 -->
    <el-card class="card">
      <template #header>对话框</template>
      <el-button type="success" @click="dialogVisible = true">打开对话框</el-button>
      <el-dialog v-model="dialogVisible" title="提示">
        <p>这是一个 Element Plus 对话框</p>
        <template #footer>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </template>
      </el-dialog>
    </el-card>
  </div>
</template>

<style>
body {
  margin: 0;
  background: #f5f5f5;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
}
h1 {
  text-align: center;
  color: #409eff;
}
.card {
  margin-bottom: 16px;
}
.counter-area {
  display: flex;
  align-items: center;
  gap: 12px;
}
.count-text {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
</style>
