# 容器接口

## widget接口

### 方法

#### getEnvironment

获取widget环境

返回字段的信息，参考[API文档](api.md#module_HJWidget..EnvironmentInfo)

```javascript
    invoke("widget.getEnviroment").then((data)=>{
        let {
            sceneType,
            sceneId,
            businessType
        } = data
    })
```

#### getUser

获取当前登陆用户信息，如果没有登陆，执行出错的回调

```javascript
    invoke("widget.getUser").then((data)=>{
        
    })
```

返回的字段信息，参考[API文档](api.md#module_HJWidget/cctalk..UserInfo)

#### maximize

将widget窗口最大化

```javascript
    invoke("widget.maximize").then((data)=>{

    })
```

#### minimize

将widget窗口最小化

```javascript
    invoke("widget.minimiza").then((data)=>{

    })
```

### 事件

#### onClose

```javascript
on("widget.close", ()=>{
    
})
```

#### onMaximize

```javascript
on("widget.onMaximize", ()=>{

})
```

#### onMinimize

```javascript
on("widget.onMinimize", ()=>{

})
```

## socket接口

### 方法

#### sendMessage

发送消息的字段请参考大朝的文档

```javascript
invoke("socket.sendMessage", {
    businessType: 1,
    sceneType:1,
    sceneId: 080707,
    from: 4525234,
    toTag: "",
    toUsers:[],
    message: ""
})
```

### 事件

#### onMessage

```javascript
on("socket.message", (data)=>{

})
```

data字段为具体的消息内容，包含widget_key字段


#### onsocketStatusChanged

事件回调字段，参考[API文档](api.md#module_HJWidget/socket..event_statusChanged)

```javascript
on("socket.statusChanged", ()=>{

})
```

## CCTalk 接口

### 方法

#### getGroupInfo()

返回的字段信息，参考[API文档](api.md#module_HJWidget/cctalk..GroupInfo)

```javascript
invoke("cctalk.getGroupInfo").then((data)=>{
    //
    let {
        groupId,
        isLiving,
        ...
    } = data
})
```

#### getTeacher()

返回的字段信息，参考[API文档](api.md#module_HJWidget/cctalk..UserInfo)

```javascript
invoke("cctalk.getTeacher")
```

#### getUsersOnMic()

返回字段信息。参考[API文档](api.md#module_HJWidget/cctalk..UserInfo)

```javascript
invoke("cctalk.getUsersOnMic")
```

