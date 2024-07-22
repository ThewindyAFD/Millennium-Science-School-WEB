<template>
  <div>
    <header :class="['header fixed w-full top-0 z-10 px-4 text-dark', { 'scrolled': hasScrolled }]" @scroll="handleScroll">
      <div class="toolbar">
        <div class="toolbar-title">
          <img src="../assets/M.png" class="responsive-logo">
          <div class="nav-container" :class="{ 'small-screen': isSmallScreen }">
            <div v-if="!isSmallScreen" class="nav-links text-base">
              <router-link to="/" class="flex items-center p-2 text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group nav-link">
                <div class="nav-item">学校概况</div>
              </router-link>
              <router-link to="/clubs" class="flex items-center p-2 text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group nav-link">
                <div class="nav-item">社团构成</div>
              </router-link>
              <router-link to="/research" class="flex items-center p-2 text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group nav-link">
                <div class="nav-item">科学研究</div>
              </router-link>
              <router-link to="/admission" class="flex items-center p-2 text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group nav-link">
                <div class="nav-item">招生计划</div>
              </router-link>
              <router-link to="/academics" class="flex items-center p-2 text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group nav-link">
                <div class="nav-item">学生教务</div>
              </router-link>
              <router-link to="/community" class="flex items-center p-2 text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group nav-link">
                <div class="nav-item">学生社区</div>
              </router-link>
            </div>
          </div>
          <div v-if="isSmallScreen" class="expansion-menu text-left">
            <button @click="toggleDrawer" class="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    <!-- drawer component -->
    <div :class="['drawer', { 'drawer-open': isDrawerOpen }]" tabindex="-1" aria-labelledby="drawer-navigation-label">
      <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Millennium</h5>
      <button @click="toggleDrawer" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div class="py-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li>
            <router-link to="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ms-3">学校概况</span>
            </router-link>
          </li>
          <li>
            <router-link to="/clubs" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ms-3">社团构成</span>
            </router-link>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ms-3">科学研究</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ms-3">招生计划</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ms-3">学生教务</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span class="ms-3">学生社区</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="content" @scroll="handleScroll">
    <!-- 你的主要内容在这里 -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isSmallScreen = ref(false);
const isDrawerOpen = ref(false);
const hasScrolled = ref(false);

const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth <= 768;
};

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

const handleScroll = () => {
  if (window.innerWidth > 768) {
    hasScrolled.value = window.scrollY > 0;
  } else {
    hasScrolled.value = true;
  }
};

onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
  window.addEventListener('scroll', handleScroll);
  updateScreenSize(); // 初始化调用一次
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.header {
  background-color: rgb(253, 253, 253); /* 默认背景色 */
  color: black; /* 默认字体颜色 */
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  transition: opacity 0.3s ease-in-out; /* 添加透明度过渡效果 */
  opacity: 1; /* 初始透明度 */
  border-bottom: 1px solid #cfd3d9;
}

@media (min-width: 769px) {
  .header {
    opacity: 0; /* 768px 及以上分辨率初始透明度为 0 */
  }
  .header.scrolled {
    opacity: 1; /* 滚动后的透明度 */
  }
}

@media (min-width: 770px) and (max-width: 1024px) {
  .toolbar-title {
    justify-content: flex-start; /* 左对齐 */
  }

  .responsive-logo {
    margin-left: 40px; /* 向左移动 */
    width: 150px; /* 放大 */
  }

  .nav-links {
    gap: 2%; /* 增加间距 */
    margin-left: 20px; /* 增加左边距 */
    overflow: hidden; /* 防止超出视图 */
  }

  .nav-item {
    flex-shrink: 0; /* 防止项目缩小 */
  }
}

@media (min-width: 770px) {
  .header {
    border-bottom: 1px solid #cfd3d9;
  }
}

