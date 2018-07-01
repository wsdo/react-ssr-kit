## Modules

<dl>
<dt><a href="#module_HJWidget/cctalk">HJWidget/cctalk</a></dt>
<dd></dd>
<dt><a href="#module_HJWidget">HJWidget</a></dt>
<dd></dd>
<dt><a href="#module_HJWidget/socket">HJWidget/socket</a></dt>
<dd></dd>
</dl>

<a name="module_HJWidget/cctalk"></a>

## HJWidget/cctalk

* [HJWidget/cctalk](#module_HJWidget/cctalk)
    * _static_
        * [.getGroupInfo()](#module_HJWidget/cctalk.getGroupInfo) ⇒ <code>Promise</code>
        * [.getTeacher()](#module_HJWidget/cctalk.getTeacher) ⇒ <code>Promise</code>
        * [.getUsersOnMic()](#module_HJWidget/cctalk.getUsersOnMic) ⇒ <code>Promise</code>
    * _inner_
        * [~GroupInfo](#module_HJWidget/cctalk..GroupInfo) : <code>Object</code>
        * [~UserInfo](#module_HJWidget/cctalk..UserInfo)

<a name="module_HJWidget/cctalk.getGroupInfo"></a>

### HJWidget/cctalk.getGroupInfo() ⇒ <code>Promise</code>
获取群信息

**Kind**: static method of <code>[HJWidget/cctalk](#module_HJWidget/cctalk)</code>  
**Resolves**: <code>[GroupInfo](#module_HJWidget/cctalk..GroupInfo)</code>  
**Rejects**: <code>Error</code>  
**Example**  
```js
HJWidget.cctalk.getGroupInfo().then((data)=>{

})
```
<a name="module_HJWidget/cctalk.getTeacher"></a>

### HJWidget/cctalk.getTeacher() ⇒ <code>Promise</code>
获取老师信息

**Kind**: static method of <code>[HJWidget/cctalk](#module_HJWidget/cctalk)</code>  
**Resolves**: <code>[UserInfo](#module_HJWidget/cctalk..UserInfo)</code>  
**Example**  
```js
HJWidget.cctalk.getTeacher().then((data)=>{

})
```
<a name="module_HJWidget/cctalk.getUsersOnMic"></a>

### HJWidget/cctalk.getUsersOnMic() ⇒ <code>Promise</code>
**Kind**: static method of <code>[HJWidget/cctalk](#module_HJWidget/cctalk)</code>  
**Resolves**: <code>[Array.&lt;UserInfo&gt;](#module_HJWidget/cctalk..UserInfo)</code>  
**Example**  
```js
HJWidget.cctalk.getUsersOnMic((data)=>{

})
```
<a name="module_HJWidget/cctalk..GroupInfo"></a>

### HJWidget/cctalk~GroupInfo : <code>Object</code>
**Kind**: inner typedef of <code>[HJWidget/cctalk](#module_HJWidget/cctalk)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| groupId | <code>number</code> | 群ID |
| isLiving | <code>boolean</code> | 是否在直播 |

<a name="module_HJWidget/cctalk..UserInfo"></a>

### HJWidget/cctalk~UserInfo
**Kind**: inner typedef of <code>[HJWidget/cctalk](#module_HJWidget/cctalk)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | 用户名 |
| id | <code>number</code> | 用户ID |
| avater | <code>string</code> | 用户头像 |
| nickName | <code>string</code> | 昵称 |

<a name="module_HJWidget"></a>

## HJWidget

* [HJWidget](#module_HJWidget)
    * _static_
        * [.socket](#module_HJWidget.socket)
        * [.cctalk](#module_HJWidget.cctalk)
        * [.getEnvironment()](#module_HJWidget.getEnvironment) ⇒ <code>Promise</code>
        * [.getUser()](#module_HJWidget.getUser) ⇒ <code>Promise</code>
        * [.getWidgetInfo()](#module_HJWidget.getWidgetInfo) ⇒
        * [.maximize()](#module_HJWidget.maximize) ⇒
        * [.minimize()](#module_HJWidget.minimize) ⇒
        * [.on(eventName, callback)](#module_HJWidget.on)
        * [.once(eventName, callback)](#module_HJWidget.once)
        * [.off(eventName, callback)](#module_HJWidget.off)
    * _inner_
        * ["close"](#module_HJWidget..event_close)
        * ["maximize"](#module_HJWidget..event_maximize)
        * ["minimize"](#module_HJWidget..event_minimize)
        * [~EnvironmentInfo](#module_HJWidget..EnvironmentInfo) : <code>Object</code>
        * [~EventCallback](#module_HJWidget..EventCallback) : <code>function</code>

<a name="module_HJWidget.socket"></a>

### HJWidget.socket
socket对象

**Kind**: static property of <code>[HJWidget](#module_HJWidget)</code>  
**See**: [module:@hujiang/HJWidget/socket](module:@hujiang/HJWidget/socket)  
<a name="module_HJWidget.cctalk"></a>

### HJWidget.cctalk
cctalk 对象

**Kind**: static property of <code>[HJWidget](#module_HJWidget)</code>  
**See**: [module:@hujiang/HJWidget/cctalk](module:@hujiang/HJWidget/cctalk)  
<a name="module_HJWidget.getEnvironment"></a>

### HJWidget.getEnvironment() ⇒ <code>Promise</code>
获取当前Widget的环境信息

**Kind**: static method of <code>[HJWidget](#module_HJWidget)</code>  
**Resolves**: <code>[EnvironmentInfo](#module_HJWidget..EnvironmentInfo)</code>  
**Example**  
```js
HJWidget.getEnvironment().then((data)=>{

})
```
<a name="module_HJWidget.getUser"></a>

### HJWidget.getUser() ⇒ <code>Promise</code>
获取当前登陆用户的用户信息

**Kind**: static method of <code>[HJWidget](#module_HJWidget)</code>  
**Resolves**: <code>[UserInfo](#module_HJWidget/cctalk..UserInfo)</code>  
**Example**  
```js
HJWidget.getEnvironment().then((data)=>{

})
```
<a name="module_HJWidget.getWidgetInfo"></a>

### HJWidget.getWidgetInfo() ⇒
**Kind**: static method of <code>[HJWidget](#module_HJWidget)</code>  
**Returns**: Promise  
**Example**  
```js
HJWidget.getWidgetInfo("gohwe93523645").then((info)=>{
})
```
<a name="module_HJWidget.maximize"></a>

### HJWidget.maximize() ⇒
最大化widget窗口

**Kind**: static method of <code>[HJWidget](#module_HJWidget)</code>  
**Returns**: Promise  
**Example**  
```js
HJWidget.maximize().then(()=>{

})
```
<a name="module_HJWidget.minimize"></a>

### HJWidget.minimize() ⇒
最小化widget

**Kind**: static method of <code>[HJWidget](#module_HJWidget)</code>  
**Returns**: Promise  
**Example**  
```js
HJWidget.minimize().then(()=>{

})
```
<a name="module_HJWidget.on"></a>

### HJWidget.on(eventName, callback)
绑定事件

**Kind**: static method of <code>[HJWidget](#module_HJWidget)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | 事件名，可选值为close |
| callback | <code>[EventCallback](#module_HJWidget..EventCallback)</code> | 事件回调 |

<a name="module_HJWidget.once"></a>

### HJWidget.once(eventName, callback)
绑定一次时间

**Kind**: static method of <code>[HJWidget](#module_HJWidget)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | 事件名，可选值为close |
| callback | <code>[EventCallback](#module_HJWidget..EventCallback)</code> | 事件回调 |

<a name="module_HJWidget.off"></a>

### HJWidget.off(eventName, callback)
取消绑定事件

**Kind**: static method of <code>[HJWidget](#module_HJWidget)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | 事件名，可选值为close |
| callback | <code>[EventCallback](#module_HJWidget..EventCallback)</code> | 事件回调 |

<a name="module_HJWidget..event_close"></a>

### "close"
窗口关闭事件

**Kind**: event emitted by <code>[HJWidget](#module_HJWidget)</code>  
**Example**  
```js
HJWidget.on("close", ()=>{

})
```
<a name="module_HJWidget..event_maximize"></a>

### "maximize"
窗口最大化事件

**Kind**: event emitted by <code>[HJWidget](#module_HJWidget)</code>  
**Example**  
```js
HJWidget.on("maximize", ()=>{

})
```
<a name="module_HJWidget..event_minimize"></a>

### "minimize"
窗口最小化事件

**Kind**: event emitted by <code>[HJWidget](#module_HJWidget)</code>  
**Example**  
```js
HJWidget.on("minimize", ()=>{

})
```
<a name="module_HJWidget..EnvironmentInfo"></a>

### HJWidget~EnvironmentInfo : <code>Object</code>
**Kind**: inner typedef of <code>[HJWidget](#module_HJWidget)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sceneType | <code>number</code> | 场景类型 |
| sceneId | <code>number</code> | 场景Id |
| businessType | <code>number</code> | 业务类型 |

<a name="module_HJWidget..EventCallback"></a>

### HJWidget~EventCallback : <code>function</code>
**Kind**: inner typedef of <code>[HJWidget](#module_HJWidget)</code>  

| Param | Type |
| --- | --- |
| e | <code>[close](#module_HJWidget..event_close)</code> &#124; <code>[maximize](#module_HJWidget..event_maximize)</code> &#124; <code>[minimize](#module_HJWidget..event_minimize)</code> | 

<a name="module_HJWidget/socket"></a>

## HJWidget/socket

* [HJWidget/socket](#module_HJWidget/socket)
    * [~BUSINESS_TYPE](#module_HJWidget/socket..BUSINESS_TYPE) : <code>enum</code>
    * [~CCTALK_SCENE_TYPE](#module_HJWidget/socket..CCTALK_SCENE_TYPE) : <code>enum</code>
    * [~INIT_USER_TYPE](#module_HJWidget/socket..INIT_USER_TYPE) : <code>enum</code>
    * [~BROADCAST_USER_TYPE](#module_HJWidget/socket..BROADCAST_USER_TYPE) : <code>enum</code>
    * [~socket(options)](#module_HJWidget/socket..socket)
        * [~instance](#module_HJWidget/socket..socket..instance)
            * [.begin(args)](#module_HJWidget/socket..socket..instance.begin) ⇒ <code>Promise</code>
            * [.connect([tags])](#module_HJWidget/socket..socket..instance.connect) ⇒ <code>Promise</code>
            * [.addTag(args)](#module_HJWidget/socket..socket..instance.addTag) ⇒ <code>Promise</code>
            * [.removeTag(args)](#module_HJWidget/socket..socket..instance.removeTag) ⇒ <code>Promise</code>
            * [.end()](#module_HJWidget/socket..socket..instance.end) ⇒ <code>Promise</code>
            * [.sendMessage(args)](#module_HJWidget/socket..socket..instance.sendMessage) ⇒ <code>Promise</code>
            * [.on(eventName, callback)](#module_HJWidget/socket..socket..instance.on)
            * [.once(eventName, callback)](#module_HJWidget/socket..socket..instance.once)
            * [.off(eventName, callback)](#module_HJWidget/socket..socket..instance.off)
    * ["message"](#module_HJWidget/socket..event_message)
    * ["statusChanged"](#module_HJWidget/socket..event_statusChanged)
    * [~SocketOptions](#module_HJWidget/socket..SocketOptions) : <code>Object</code>
    * [~MessageBody](#module_HJWidget/socket..MessageBody) : <code>Object</code>
    * [~SocketBeginArgs](#module_HJWidget/socket..SocketBeginArgs) : <code>Object</code>
    * [~TagObject](#module_HJWidget/socket..TagObject)
    * [~EventCallback](#module_HJWidget/socket..EventCallback) : <code>function</code>

<a name="module_HJWidget/socket..BUSINESS_TYPE"></a>

### HJWidget/socket~BUSINESS_TYPE : <code>enum</code>
business type

**Kind**: inner enum of <code>[HJWidget/socket](#module_HJWidget/socket)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| CCTalk | <code>number</code> | <code>1</code> | 

<a name="module_HJWidget/socket..CCTALK_SCENE_TYPE"></a>

### HJWidget/socket~CCTALK_SCENE_TYPE : <code>enum</code>
cctalk scene type

**Kind**: inner enum of <code>[HJWidget/socket](#module_HJWidget/socket)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| CHART | <code>number</code> | <code>0</code> | 
| GROUP_CHART | <code>number</code> | <code>1</code> | 

<a name="module_HJWidget/socket..INIT_USER_TYPE"></a>

### HJWidget/socket~INIT_USER_TYPE : <code>enum</code>
广播的用户类型，在启动widget的时候使用

**Kind**: inner enum of <code>[HJWidget/socket](#module_HJWidget/socket)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| all | <code>number</code> | <code>1</code> | 所有用户 |
| onMic | <code>number</code> | <code>2</code> | 群成员 |
| special | <code>number</code> | <code>3</code> | 指定用户 |

<a name="module_HJWidget/socket..BROADCAST_USER_TYPE"></a>

### HJWidget/socket~BROADCAST_USER_TYPE : <code>enum</code>
广播消息时广播目标的类型

**Kind**: inner enum of <code>[HJWidget/socket](#module_HJWidget/socket)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| all | <code>number</code> | <code>0</code> | 全部用户 |
| tag | <code>number</code> | <code>1</code> | 标签 |
| special | <code>number</code> | <code>2</code> | 指定用户 |

<a name="module_HJWidget/socket..socket"></a>

### HJWidget/socket~socket(options)
初始化socket对象

**Kind**: inner method of <code>[HJWidget/socket](#module_HJWidget/socket)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>[SocketOptions](#module_HJWidget/socket..SocketOptions)</code> | 初始化需要的参数 |

**Example**  
```js
const socket = HJWidget.socket({
     operatorId: 79779696,
     businessType: 1,
     sceneType: 1,
     sceneId: 9923792,
     widgetKey: "6896gsdsds"
})
```

* [~socket(options)](#module_HJWidget/socket..socket)
    * [~instance](#module_HJWidget/socket..socket..instance)
        * [.begin(args)](#module_HJWidget/socket..socket..instance.begin) ⇒ <code>Promise</code>
        * [.connect([tags])](#module_HJWidget/socket..socket..instance.connect) ⇒ <code>Promise</code>
        * [.addTag(args)](#module_HJWidget/socket..socket..instance.addTag) ⇒ <code>Promise</code>
        * [.removeTag(args)](#module_HJWidget/socket..socket..instance.removeTag) ⇒ <code>Promise</code>
        * [.end()](#module_HJWidget/socket..socket..instance.end) ⇒ <code>Promise</code>
        * [.sendMessage(args)](#module_HJWidget/socket..socket..instance.sendMessage) ⇒ <code>Promise</code>
        * [.on(eventName, callback)](#module_HJWidget/socket..socket..instance.on)
        * [.once(eventName, callback)](#module_HJWidget/socket..socket..instance.once)
        * [.off(eventName, callback)](#module_HJWidget/socket..socket..instance.off)

<a name="module_HJWidget/socket..socket..instance"></a>

#### socket~instance
**Kind**: inner property of <code>[socket](#module_HJWidget/socket..socket)</code>  

* [~instance](#module_HJWidget/socket..socket..instance)
    * [.begin(args)](#module_HJWidget/socket..socket..instance.begin) ⇒ <code>Promise</code>
    * [.connect([tags])](#module_HJWidget/socket..socket..instance.connect) ⇒ <code>Promise</code>
    * [.addTag(args)](#module_HJWidget/socket..socket..instance.addTag) ⇒ <code>Promise</code>
    * [.removeTag(args)](#module_HJWidget/socket..socket..instance.removeTag) ⇒ <code>Promise</code>
    * [.end()](#module_HJWidget/socket..socket..instance.end) ⇒ <code>Promise</code>
    * [.sendMessage(args)](#module_HJWidget/socket..socket..instance.sendMessage) ⇒ <code>Promise</code>
    * [.on(eventName, callback)](#module_HJWidget/socket..socket..instance.on)
    * [.once(eventName, callback)](#module_HJWidget/socket..socket..instance.once)
    * [.off(eventName, callback)](#module_HJWidget/socket..socket..instance.off)

<a name="module_HJWidget/socket..socket..instance.begin"></a>

##### instance.begin(args) ⇒ <code>Promise</code>
开始启动widget实例

**Kind**: static method of <code>[instance](#module_HJWidget/socket..socket..instance)</code>  

| Param | Type |
| --- | --- |
| args | <code>[SocketBeginArgs](#module_HJWidget/socket..SocketBeginArgs)</code> | 

**Example**  
```js
socket.begin({
     userType: HJWidget.socket.INIT_USER_TYPE.onMic
}).then(()=>{
     
})
// Or
socket.begin({
     userType: HJWidget.socket.INIT_USER_TYPE.special,
     // for special users
     toUsers: [253232, 6467373]
})
```
<a name="module_HJWidget/socket..socket..instance.connect"></a>

##### instance.connect([tags]) ⇒ <code>Promise</code>
客户端连接socket，发起者不必调用此方法

**Kind**: static method of <code>[instance](#module_HJWidget/socket..socket..instance)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [tags] | <code>Array.&lt;string&gt;</code> | 初始链接的tag，可以不传 |

**Example**  
```js
socket.connect().then(()=>{

})
// or
socket.connect(['tag1']).then(()=>{
})
```
<a name="module_HJWidget/socket..socket..instance.addTag"></a>

##### instance.addTag(args) ⇒ <code>Promise</code>
给当前连接的用户添加tag

**Kind**: static method of <code>[instance](#module_HJWidget/socket..socket..instance)</code>  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>[TagObject](#module_HJWidget/socket..TagObject)</code> &#124; <code>Array.&lt;string&gt;</code> | tag对象 |

**Example**  
```js
socket.addTag({
     userId: 979699679,
     tags: ["tag1", "tag2"]
}).then(()=>{

})
// or
socket.addTag(["tag1", "tag2"]).then(()=>{

})
```
<a name="module_HJWidget/socket..socket..instance.removeTag"></a>

##### instance.removeTag(args) ⇒ <code>Promise</code>
给当前连接的用户移除tag

**Kind**: static method of <code>[instance](#module_HJWidget/socket..socket..instance)</code>  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>[TagObject](#module_HJWidget/socket..TagObject)</code> &#124; <code>Array.&lt;string&gt;</code> | tag类型 |

**Example**  
```js
socket.removeTag({
     userId: 979699679,
     tags: ["tag1", "tag2"]
}).then(()=>{

})
```
<a name="module_HJWidget/socket..socket..instance.end"></a>

##### instance.end() ⇒ <code>Promise</code>
关闭连接

**Kind**: static method of <code>[instance](#module_HJWidget/socket..socket..instance)</code>  
**Example**  
```js
socket.end().then(()=>{

})
```
<a name="module_HJWidget/socket..socket..instance.sendMessage"></a>

##### instance.sendMessage(args) ⇒ <code>Promise</code>
发送广播消息

**Kind**: static method of <code>[instance](#module_HJWidget/socket..socket..instance)</code>  

| Param | Type |
| --- | --- |
| args | <code>[MessageBody](#module_HJWidget/socket..MessageBody)</code> | 

**Example**  
```js
socket.sendMessage({
     userType: HJWidget.socket.BROADCAST_USER_TYPE.all,
     message:{
     // message Object
     }
}).then(()=>{

})
// Or
socket.sendMessage({
     userType: HJWidget.socket.BROADCAST_USER_TYPE.tag,
     tag: 'tag1',
     message:{
     // message Object
     }
}).then(()=>{

})
// Or
socket.sendMessage({
     userType: HJWidget.socket.BROADCAST_USER_TYPE.special,
     users: [425253, 643267474],
     message:{
     // message Object
     }
}).then(()=>{

})
```
<a name="module_HJWidget/socket..socket..instance.on"></a>

##### instance.on(eventName, callback)
绑定事件

**Kind**: static method of <code>[instance](#module_HJWidget/socket..socket..instance)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | 事件名称，可以绑定的值为 message和statusChanged |
| callback | <code>[EventCallback](#module_HJWidget/socket..EventCallback)</code> | 事件回调 |

<a name="module_HJWidget/socket..socket..instance.once"></a>

##### instance.once(eventName, callback)
绑定一次事件

**Kind**: static method of <code>[instance](#module_HJWidget/socket..socket..instance)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | 事件名称，值为 message和statusChanged |
| callback | <code>[EventCallback](#module_HJWidget/socket..EventCallback)</code> |  |

<a name="module_HJWidget/socket..socket..instance.off"></a>

##### instance.off(eventName, callback)
取消绑定事件。

**Kind**: static method of <code>[instance](#module_HJWidget/socket..socket..instance)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | 事件名称 |
| callback | <code>function</code> | 取消绑定的事件处理函数，此值如果不传，将取消绑定页面上所有的socket对象的事件。 |

**Example**  
```js
socket.off("statusChanged")
```
<a name="module_HJWidget/socket..event_message"></a>

### "message"
接收消息事件.

**Kind**: event emitted by <code>[HJWidget/socket](#module_HJWidget/socket)</code>  
**Example**  
```js
socket.on("message", (data)=>{
     // 参数data就是其他的socket通过sendMessage方法发送过来的。
})
```
<a name="module_HJWidget/socket..event_statusChanged"></a>

### "statusChanged"
状态变更事件

**Kind**: event emitted by <code>[HJWidget/socket](#module_HJWidget/socket)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | 状态 |
| userId | <code>number</code> | 用户ID，哪一个用户出现了网络变化 |

**Example**  
```js
socket.on("statusChanged", (data)=>{
     // data.status表示当前状态
     console.log(data.status)
})
```
<a name="module_HJWidget/socket..SocketOptions"></a>

### HJWidget/socket~SocketOptions : <code>Object</code>
**Kind**: inner typedef of <code>[HJWidget/socket](#module_HJWidget/socket)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| operatorId | <code>number</code> | 操作者ID |
| businessType | <code>[BUSINESS_TYPE](#module_HJWidget/socket..BUSINESS_TYPE)</code> | 业务类型 |
| sceneType | <code>[CCTALK_SCENE_TYPE](#module_HJWidget/socket..CCTALK_SCENE_TYPE)</code> | 场景类型 |
| sceneId | <code>number</code> | 场景ID |
| widgetKey | <code>string</code> | widget实例唯一key |

<a name="module_HJWidget/socket..MessageBody"></a>

### HJWidget/socket~MessageBody : <code>Object</code>
**Kind**: inner typedef of <code>[HJWidget/socket](#module_HJWidget/socket)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| userType | <code>[BROADCAST_USER_TYPE](#module_HJWidget/socket..BROADCAST_USER_TYPE)</code> | 广播消息的对象类型 |
| tag | <code>string</code> | 对tag进行发送 |
| users | <code>Array.&lt;number&gt;</code> | 对用户进行发送 |
| message | <code>Object</code> | 消息内容 |

<a name="module_HJWidget/socket..SocketBeginArgs"></a>

### HJWidget/socket~SocketBeginArgs : <code>Object</code>
**Kind**: inner typedef of <code>[HJWidget/socket](#module_HJWidget/socket)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| userType | <code>[INIT_USER_TYPE](#module_HJWidget/socket..INIT_USER_TYPE)</code> | 启动socket的时候，需要广播的类型 |
| toUsers | <code>Array.&lt;number&gt;</code> | 指定广播的用户id数组 |

<a name="module_HJWidget/socket..TagObject"></a>

### HJWidget/socket~TagObject
**Kind**: inner typedef of <code>[HJWidget/socket](#module_HJWidget/socket)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| userId | <code>number</code> | 要修改的tag的用户ID, 如果没有设置userId，则修改操作者的tags |
| tags | <code>Array.&lt;string&gt;</code> | tag数组 |

<a name="module_HJWidget/socket..EventCallback"></a>

### HJWidget/socket~EventCallback : <code>function</code>
**Kind**: inner typedef of <code>[HJWidget/socket](#module_HJWidget/socket)</code>  

| Param | Type |
| --- | --- |
| e | <code>[message](#module_HJWidget/socket..event_message)</code> &#124; <code>[statusChanged](#module_HJWidget/socket..event_statusChanged)</code> | 

