import HocElVirtualScroll from './components/VirtualScroll'

const install = function (Vue, opts = {}) {
  Vue.component('HocElVirtualScroll', HocElVirtualScroll)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.1',
  install,
  HocElVirtualScroll
}
