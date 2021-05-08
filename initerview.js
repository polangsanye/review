//js 数据类型

//基本数据类型   7种  null undefined boolean Number String symbol BigInt(9999999999999999999999999n)  加个n就是表示BigInt
//引用数据类型   Object Array set map Date

/**
 * 两种类型的区别是：存储位置不同。
原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。

引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在
栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实
体。



堆和栈的概念存在于数据结构中和操作系统内存中。

在数据结构中，栈中数据的存取方式为先进后出。而堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。完全
二叉树是堆的一种实现方式。

在操作系统中，内存被分为栈区和堆区。

栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。

堆区内存一般由程序员分配释放，若程序员不释放，程序结束时可能由垃圾回收机制回收。

。JavaScript 中包含以下 7 个全局函数，用于完成一些常用的功能：escape( )、eval( )、isFinite( )、isNaN( )、parseFloat( )、parseInt( )、unescape( )。
 */



Number.Min_SAFE_INTEGER;
Number.MAX_SAFE_INTEGER; //最大最小安全整数

//Map Set Objet的区别

let item = { t: 1 };
let map = new Map();
let set = new Set();
let obj = {};

//--------增--------
map.set('t', 1);
set.add(item);
obj['t'] = 1;

//--------查--------
map.has('t');
set.has(item);
't' in obj

//--------改--------
map.set('t', 2);
item.t = 2;
obj['t'] = 2;

//--------删--------
map.delete('t');
set.delete(item);
delete obj('t');

/**
map 对象的key可以是任意值  object只能是字符串
set 元素唯一
优先使用map和set  放弃传统的object和数组
**/


/**
 * null 和 undefined 的区别？
 * 
 * null 是赋值给一些可能会返回对象的变量，作为初始化，undefined代表含义未定义，一般声明了但是未定义 没给值 会返回undefined; 
 * 
 * null==undefined 是true   null ===undefined 是false
 */

 function Person (name,age){
    this.name = name;
    this.age = age;
    this.sayInfo=function(){
        console.log(this.age,this.name);
    }
}


var son =new Person('name',23);
console.log(son.sayInfo());

son.__proto__==Person.prototype;
son.constructor.prototype==Person.prototype;
son.constructor==Person;


//谈谈 This 对象的理解。
/**
 * this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模
式来判断。
1.第一种是函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。

2.第二种是方法调用模式，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。

3.第三种是构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。

4.第四种是 apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。其中 apply 方法接收两个参数：一个是 this 绑定的对象，
一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。
bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。
 */


/**
 * JavaScript中的三种事件模型
1. DOM0事件模型（原始事件模型）
2. DOM2事件模型
2.1 事件捕获和事件冒泡（capture,bubble )
2.2 addEventListener
3. IE事件模型
 */


//0级事件
<button onclick="click()">点我</button>
const btn = document.getElementById('btn')
btn.onclick = function(){
    //do something
}
//解除事件
btn.onclick = null

// 2级事件
btn.addEventListener('click',function(){
    console.log('btn')
},true)
box.addEventListener('click',function(){
    console.log('box')
},false)

//ie事件
// IE事件只支持冒泡，所以事件流有两个阶段：

// 事件处理阶段：事件在达到目标元素时，触发监听事件。
// 事件冒泡阶段：事件从目标元素冒泡到 document，并且一次检查各个节点是否绑定了监听函数，如果有则执行。


// 绑定事件
el.attachEvent(eventType, handler)

// 移除事件
el.detachEvent(eventType, handler)


//闭包
/**
 * 闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以
访问到当前函数的局部变量。

闭包有两个常用的用途。

闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。通过使用闭包，我们可以通过在外部调用闭包函数，从而在外
部访问到函数内部的变量，可以使用这种方法来创建私有变量。

函数的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以
这个变量对象不会被回收。

其实闭包的本质就是作用域链的一个特殊的应用，只要了解了作用域链的创建过程，就能够理解闭包的实现原理。
 */


// instanceof的实现原理    a.__proto__===b.prototype????

