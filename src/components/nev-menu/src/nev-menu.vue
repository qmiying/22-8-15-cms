<template>
  <div class="nev-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo">
      <span class="title">vu3+ts</span>
    </div>
    <el-menu class="el-menu" default-active="2">
      <template v-for="item in useMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
           <!-- 二级菜单里可以展开的标题 -->
          <el-sub-menu>
            <i v-if="item.icon" class="item.icom"></i>
            <span>{{item.name}}</span>
          </el-sub-menu>
          <!-- 遍历二级菜单里的item -->
          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item>
              <i v-if="item.icom" class="item-icon"></i>
              <span>{{subitem.name}}</span>
            </el-menu-item>
        </template>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item>
            <i v-if="item.icon" class="item-icon"></i>
            <span>{{item.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import {useStore} from '@/store/index'

export default defineComponent({
  components:{
    
  },
  setup() {
    const store = useStore()
    const useMenus = computed(() => store.state.login.userMenus)   //获取用户菜单
    return {
      useMenus
    }
  }
})
</script>

<style scoped lang="less">
  .nav-menu {
    height: 100%;
    background-color: #001529;
  }
    .logo {
      display: flex;
      height: 28px;
      padding: 12px 10px 8px 10px;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
      .img {
        height: 100%;
        margin: 0 10px;
      }
  
      .title {
        font-size: 16px;
        font-weight: 700;
        color: white;
      }
  
    .el-menu {
      border-right: none;
    }
  
    // 目录
    .el-submenu {
      background-color: #001529 !important;
      // 二级菜单 ( 默认背景 )
    }
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135 !important;
      }
    
  
    ::v-deep .el-submenu__title {
      background-color: #001529 !important;
    }
  
    // hover 高亮
    .el-menu-item:hover {
      color: #fff !important; // 菜单
    }
  
    .el-menu-item.is-active {
      color: #fff !important;
      background-color: #0a60bd !important;
    }

  
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
  }
  </style>
  