// Type definitions for src/index.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace Monitor.prototype{
	// Monitor.prototype.getCommonParams.!ret
	
	/**
	 * 
	 */
	interface GetCommonParamsRet {
				
		/**
		 * 
		 */
		domain : string;
				
		/**
		 * 
		 */
		url : string;
				
		/**
		 * 
		 */
		title : string;
				
		/**
		 * 
		 */
		referrer : string;
				
		/**
		 * 
		 */
		sh : number;
				
		/**
		 * 
		 */
		sw : number;
				
		/**
		 * 
		 */
		cd : number;
				
		/**
		 * 
		 */
		lang : string;
	}
}
declare namespace Monitor.prototype{
	// Monitor.prototype.ajax.!0
	
	/**
	 * 
	 */
	interface Ajax0 {
				
		/**
		 * 
		 */
		key : string;
	}
}
declare namespace Monitor.prototype{
	// Monitor.prototype.obj2QueryString.!0
	
	/**
	 * 
	 */
	interface Obj2QueryString0 {
				
		/**
		 * 
		 */
		_time : number;
	}
}

/**
 * 
 */
declare interface Monitor {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * 
	 * @param key 
	 */
	deleteParam(key : any): void;
		
	/**
	 * 
	 * @param key 
	 * @param value 
	 */
	setParam(key : any, value : any): void;
		
	/**
	 * 
	 * @param params 
	 */
	addParam(params : any): void;
		
	/**
	 * 
	 * @param params 
	 */
	updateParams(params : any): void;
		
	/**
	 * 获取通用参数
	 * @return  
	 */
	getCommonParams(): Monitor.prototype.GetCommonParamsRet;
		
	/**
	 * 监听url变化
	 * @param vueRouterInstance 
	 */
	listenRouterChange(vueRouterInstance : any): void;
		
	/**
	 * 监听vue error
	 */
	listenVueError(): void;
		
	/**
	 * 监听点击事件
	 */
	listenClickEvent(): void;
		
	/**
	 * 查找目标埋点节点数据
	 * @param {*} node
	 * @param node 
	 * @return  
	 */
	findMonitorNodeData(node : any): string;
		
	/**
	 * ajax
	 * @param {*} params
	 * @param {*} qs
	 * @param params 
	 * @param qs 
	 */
	ajax(params : {} | {} | Ajax0, qs : string): void;
		
	/**
	 * Object转QueryString
	 * @param {*} params
	 * @param params 
	 * @return  
	 */
	obj2QueryString(params : Monitor.prototype.Obj2QueryString0): string;
		
	/**
	 * 初始化
	 * @param {*} vueRouter 实例
	 * @param {*} baseUrl 埋点上报地址
	 * @param {*} customParams 自定义携带参数
	 * @param {*} config 配置
	 * @param vueRouterInstance 
	 * @param baseUrl 
	 * @param customParams 
	 * @param config 
	 */
	init(vueRouterInstance : any, baseUrl : any, customParams : any, config : any): void;
		
	/**
	 * 
	 * @return  
	 */
	getInstance(): /* !this.instance */ any;
	
	/**
	 * 
	 */
	commonParams : {
				
		/**
		 * 
		 */
		domain : string;
				
		/**
		 * 
		 */
		url : string;
				
		/**
		 * 
		 */
		title : string;
				
		/**
		 * 
		 */
		referrer : string;
				
		/**
		 * 
		 */
		sh : number;
				
		/**
		 * 
		 */
		sw : number;
				
		/**
		 * 
		 */
		cd : number;
				
		/**
		 * 
		 */
		lang : string;
	}
		
	/**
	 * 
	 */
	baseUrl : string;
		
	/**
	 * 
	 */
	instance : Monitor;
}