function myInstance(left,right){
    let lptoo = Object.getPrototypeOf(left);
    let rptotpe = right.prototype;

    while(true){
        if(lptoo==null){
            return false;
        }

        if(lptoo==rptotpe)return true;

        lptoo = Object.getPrototypeOf(lptoo);
    }
}



//new 操作符具体干了什么呢？如何实现？

// (1) 创建一个新对象；
// (2) 设置原型链: 将新对象的constructor属性设置为构造函数信息，设置新对象的__proto__属性指向构造函数的prototype对象
// (3) 改变this 让构造函数的作用域指向新对象执行构造函数中的代码（为这个新对象添加属性） ；
// (4) 返回新对象。如果是值类型，就丢弃它，还是返回instance。
// 如果是引用类型，就返回这个引用类型的对象，替换掉instance。

var obj = {};
obj.__proto__ = Base.prototype;
Base.call(obj);


function myNew(){
    var obj =  Object();
    var constructorFn = [].shift.call(arguments)

    obj.__proto__ = constructorFn.prototype;
    var res = constructorFn.apply(obj,arguments)

    return res instanceof Object?res:obj;

}


//bind 的实现方式  
//bind改变函数作用域的方式和call和apply的不同点在于，call和apply是改变作用域的同时也会执行函数。而bind改变作用域会生成一个新函数，是否执行可以根据具体需求设置。
//这一段其实很好理解，因为bind 绑定了上下文，因此 self.apply 的第一个参数，是之前我们保存的 context。接下来，
//我们将 bind 的其余参数和调用bind后返回的函数在执行的过程中接收的参数进行拼接，作为一个数组传入apply的第二个参数中去
if(!Function.prototype.bind){
    Function.prototype.bind=function(){
        let self = this;
        let _content = [].shift.call(arguments);//保存一份 作用域
        let _args = [].slice.call(arguments);//保存一份 参数 
        return function(){
            self.apply(_content,_args.concat([].slice.call(arguments)))
        }
    }
}





//同源策略
// 我对浏览器的同源政策的理解是，一个域下的 js 脚本在未经允许的情况下，不能够访问另一个域的内容。这里的同源的指的是两个
// 域的协议、域名、端口号必须相同，否则则不属于同一个域。

// 同源政策主要限制了三个方面

// 第一个是当前域下的 js 脚本不能够访问其他域下的 cookie、localStorage 和 indexDB。

// 第二个是当前域下的 js 脚本不能够操作访问操作其他域下的 DOM。

// 第三个是当前域下 ajax 无法发送跨域请求。

// 同源政策的目的主要是为了保证用户的信息安全，它只是对 js 脚本的一种限制，并不是对浏览器的限制，对于一般的 img、或者
// script 脚本请求都不会有跨域的限制，这是因为这些操作都不会通过响应结果来进行可能出现安全问题的操作

// 解决跨域的方法：
/**
 * 1 jsonp   2,跨域资源共享  3，nginx代理  4,postMessage  5,location.hash + iframe  6,WebSocket 协议跨域
 */


// await 后面的代码会进入异步任务里面去  resolve不会
// 宏任务有Event Table、Event Queue，微任务有Event Queue

// 1.宏任务：包括整体代码script，setTimeout，setInterval、I/O、UI 交互事件、setImmediate(Node.js 环境)；

// 2.微任务：Promise、MutaionObserver、process.nextTick(Node.js 环境)

// 注：new Promise中的代码会立即执行，then函数分发到微任务队列，process.nextTick分发到微任务队列Event Queue

// 任务进入执行栈----同步任务还是异步任务----同步的进入主线程，异步的进入Event Table并注册函数。当指定的事情完成时，Event Table会将这个函数移入Event Queue。
// 主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。上述过程会不断重复，也就是常说的Event Loop(事件循环)

async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}
async function async2() {
    console.log("async2");
}
console.log("script start");
setTimeout(function () {
    console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
    console.log(3333);
}).then(function () {
    console.log("promise2");
});
console.log("script end");


///script start   async1 start  async2  promise1  3333 script end   async1 end    promise2   setTimeout

