<template>
  <div class="tdesign-mobile-demo" style="background-color: #fff">
    <h1 class="title">Avatar 头像</h1>
    <p class="summary">用于展示用户头像信息，除了纯展示也可点击进入个人详情等操作。</p>
    <tdesign-demo-block title="01 头像类型" summary="头像样式可为默认头像、微信头像圆形、方形、自定义文字">
      <div class="avatar-demo">
        <t-avatar :icon="userIcon"></t-avatar>
        <t-avatar
          image="https://tdesign.gtimg.com/mobile/demos/avatar_1.png"
          alt="示例图片"
          :hide-on-load-failed="false"
        ></t-avatar>
        <t-avatar>
          <template #icon>
            <img src="https://tdesign.gtimg.com/mobile/demos/avatar_1.png" alt="示例图片" />
          </template>
        </t-avatar>
        <t-avatar image="https://tdesign.gtimg.com/mobile/demos/avatar_1.png" shape="round"></t-avatar>
        <t-avatar class="custom">A</t-avatar>
      </div>
    </tdesign-demo-block>
    <tdesign-demo-block title="02 特殊类型" summary="纯展示 从上往下">
      <div class="avatar-group-demo">
        <t-avatar-group cascading="right-up" :max="5" size="small">
          <t-avatar v-for="(url, index) in imageList" :key="index" shape="circle" :image="url"></t-avatar>
        </t-avatar-group>
      </div>
      <div class="avatar-group-demo">
        <t-avatar-group cascading="right-up" :max="5" size="40px">
          <t-avatar v-for="(url, index) in imageList" :key="index" shape="circle" :image="url"></t-avatar>
        </t-avatar-group>
      </div>
      <div class="avatar-group-demo">
        <t-avatar-group cascading="right-up" :max="5">
          <t-avatar v-for="(url, index) in imageList" :key="index" shape="circle" :image="url"></t-avatar>
        </t-avatar-group>
      </div>
    </tdesign-demo-block>
    <tdesign-demo-block summary="带操作 从下往上">
      <div class="avatar-group-demo">
        <t-avatar-group cascading="left-up" :max="5" size="small" :collapse-avatar="userAddIcon">
          <t-avatar v-for="(url, index) in imageList" :key="index" shape="circle" :image="url"></t-avatar>
        </t-avatar-group>
      </div>
      <div class="avatar-group-demo">
        <t-avatar-group cascading="left-up" :max="5" size="40px">
          <template #collapseAvatar>
            <user-add-icon style="font-size: 20px"></user-add-icon>
          </template>
          <t-avatar v-for="(url, index) in imageList" :key="index" shape="circle" :image="url"></t-avatar>
        </t-avatar-group>
      </div>
      <div class="avatar-group-demo">
        <t-avatar-group cascading="left-up" :max="5">
          <template #collapseAvatar>
            <user-add-icon style="font-size: 24px"></user-add-icon>
          </template>
          <t-avatar v-for="(url, index) in imageList" :key="index" shape="circle" :image="url"></t-avatar>
        </t-avatar-group>
      </div>
    </tdesign-demo-block>
    <tdesign-demo-block title="03 规格" summary="头像大小尺寸">
      <div class="avatar-demo">
        <t-avatar shape="circle" size="large" :icon="userIcon"></t-avatar>
        <t-avatar shape="circle" size="medium" :icon="userIcon"></t-avatar>
        <t-avatar shape="circle" size="small" :icon="userIcon"></t-avatar>
      </div>
      <div class="avatar-demo">
        <t-avatar
          shape="circle"
          size="large"
          image="https://tdesign.gtimg.com/mobile/demos/avatar_1.png"
          alt="示例图片"
          :badge-props="{ count: 10 }"
        ></t-avatar>
        <t-avatar
          shape="circle"
          size="medium"
          image="https://tdesign.gtimg.com/mobile/demos/avatar_1.png"
          alt="示例图片"
          :badge-props="{ count: 10 }"
        ></t-avatar>
        <t-avatar
          shape="circle"
          size="small"
          image="https://tdesign.gtimg.com/mobile/demos/avatar_1.png"
          alt="示例图片"
          :badge-props="{ dot: true }"
        ></t-avatar>
      </div>
      <div class="avatar-demo">
        <t-avatar
          shape="round"
          size="large"
          image="https://tdesign.gtimg.com/mobile/demos/avatar_1.png"
          alt="示例图片"
          :badge-props="{ count: 10 }"
        ></t-avatar>
        <t-avatar
          shape="round"
          size="medium"
          image="https://tdesign.gtimg.com/mobile/demos/avatar_1.png"
          alt="示例图片"
          :badge-props="{ count: 10 }"
        ></t-avatar>
        <t-avatar
          shape="round"
          size="small"
          image="https://tdesign.gtimg.com/mobile/demos/avatar_1.png"
          alt="示例图片"
          :badge-props="{ dot: true }"
        ></t-avatar>
      </div>
      <div class="avatar-demo">
        <t-avatar shape="circle" size="large" class="custom">A</t-avatar>
        <t-avatar shape="circle" size="medium" class="custom">A</t-avatar>
        <t-avatar shape="circle" size="small" class="custom">A</t-avatar>
      </div>
    </tdesign-demo-block>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, ref } from 'vue';
import { UserAddIcon, UserIcon } from 'tdesign-icons-vue-next';

export default defineComponent({
  components: {
    UserAddIcon,
  },
  setup() {
    const userIcon = () => h(UserIcon);
    const userAddIcon = () => h(UserAddIcon);
    const errorConsole = () => {
      console.log('error console');
    };
    const imageList = ref([
      'https://tdesign.gtimg.com/mobile/demos/avatar_1.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar_2.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar_3.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar_4.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar_5.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar_1.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar_2.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar_3.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar_4.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar_5.png',
    ]);
    return { userIcon, userAddIcon, imageList, errorConsole };
  },
});
</script>

<style lang="less">
.avatar-demo {
  margin-left: 16px;
  margin-bottom: 16px;
  .t-avatar {
    margin-right: 20px;
  }
  .custom {
    .t-avatar__inner {
      background-color: #0052d9;
      color: #fff;
    }
  }
}
.avatar-group-demo {
  margin-left: 16px;
  margin-bottom: 16px;
}
</style>
