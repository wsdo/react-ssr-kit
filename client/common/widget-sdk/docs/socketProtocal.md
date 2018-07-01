# Socket Protocal

JSSDK直接通过JSBridge调用原生端的接口，此处和socket打交道的有两个方法，发送消息和接受消息，中间的容器，客户端都对消息做透传，我们需要定义发送消息的协议。

消息的格式采用JSON定义，格式如下：

## 发送消息协议

```
{
    type:"init",
    data:{
        businessType:"",
        senceType:"",
        scene_id:"",
        user_type:"",
        owner:"",
        instanceId:""
    }
}

{
    type:"register",
    data: {
        businessType:"",
        senceType:"",
        tags:[],
        userId:[],
        senceId:[],
        instanceId:[]
    }
}

{
    type: "brodcast",
    data: {
        businessType:"",
        senceType:"",
        senceId:[],
        instanceId:[]
        from:"",
        toTag:[],
        toId:[],
        message:{},
    }
}

{
    type: "setTag",
    data: {
        businessType:"",
        senceType:"",
        senceId:[],
        instanceId:[],
        userId:"",
        tags:[]
    }
}

{
    type:"removeTag",
    data: {
         businessType:"",
        senceType:"",
        senceId:[],
        instanceId:[],
        userId:"",
        tags:[]
    }
}

{
    type: "close",
    data: {
        businessType:"",
        senceType:"",
        senceId:[],
        instanceId:[],
    }
},
```

## 接收消息协议

```
message
{
    type:"message",
    data:{}
}

{
    type:"offline",
    data:{
        userId:""
    }
}

{
    type:"online",
    data:{
        userId:""
    }
}
```