async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}
async function async2() {
    console.log("async2");
}
console.log("script start");
setTimeout(function () {
    console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
    console.log(3333);
}).then(function () {
    console.log("promise2");
});
console.log("script end");


///script start   async1 start  async2  promise1  3333 script end   async1 end    promise2   setTimeout

//实现一个简单的 双向绑定  Object.definedProperty    proxy

{/* <div id="box"></div>
<input id="myput" type="text"> */}

  var obj = {}
  Object.defineProperty(obj,'name',{
      set:function(value){
       document.querySelector('#box').innerHTML=value;
      },
      get:function(){
        return obj
      }
  })

  document.querySelector('#myput').addEventListener('input',()=>{
    obj.name = document.querySelector('#myput').value
  })


  var target = {
    name:23,
}

var phandler = {
  set:function(target,key,value){
      document.querySelector('#box').innerHTML=value;
  },
  get:function(target,key){
    console.log(key)
  }
}


var targetProxy = new Proxy(target,phandler)
console.log(targetProxy)

document.querySelector('#myput').addEventListener('input',()=>{
  targetProxy.name = document.querySelector('#myput').value
})



//js 垃圾回收机制 共两种 

// 1，标记清除
/**
 * 大部分浏览器以此方式进行垃圾回收，当变量进入执行环境（函数中声明变量）的时候，垃圾回收器将其标记为“进入环境”，当变量离开环境的时候（函数执行结束）将其标记为“离开环境”，
 * 在离开环境之后还有的变量则是需要被删除的变量。标记方式不定，可以是某个特殊位的反转或维护一个列表等。垃圾收集器给内存中的所有变量都加上标记，
 * 然后去掉环境中的变量以及被环境中的变量引用的变量的标记。在此之后再被加上的标记的变量即为需要回收的变量，因为环境中的变量已经无法访问到这些变量。

 */
//2，引用计数
/**这种方式常常会引起内存泄漏，低版本的IE使用这种方式。机制就是跟踪一个值的引用次数，当声明一个变量并将一个引用类型赋值给该变量时该值引用次数加1，
 * 当这个变量指向其他一个时该值的引用次数便减一。当该值引用次数为0时就会被回收。
 * 
 */
 
//js 数组的方法  map  forEach reduce  splice(startIndex,lenght,要替换额元素位置可选)//截取和替换

[23].findIndex((e)=>e==23);
[23].includes(23);
[23].indexOf(23);
[23,4,5].copyWithin(1,0,3);//copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。copyWith(target,start,end) target 起始位置 复制到指定目标索引位置。start 元素复制的起始位置。end 复制的结束位置 不选默认是数组的长度  

//函数防抖  防抖适合多次动作合并成一次执行  比如  防止按钮点击 重复请求 只执行一次 后面时间内处罚不再执行
function antiShake(fn,t){
    let timer;
    return function(){
        let args = arguments;
        if(timer){
            clearTimeout(timer)
        };

        timer= setTimeout(()=>{
            timer = null
            fn.apply(this,args)
        },t)
    }
}

//函数节流 就是控制执行频率  适合 大量事件 按时间做 平均 分配触发。比如绘图 dom拖拽 游戏刷新频率
function throttle(fn,interval){
    let _lastTime=null;
    return function(){
        let _nowTime=new Date().getTime();
        if(!_lastTime||_nowTime-_lastTime>=interval){
            fn.apply(this,arguments)
            _lastTime=_nowTime;
        }
    }
}


//在浏览器输入地址之后执行的哪些东西

