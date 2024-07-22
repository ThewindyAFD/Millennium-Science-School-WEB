<template>
  <div class="background-container">
    <NavBarComponents />
    <div class="flex justify-center pt-24 md:pt-16 lg:pt-12 xl:pt-10 2xl:pt-8">
      <div class="content-wrapper p-6 rounded-lg">
        <p class="text-center">
          <img class="h-auto max-w-full rounded-lg" src="../assets/KH.png" alt="image description">
        </p>
        <div class="font-bold mt-6 text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-gray-600 text-center">
          千年科学学院
        </div>
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-64 h-px my-8 bg-gray-300 border-0 dark:bg-gray-700">
          <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white dark:bg-gray-900">
            <img src="../assets/MSS.png" style="width: 40px"/>
          </span>
        </div>
        <p class="text-center text-gray-500 dark:text-gray-400">
          Scientia, intelléctĭo, et futúrum
        </p>
        <p class="text-center text-gray-700 dark:text-gray-400">
          知识,理解及未来
        </p>
      </div>
      <div class="content-wrapper p-6 rounded-lg mt-3">
        <div>
          <div class="w-full mb-5">
            <CarouselComponents :images="images" />
          </div>
        </div>
        <div>
          <h1 class="flex items-center text-3xl font-extrabold dark:text-white text-gray-600">
            校园新闻
            <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
              news
            </span>
          </h1>
        </div>
        <hr class="w-64 h-px my-5 bg-gray-300 border-0 dark:bg-gray-700 w-full">
        <div class="flex flex-col md:flex-row justify-end">
          <div class="justify-items-start w-full md:w-2/4 mb-4 md:mb-0">
            <ImageCarousel :slides="carouselSlides" />
          </div>
          <div class="w-full md:w-2/4">
            <ListsComponents :users="users" />
          </div>
        </div>
        <div>
          <h1 class="flex items-center text-3xl font-extrabold dark:text-white text-gray-600">
            科研成果
            <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
              technology
            </span>
          </h1>
        </div>
        <hr class="w-64 h-px my-5 bg-gray-300 border-0 dark:bg-gray-700 w-full">
        <div>
          <div>
            <FullImgCardComponents
              :imageSrc="Hod"
              imageAlt="Image Description"
              title="通信AI-HOD"
              content="Hod是由千年科学学院自主研发的通信人工智能"
              description="communications unit AI"
            />
          </div>
        </div>
        <div>
          <h1 class="mt-5 flex items-center text-3xl font-extrabold dark:text-white text-gray-600" @click="handleClick">
            <router-link to="/clubs">
              <div>社团快讯</div>
            </router-link>
            <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
              club
            </span>
          </h1>
        </div>
        <hr class="w-64 h-px my-5 bg-gray-300 border-0 dark:bg-gray-700 w-full">
        <div>
          <TabsComponents :tabs="tabs"/>
        </div>
        <div>
          <h1 class="mt-5 flex items-center text-3xl font-extrabold dark:text-white text-gray-600">
           校园活动
            <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
             <img src="../assets/MSSB.png" style="width: 40px"/>
            </span>
          </h1>
        </div>
        <hr class="w-64 h-px my-5 bg-gray-300 border-0 dark:bg-gray-700 w-full">
        <div>
          <video-section
            title="基沃托斯晄轮大会"
            video-link="//player.bilibili.com/player.html?isOutside=true&aid=1656000813&bvid=BV1bE421A7xq&cid=1610854659&p=1"
            secondary-button-link=""
            secondary-button-text="了解更多"
            primary-button-link=""
            primary-button-text="ON YOUR MARK"
            description="距离基沃托斯大运动会【晄轮大会】的开幕式只剩一天。
