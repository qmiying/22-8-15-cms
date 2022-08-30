import { App } from 'vue'
import 'element-plus/theme-chalk/base.css'
import {
  ElButton,
  ElTable,
  ElAutocomplete,
  ElBacktop,
  ElBadge,
  ElCheckbox,
  ElLink,
  ElAside,
  ElHeader,
  ElMain
} from 'element-plus/lib/index'   //注意不能只from ‘element-plus’

const components = [
  ElButton,
  ElTable,
  ElAutocomplete,
  ElBacktop,
  ElBadge,
  ElCheckbox,
  ElLink,
  ElAside,
  ElHeader,
  ElMain
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}