/**
 * 1,url地址解析
 * 2，域名解析
 * 3，客户端与服务端建立TCP连接（三次握手）
 * 4，把客户端的请求发送给服务端
 * 5，服务端得到请求，并响应内容
 * 6，客户端渲染服务器返回的内容
 * 7，和服务端断开连接（4次挥手）
 * 
 * 
 * 
 * 1~5开头，三位数字，其中1开头的出现频率极低。

200 OK：成功
201 CREATED：一般应用于告诉服务器创建一个新文件，最后服务器创建成功后返回的状态码
204 NO CONTENT：对于某些请求（例如：PUT或者DELETE），服务器不想处理，可以返回空内容，并且用204状态码告知
301 Moved Permanently：永久重定向（永久转移）
302 Moved Temporarily：临时转移，很早以前基本上用302来做，但是现在主要用307来处理这个事情，307的意思就是临时重定向Temporary Redirect =>主要用于：服务器的负载均衡等
304 Not Modified：设置HTTP的协商缓存
400 Bad Request：传递给服务器的参数错误
405 get post 请求方式错误
401 Unauthorized：无权限访问
404 Not Found：请求地址错误
500 Internal Server Error：未知服务器错误
503 Service Unavailable：服务器超负荷



2.6.2 浏览器渲染页面的步骤
处理 HTML 标记，构建 DOM 树
处理 CSS 标记，构建 CSSOM 树
将 DOM 树和 CSSOM 树融合成渲染树
根据生成的渲染树，计算它们在设备视口(viewport)内的确切位置和大小，这个计算的阶段就是回流 => 布局（Layout）或 重排（reflow）
根据渲染树以及回流得到的几何信息，得到节点的绝对像素 => 绘制（painting）或栅格化（rasterizing）
2.6.3 DOM的重绘与回流(重排)
重绘：元素样式的改变（但宽高、大小、位置等不变）
回流：元素的大小或者位置发生了改变（当页面布局和几何信息发生变化的时候），触发了重新布局，导致渲染树重新计算布局和渲染
注意：回流一定会触发重绘，而重绘不一定会回流


 */

//css 权重问题
/**
 * ! important	无穷
    行间样式	1000
    id	100
    class/属性选择器/伪类:hover	10
    标签选择器/伪元素:after	1
    通配符	0
 */






// 前端性能优化

// css 相关
/**
 * 1、尽量将样式写在单独的css文件里面，在head元素中引用 可维护性  易于管理 可缓存
 * 2，避免使用复杂的选择器，层级越少越好
 * 3，去除多余的空格 和不用的css
 * 4,利用继承 不写多余的css 如 color，font-size，font-family都能被继承
 * */



// 图片相关

/**
 * 1，图片懒加载  原理
 *  var imgs = document.querySelectorAll("img");  //获取所有的img元素
    window.onscroll = function(){     //定义触发事件
        var showViewH = document.documentElement.clientHeight;  //获取可视区域的高度
        //获取滚动的高度（兼容性写法）
        var scrollH = document.body.scrollTop || document.documentElement.scrollTop;  
        for(var i =0 ; i<imgs.length;i ++){
            //判断图片到页面的高度与可视高度和滑动高度的大小
            if (imgs[i].offsetTop < showViewH + scrollH ) {  
                        if (imgs[i].getAttribute('src') == '') {
                            imgs[i].src = imgs[i].getAttribute('data-set');
                        }
            }

    }
 * 2，雪碧图
 * 
 * jpg 特点是有损压缩，体积小，加载快，不支持透明。适合用做背景图
 * 
 * 
 * png 无损压缩、质量高、体积大、支持透明 适合用来做logo icon
 * 
 * svg 文本文件，体积小，不失真，兼容性好
 * 
 * WEBP  010年被提出，是Google专为WEB开发的一种旨在加快图片加载速度的图片格式，支持有损压缩和无损压缩。WEBP受到最大的限制就是浏览器的兼容性。
 * 
*/


//js相关

/**
 * 1,javaScript是单线程，所以JavaScript的加载和执行是从上至下加载执行完一个再继续加载执行下一个文件，会阻塞页面资源的加载，所以一般情况下JavaScript文件放在body标签内底部
 * 
 * 2,合并脚本，每个<script>标签初始化下载都会阻塞页面渲染，所以减少页面的<script>标签数量可以起到优化作用，
 * 
 * 3，合理使用缓存 cookie  localStorage  sessionStorage
 */

function dayin(num,t){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(num)
            resolve()
        },t)
    });
}

var fn=async ()=>{
    await dayin(1,1000)
    await dayin(2,2000)
    await dayin(3,3000)
}