@media (min-width: 770px) {
  .header {
    border-bottom: 1px solid #cfd3d9;
  }
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.toolbar-title {
  display: flex;
  align-items: center;
  width: 100%;
}

.menu-button {
  margin-right: 1rem;
}

@media (min-width: 768px) {
  .menu-button {
    margin-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .menu-button {
    margin-right: 2rem;
  }
}

.responsive-logo {
  width: 100px;
  transition: transform 0.3s, width 0.3s;
}

@media (min-width: 320px) {
  .responsive-logo {
    width: 80px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}

@media (min-width: 375px) {
  .responsive-logo {
    width: 90px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}

@media (min-width: 425px) {
  .responsive-logo {
    width: 120px;
    margin-left: 30%;
    transform: translateX(-50%);
  }
}

@media (min-width: 600px) {
  .responsive-logo {
    width: 120px;
    margin-left: 5%;
    transform: scale(2);
  }
}

@media (min-width: 768px) {
  .responsive-logo {
    width: 120px;
    margin-left: 5%;
    transform: translateX(0);
  }
}

@media (min-width: 1024px) {
  .responsive-logo {
    width: 80px;
    margin-left: 15%;
    transform: scale(2.5);
  }
}

@media (min-width: 1440px) {
  .responsive-logo {
    width: 80px;
    margin-left: 23%;
    transform: scale(3);
  }
}

@media (min-width: 2560px) {
  .responsive-logo {
    width: 80px;
    margin-left: 30%;
    transform: scale(3.5);
  }
}

.nav-container {
  white-space: nowrap;
  width: 100%;
}

.nav-links {
  display: flex;
  gap: 0.5%;
  margin-left: 15%;
}

.nav-item {
  font-size: 16px;
  white-space: nowrap;
  padding: 0 2%;
  position: relative; /* 相对定位以便使用伪元素 */
  cursor: pointer; /* 鼠标悬停时显示手形图标 */
}

.nav-item::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #44a9f2; /* 下划线颜色 */
  transform: scaleX(0); /* 初始缩放 */
  transform-origin: center; /* 从右侧开始缩放 */
  transition: transform 0.5s ease-in-out; /* 过渡效果 */
}

.nav-item:hover::after {
  transform: scaleX(1); /* 鼠标悬停时完全显示 */
  transform-origin: center; /* 从左侧开始缩放 */
}

.small-screen {
  overflow-x: auto;
}

.expansion-menu {
  width: auto;
  margin-top: 0;
  margin-left: auto;
}

.content {
  padding-top: 60px;
}

@media (min-width: 425px) {
  .content {
    padding-top: 0px;
  }
}

@media (min-width: 375px) {
  .content {
    padding-top: 0px;
  }
}

@media (min-width: 320px) {
  .content {
    padding-top: 0px;
  }
}

.drawer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;
  height: 100vh;
  padding: 1rem;
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  background-color: white;
  width: 16rem;
  color: black;
}

.drawer-open {
  transform: translateX(0);
}

.dark .drawer {
  background-color: #1f2937;
  color: white;
}

.dark .drawer-open .text-gray-500 {
  color: white;
}

@media (max-width: 768px) {
  .toolbar-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .responsive-logo {
    margin-left: 30%;
    transform: scale(3);
  }

  .expansion-menu {
    margin-left: auto;
  }
}

@media (max-width: 425px) {
  .toolbar-title {
    padding-right: 16px;
  }

  .responsive-logo {
    margin-left: 35%;
    transform: scale(2.5);
  }
}

@media (max-width: 375px) {
  .toolbar-title {
    padding-right: 20px;
  }

  .responsive-logo {
    margin-left: 32%;
    transform: scale(3);
  }
}

@media (max-width: 320px) {
  .toolbar-title {
    padding-right: 0px;
  }

  .responsive-logo {
    margin-left: 25%;
    transform: scale(3);
  }
}

.nav-links {
  display: flex;
  gap: 3%;
  margin-left: 15%;
}

</style>
