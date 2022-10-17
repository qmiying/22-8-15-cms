<template>
  <div class="nev-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo">
      <span v-if="!collapse" class="title">vu3+ts</span>
    </div>
    <el-menu class="el-menu-vertical" 
    :default-active="defaultValue"
    background-color="#0c2135"
    text-color="#b7bdc3" 
    active-text-color="#0a60bs"
    :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
           <!-- 二级菜单里可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title >
              <i v-if="item.icon" :class="item.icom"></i>
              <span>{{item.name}}</span>
            </template>
            <!-- 遍历二级菜单里的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''" @click="handleMenuItemClick(subitem)">
                <i v-if="item.icon" :class="item.icon"></i>
                <span>{{subitem.name}}</span>
              </el-menu-item>
          </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item>
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{item.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed ,ref} from 'vue'
import {useStore} from '@/store/index'
import { useRouter , useRoute} from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'

export default defineComponent({
  components:{

  },
  props:{
    collapse:{
      type:Boolean,
      faulse:false
    }
  },
  setup() {
    //store
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)   //获取用户菜单
    //router
    const router = useRouter()
    const route = useRoute()  //获取当前路由对象
    const currentPath = route.path   //获取当前路由的路径
    // data
    const menu = pathMapToMenu(userMenus.value, currentPath)
    console.log(menu.id)
    const defaultValue = ref(menu.id+'')   //当前选中菜单
    //event handle
    const handleMenuItemClick = (item:any) => {
      console.log(item)
      router.push({
        path: item.url ?? '/no-found' 
      })
    }
    return {
      userMenus,
      defaultValue,
      handleMenuItemClick
      
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
  