// class 的 static 方法都是不能被实例调用的   类似es5 的Person.name=functiong(){}  这种 都是不能被继承的

// ES5/ES6 的继承除了写法以外还有什么区别？ https://blog.csdn.net/qq_43540219/article/details/108174314 

/**
 * 1,class 不会提升 class 声明会提升，但不会初始化赋值
 * 2,2.class 声明内部会启用严格模式。必须使用let const var
 * 3, 必须使用 new 调用 class。
 * 4，class 的所有方法（包括静态方法和实例方法）都是不可枚举的。
 * 5，class 内部无法重写类名。es5可以
 * */


/**
 * react 中国setState 如果是在 绑定的onclick中执行 则会异步执行   否则会同步执行 比如在setTimeout Promise中
 */

/**
 * 1. npm 模块安装机制：
1,发出npm install命令
2,查询node_modules目录之中是否已经存在指定模块
若存在，不再重新安装
若不存在
npm 向 registry 查询模块压缩包的网址
下载压缩包，存放在根目录下的.npm目录里
解压压缩包到当前项目的node_modules目录
 */




//发布订阅 和观察者模式 的简单实现 和原理



//发布订阅模式 

let eventModel  = {
    topics:{},
    subscribe:function(type,fn){//on
        if(!topics[type]){
            topics[type] = []
        }
        topics[type].push(fn)
    },
    publish:function(type,...args){//emit
        if(this.topics[type])return;
        for(let fn of this.topics[type]){
            fn(...args)
        }
    }
}


//管擦着模式

class Subject{
    constructor(){
        this.subs = []
    }
    addSub(sub){
        this.subs.push(sub)
    }
    notify(){
        this.subs.forEach((sub)=>{
            sub.update()
        })
    }
}

class Observe{
    update(){
        console.log('update')
    }
}

let subject = new Subject();
let ob=new Observe()
subject.addSub(ob)
subject.update()//update


//vuex和redux的区别
/**相同点
 * 1,vuex 都是通过store来全局管理对象
 * 2，改变store的方式都是同步操作，vuex中的mutation redux中的reducer
 * 
 * 不同点
 * 
 * 1，vuex有module概念 可以把一个大的store拆分到几个小的   redux没有
 * 2，vuex只有展示组件（通过全局根部植入直接访问store），而redux中展示组件通过容器组件连接store再进行访问。
 * 3，vuex只能配合vue而redux可以配合任何框架
 * 4，vuex中的异步必须在action中操作 redux没有特别为异步创建一个方法
 * 
 * 
 */


//  ：使用迭代的方式实现 flatten 函数
let taArr =  [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]
function flattenArr(arr){
    let tempArr = [];
    for(let i =0;i<arr.length;i++){
        let el =arr[i];
        if(Array.isArray(el)){
            tempArr = tempArr.concat(flattenArr(el))
        }else{
            tempArr.push(el)
        }
    }
    return tempArr
}
console.log(flattenArr(taArr))

//translate和position的比较

// 有很多css属性可以影响元素定位，比如float,margin,padding,position,translate()。表面上来看，position:relatative和transform:translate()似乎作用一致，但其实他们之间也有几个差别，本篇文章就将比较这两个属性。

// 1.浏览器支持情况

// 　　position是css2的属性，transform是css3的属性，在ie8及以下的浏览器是不支持2d transform的。

// 2.GPU加速

// 　　transform属性可以使用硬件加速，这就使得当元素变换或者动画时，translate()性能表现要优于position的。

// 　　关于硬件加速原理，可以看我之前的总结文章 http://www.cnblogs.com/shytong/p/5419565.html
// 　  感觉这里面逻辑很乱，在这里整理一下。首先transform和绝对定位都会产生新的图层，所以都不存在重排，图层在GPU中transform又不会引起重绘，这就是硬件加速的原理

// 3.百分数的基准不同

// 　　当属性值是百分数时，translateX和translateY分别以自身宽高为标准，而当应用position时，left/top中的百分数是以最近定位父元素的宽高为标准的。

