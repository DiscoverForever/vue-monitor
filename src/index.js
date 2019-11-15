import Vue from 'vue'
export default class Monitor {
  constructor() {
    this.commonParams = this.getCommonParams()
    this.baseUrl = ''
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Monitor()
    }
    return this.instance
  }

  deleteParam(key) {
    delete this.commonParams[key]
  }

  setParam(key, value) {
    this.commonParams[key] = value
  }

  addParam(params) {
    Object.assign(this.commonParams, JSON.parse(JSON.stringify(params)))
  }

  updateParams(params) {
    this.commonParams = JSON.parse(JSON.stringify(params))
  }

  /**
   * 获取通用参数
   */
  getCommonParams() {
    const params = {}
    // Document对象数据
    if (document) {
      params.domain = document.domain || ''
      params.url = document.URL || ''
      params.title = document.title || ''
      params.referrer = document.referrer || ''
    }
    // Window对象数据
    if (window && window.screen) {
      params.sh = window.screen.height || 0
      params.sw = window.screen.width || 0
      params.cd = window.screen.colorDepth || 0
    }
    // navigator对象数据
    if (navigator) {
      params.lang = navigator.language || ''
    }
    return params
  }

  /**
   * 监听url变化
   */
  listenRouterChange(vueRouterInstance) {
    vueRouterInstance.afterEach((to, from) => {
      this.ajax({ ...this.commonParams, key: 'pv' })
    })
  }

  /**
   * 监听vue error
   */
  listenVueError() {
    Vue.config.errorHandler = (error, vm, info) => {
      this.ajax({ ...this.commonParams, key: 'error', _errorMessage: error.message, _erroInfo: error, _errorStack: error.stack })
      console.error(error, info)
    }
  }

  /**
   * 监听点击事件
   */
  listenClickEvent() {
    if (window) {
      window.addEventListener('click', (event) => {
        const queryStr = this.findMonitorNodeData(event.target)
        if (queryStr) {
          this.ajax({ ...this.commonParams, key: 'pv' }, queryStr.replace(/^\?|\&/, ''))
        }
      })
    }
  }

  /**
   * 查找目标埋点节点数据
   * @param {*} node
   */
  findMonitorNodeData(node) {
    if (node.nodeName === 'BODY') {
      return ''
    } else if (node.attributes.monitor) {
      return node.attributes.monitor.value
    } else if (node.parentNode) {
      return this.findMonitorNodeData(node.parentNode)
    } else {
      return ''
    }
  }

  /**
   * ajax
   * @param {*} params
   * @param {*} qs
   */
  ajax(params = {}, qs = '') {
    if (document) {
      const img = document.createElement('img')
      console.log(this.obj2QueryString({ ...params, _time: Date.now() }) + (qs ? `&${qs}` : ''))
      img.src = this.baseUrl + encodeURIComponent(this.obj2QueryString({ ...params, _time: Date.now() }) + (qs ? `&${qs}` : ''))
    } else {
      console.warn('无法获取document对象,请检查运行环境是否为浏览器')
    }
  }

  /**
   * Object转QueryString
   * @param {*} params
   */
  obj2QueryString(params = {}) {
    let str = ''
    Object.keys(params).forEach((key, index) => {
      if (index === 0) {
        str += `?${key}=${params[key]}`
      } else {
        str += `&${key}=${params[key]}`
      }
    })
    return str
  }

  /**
   * 初始化
   * @param {*} vueRouter 实例
   * @param {*} baseUrl 埋点上报地址
   * @param {*} customParams 自定义携带参数
   * @param {*} config 配置
   */
  init(vueRouterInstance, baseUrl, customParams = {}, config = {}) {
    if (!vueRouterInstance) {
      throw new Error('vue路由实例[vueRouterInstance]参数缺失')
    }
    if (!baseUrl) {
      throw new Error('埋点上报地址[baseUrl]参数缺失')
    }
    if ('afterEach' in vueRouterInstance) {
      this.listenRouterChange(vueRouterInstance)
    } else {
      throw new Error('参数类型错误: [init]方法首个参数必须是VueRouter')
    }
    this.baseUrl = baseUrl
    this.addParam(customParams)
    this.listenClickEvent()
    this.listenVueError()
  }
}