千禧年的学员们能克服意料之外的事故，顺利完成大运动会的准备吗？"/>
        </div>
        <div>
          <h1 class="mt-5 flex items-center text-3xl font-extrabold dark:text-white text-gray-600">
            招生计划
            <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
            2024
            </span>
          </h1>
        </div>
        <hr class="w-64 h-px my-5 bg-gray-300 border-0 dark:bg-gray-700 w-full">
        <div class="text-gray-600">
          <InputJumbotronComponents
            bannerText="欢迎来到千年科学学园"
            heading="千年科学学院2024年普通高中招生计划"
            description="千年科学学园致力于为每一位学子提供最优质的教育和最先进的学习环境。如果你渴望在科技领域有所作为，千年科学学园将是你实现梦想的最佳选择。期待你的加入，一起探索知识、理解世界，开创未来！"
          />
          <div class="py-3 flex items-center text-sm text-gray-500 before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
            千年科学学园招生办
          </div>
        </div>
      </div>
    </div>
    <FooterComponents class="mt-10"/>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NavBarComponents from "components/NavBarComponents.vue";
import ListsComponents from "components/ListsComponents.vue";
import ImageCarousel from "components/ImageCarousel.vue";
import FullImgCardComponents from "components/FullImgCardComponents.vue";
import TabsComponents from "components/TabsComponents.vue";
import VideoSection from "components/VideoSection.vue";
import InputJumbotronComponents from "components/InputJumbotronComponents.vue";
import FooterComponents from "components/FooterComponents.vue";
import CarouselComponents from "components/CarouselComponents.vue";

import Hod from '../assets/Hod_Banner_1.webp'

import NoO from '../assets/ms.png'
import NoT from '../assets/258489.jpg'
import NoTh from '../assets/1b92245aa3d121e12c851273084353dd6627df0b_raw_0652.jpg'
import NoF from '../assets/Screenshot_2024-05-14-15-29-33-149_com.nexon.blue.png'

import NoaIcon from '../assets/students/Noa_Icon.webp'
import YuukaIcon from '../assets/students/Yuuka_Icon.webp'
import router from "src/router";

const showNewSection = ref(false);
const slide = ref(1);
const images = [NoO, NoT, NoTh, NoF];

const users = [
  {
    title: '校领导讲授党纪学习教育专题党课',
    username: 'Ushio Noa',
    imgSrc: NoaIcon,
    publishtime: '2024-7-18'
  },
  {
    title: ' 千年科学学院举行2024年思想政治理论课“点”上实践教学出征仪式',
    username: 'Ushio Noa',
    imgSrc: NoaIcon,
    publishtime: '2024-7-18'
  },
  {
    title: '千年科学学院与千年自治区人民政府举行《战略合作协议》签约仪式',
    username: 'Ushio Noa',
    imgSrc: NoaIcon,
    publishtime: '2024-7-18'
  },
  {
    title: 'ON YOUR MARK ~基沃托斯晄轮大会~',
    username: 'Ushio Noa',
    imgSrc: NoaIcon,
    publishtime: '2024-7-18'
  },
  {
    title: '千年科学学院2024年7月18日普通高中生招生名单',
    username: 'Hayase Yūka',
    imgSrc: YuukaIcon,
    publishtime: '2024-7-18'
  },
  {
    title: '【夏莱报】千年科学学院开展2024年思想政治理论课“点”上实践教学',
    username: 'Hayase Yūka',
    imgSrc: YuukaIcon,
    publishtime: '2024-7-18'
  }
]

const carouselSlides = [
  {
    name: 'first',
    imgSrc: 'https://cdn.quasar.dev/img/mountains.jpg',
    title: 'First stop',
    subtitle: 'Mountains'
  },
  {
    name: 'second',
    imgSrc: 'https://cdn.quasar.dev/img/parallax1.jpg',
    title: 'Second stop',
    subtitle: 'Famous City'
  },
  {
    name: 'third',
    imgSrc: 'https://cdn.quasar.dev/img/parallax2.jpg',
    title: 'Third stop',
    subtitle: 'Famous Bridge'
  }
]