// 　　当我们未知宽高元素水平垂直居中时，我们可以使用决定定位加translate(-50%,-50%)。




//reduce的相关技术点
let arr=[1,2,3,4,5,6];
var sum = arr.reduce((pre,cur,index,arr)=>{//执行5次
    console.log(pre,cur,index)
    return pre+cur;
});

var sum = arr.reduce((pre,cur,index,arr)=>{//执行6次
    console.log(pre,cur,index)
    return pre+cur;
},0);

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let nameNUum = names.reduce((pre,cur)=>{
    if(cur in pre){
        pre[cur]++
    }else{
        pre[cur]=1
    }
    return pre;
},{})

//利用reduce数组去重

let arr = [4,4,3,4,5,6,5];

let resultArr = arr.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
      return  pre.concat(cur)
    }else{
        return pre
    }
},[])

//多唯数组扁平化
let arr = [[0, 1], [2, 3], [4,[5,6,7]]]

let newArr = function(arr){
  return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArr(cur):cur),[])
}

[1,2,3].reduce((pre,cur)=>{
    return pre.concat([cur*cur])
},[])


//手动实现一个reduce

Array.prototype.myReduce=function(){
    const arr =this;
    const fn = arguments[0];
    let startIndex=arguments.length>=2?0:1
    let startValue = startIndex==0?arguments[1]:arr[0]

    for(let i=startIndex;i<arr.length;i++){
        value = fn(startValue,arr[i],i,this)
    }
    return value
    
}

[1,23,4].myReduce((pre,cur)=>pre+cur);


//手动实现map

Array.prototype.myMap = function () {
    const fn = [].shift.call(arguments);
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(fn(this[i]));
    }
    return temp;
};

let myMapArr = [3, 4, 5, 6];
let myMapArrResult = myMapArr.myMap((e) => {
    return e * e;
});


//promie的手动实现

class Promise {
    constructor(executor){
        this.status = pending
        this.value=''
        this.err=''
        this.fulliedCallBack=[];
        this.rejectCallBack = [];

        let resolve = (value)=>{
            if(this.status==pending){
                this.status=fulfilled;
                this.value = value;
                this.fulliedCallBack.forEach(fn=>fn())
            }
        }

        let reject = (err)=>{
            if(this.status ==pending){
                this.status=rejeted
                this.err = err;
                this.rejectCallBack.forEach(fn=>fn())
            }
        }
        try{
            executor(resolve,reject)
        }catch(e){
            console.log(e)
        }
        
    }
    then(onfulfiled,onreject){  
        if(this.status==fulfilled){
            onfulfiled(this.value)
        }
        if(this.status==rejeted){
            onreject(this.err)
        }
        if(this.status==pending){
            this.fulliedCallBack.add(()=>{
                onfulfiled(this.value)
            })
            this.rejectCallBack.add(()=>{
                onreject(this.err)
            })
        }
    }

    all(list){
        return new Promise((resolve,reject)=>{
            let result = [];
            let count=0;
            for(let [i,p] in list.entries()){
                resolve(p).then(res=>{
                    result[i]=res;
                    if(list.length==count){
                        resolve(result)
                    }
                },err=>{ // 有一个被rejected时返回的MyPromise状态就变成rejected
                    reject(err)
                })

            }
        })
    }
}


//http2.0 与1.x的区别   https://www.cnblogs.com/heluan/p/8620312.html
// 1,性能提升，请求响应更快
// 2，多路复用，允许同时请求多个资源
// 3，header压缩
// 4，基于https的加密协议传输
// 5，服务端推送



// vue react 区别

// 相同点：都支持服务端渲染，都有虚拟dom,都是基于数据驱动，
// 区别：

// react: 函数式变成 思想，jsx语法，需要手动调用setState 更新视图，每当应用的状态被改变时，
// 全部子组件都会重新渲染。当然，这可以通过shouldComponentUpdate这个生命周期方法来进行控制，如果为true继续渲染、false不渲染

// vue:数据双向绑定，可以更快的找出虚拟dom差异，是因为在渲染中会跟踪每一个组件依赖关系，不需要重新渲染整个组件树，





