<script setup lang="ts">
import { ref } from 'vue';

interface PotalItem {
  name: string
  type?: string
  id: string
  data: Array<{
    name: string
    link: string
    id: string
    describe?: string
  }>
}

const mock: Array<PotalItem> = [
  {
    name: '博客',
    id: '1',
    data: [{ name: '秋浦1', link: 'https://devgaoy.cn', id: '2' },
      { name: '秋浦2', link: 'https://devgaoy.cn', id: '3' },
    ],
  },
  {
    name: '合集',
    id: '2',
    data: [{ name: '奇舞周刊', link: 'https://weekly.75.team/', id: '2' },
      { name: '秋浦2', link: 'https://devgaoy.cn', id: '3' },
    ],
  },
  {
    name: '工具',
    id: '3',
    data: [{ name: 'jsv9000', link: 'https://www.jsv9000.app/', id: '2' },
      { name: 'jsbench', link: 'https://jsbench.me/', id: '3' },
      { name: '密码学工具', link: 'https://crypto-online.cn/playground/hash/', id: '4' },
      { name: '商务邮件生成器', link: 'https://email-helper.vercel.app/', id: '5' },
    ],
  },
  {
    name: '杂',
    id: '4',
    data: [{ name: '号码提取', link: 'https://tool.browser.qq.com/number_acquisition.html', id: '2' },
      { name: '增加图片大小', link: 'https://tool.browser.qq.com/img_enlarge.html', id: '3' },
      { name: '简历设计', link: 'https://91huajian.cn/', id: '4' },
    ],
  },
];
const potalList = ref<Array<PotalItem>>(mock);
</script>

<template>
  <div class="home">
    <!-- 头部 -->
    <h1 class="home-name">
      <span class="home-name-title">
        麻雀potal
      </span>
    </h1>

    <!-- 导航区 -->
    <main class="portal-body">
      <div v-for="portalItem in potalList" :key="portalItem.id" class="portal-item">
        <div class="portal-item-title">
          {{ portalItem.name }}
        </div>
        <nav>
          <a
            v-for="item in portalItem.data" :key="item.id" class="nav-item reverseRotate" :href="item.link"
            target="_blank"
          >
            <div class="nav-item-body rotate">
              <span class="nav-item-body-text">
                {{ item.name }}
              </span>
            </div>
          </a>
        </nav>
      </div>
    </main>

    <!-- foot -->

    <!-- address -->
    <address>
      <div>联系方式</div>
    </address>
  </div>
</template>

<style lang="scss" scoped>
.home {
  background: #0d0d0d;

  .home-name {
    margin: 0;

    .home-name-title {
      background: -webkit-linear-gradient(80deg, #d15f5f 30%, #232e5c);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .portal-body {

    display: flex;
    flex-direction: column;

    .portal-item {
      display: flex;
      flex-direction: column;
      width: 100%;

      .portal-item-title {
        height: 30px;
      }

      nav {
        display: flex;
        flex-direction: row;
      }

      .nav-item {
        display: flex;
        height: 50px;
        width: 200px;
        margin: 10px;
        transform-style: preserve-3d;
        perspective: 100px;

        :hover {
          background-color: #d15f5f;
          color: #0e3cf3;
        }

        .nav-item-body {
          display: flex;
          width: 100%;
          height: 100%;
          border: 1px solid red;
          transform-style: preserve-3d;

          .nav-item-body-text {
            margin: auto;
          }
        }

      }
    }

    .rotate {
      animation: rotate 5s linear infinite;
    }

    .reverseRotate {
      animation: reverseRotate 5s linear infinite;
    }

    @keyframes rotate {
    0% {
        transform: rotateX(0deg) rotateZ(0deg);
    }
    50% {
        transform: rotateX(40deg) rotateZ(180deg);
    }
    100% {
        transform: rotateX(0deg) rotateZ(360deg);
    }
}

    @keyframes reverseRotate {
      100% {
        transform: rotate(-360deg);
      }
    }

  }
}
</style>