const tabs = [
  {
    label: '研讨会',
    active: true,
    content: {
      users: [
        {
          title: '校领导讲授党纪学习教育专题党课',
          username: 'Ushio Noa',
          imgSrc: NoaIcon,
          publishtime: '2024-7-18'
        },
        {
          title: ' 千年科学学院举行2024年思想政治理论课“点”上实践教学出征仪式',
          username: 'Ushio Noa',
          imgSrc: NoaIcon,
          publishtime: '2024-7-18'
        },
        {
          title: '千年科学学院与千年自治区人民政府举行《战略合作协议》签约仪式',
          username: 'Ushio Noa',
          imgSrc: NoaIcon,
          publishtime: '2024-7-18'
        },
        {
          title: 'ON YOUR MARK ~基沃托斯晄轮大会~',
          username: 'Ushio Noa',
          imgSrc: NoaIcon,
          publishtime: '2024-7-18'
        },
        {
          title: '千年科学学院2024年7月18日普通高中生招生名单',
          username: 'Hayase Yūka',
          imgSrc: YuukaIcon,
          publishtime: '2024-7-18'
        },
        {
          title: '【夏莱报】千年科学学院开展2024年思想政治理论课“点”上实践教学',
          username: 'Hayase Yūka',
          imgSrc: YuukaIcon,
          publishtime: '2024-7-18'
        }
      ],
    },
  },
  {
    label: '游戏开发部',
    active: false,
    content: {
      users: [
        {
          title: '校领导讲授党纪学习教育专题党课',
          username: 'Ushio Noa',
          imgSrc: NoaIcon,
          publishtime: '2024-7-18'
        }
      ],
    },
  },
  {
    label: '贝里塔斯',
    active: false,
    content: {
      users: [
        {
          title: '校领导讲授党纪学习教育专题党课',
          username: 'Ushio Noa',
          imgSrc: NoaIcon,
          publishtime: '2024-7-18'
        }
      ],
    },
  },
  {
    label: '超现象特务部',
    active: false,
    content: {
      users: [
        {
          title: '校领导讲授党纪学习教育专题党课',
          username: 'Ushio Noa',
          imgSrc: NoaIcon,
          publishtime: '2024-7-18'
        }
      ],
    },
  },
  {
    label: 'Cleaning&Clearing',
    active: false,
    content: {
      users: [
        {
          title: '校领导讲授党纪学习教育专题党课',
          username: 'Ushio Noa',
          imgSrc: NoaIcon,
          publishtime: '2024-7-18'
        }
      ],
    },
  },
  {
    label: '训练部',
    active: false,
    content: {
      users: [
        {
          title: '校领导讲授党纪学习教育专题党课',
          username: 'Ushio Noa',
          imgSrc: NoaIcon,
          publishtime: '2024-7-18'
        }
      ],
    },
  },
];

const handleClick = () => {
  router.push('/clubs');
};

const handleScroll = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  showNewSection.value = scrollPosition > 300;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.background-container {
  background-image: url('../assets/5919634997432379839.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  width: 66.6667%; /* 2/3 of the current width */
}

@media (min-width: 770px) {
  .content-wrapper {
    background-color: rgba(255, 255, 255, 0.7); /* Add a semi-transparent background for resolutions 768px and above */
    border-bottom: none; /* Hide border-bottom for resolutions 768px and above */
    border: #c9c9c9 1px solid;
  }
}

@media (min-width: 1024px) {
  .content-wrapper {
    width: 66.6667%; /* Adjust for larger screens if needed */
  }
}

@media (max-width: 1023px) {
  .content-wrapper {
    width: 90%; /* Adjust for smaller screens if needed */
  }
}

@media (max-width: 768px) {
  .background-container {
    background-image: none; /* Hide background image for resolutions below 768px */
  }

  .content-wrapper {
    width: 100%; /* Make content-wrapper full width for resolutions below 768px */
    padding-left: 1rem; /* Optional: Add some padding to the sides */
    padding-right: 1rem; /* Optional: Add some padding to the sides */
  }

  .flex {
    padding-left: 0; /* Reset padding */
    padding-right: 0; /* Reset padding */
  }
}

@media (max-width: 768px) {
  h1.text-3xl {
    font-size: 2xl; /* Adjust the font size for smaller screens */
  }

  .flex-col {
    flex-direction: column;
  }

  .text-3xl {
    font-size: 2xl; /* Reduce the font size for resolutions below 768px */
  }

  .text-2xl {
    font-size: xl; /* Reduce the font size for resolutions below 768px */
  }
}

::-webkit-scrollbar {
  display: none;
}

</style>
