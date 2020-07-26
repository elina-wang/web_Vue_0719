console.log("我是JS")


// 定義渲染區域
// 變數 vue1 = new Vue();   -要新增一個Vue元素
// el 指定元素 "選取器"

var vue1 = new Vue ({
    el: "#vue1",
    data: {
        text:"我是Vue～",
        a:999,    //數字
        b:2,
        c:"2",    //字串
    }
});

var vue2 = new Vue ({
    el: "#vue2",
    data: {
        alignment:"center",
    }
});


var vue3 = new Vue ({
    el: "#vue3",
    data: {
        text:false,
        activity:false,
    }
});

var vue4 = new Vue ({
    el: "#vue4",
    data: {
        products: [
            {name:"奶茶",price:45},
            {name:"紅茶",price:30},
            {name:"綠茶",price:35},
            {name:"咖啡",price:55},
        ]
    }
    
});

var vue5 = new Vue ({
    el: "#vue5",
    data: {
        text:"",
        count:0,
        t1:"",
    },

    methods:{
        show: function () {
            this.text = "點到了"
        },

        add: function () {
            this.count++
        },

        sub: function () {
            this.count--
        },

        write: function () {
            this.t1 = "點到囉"
        }

    }


});


var vue6 = new Vue ({
    el: "#vue6",
    data: {
        name:""
    }
    
});

Vue.component ("test-a", {
    template:"<h4>這是測試元件</h4>"
})

var vue7 = new Vue({
    el: "#vue7"
})

Vue.component("test-b", {
    template: ` <h2>我是標題二</h2>
    <p>段落文字</p>
    <hr>
    `
})

var vue8 = new Vue ({
    el:"#vue8"
})

Vue.component("nav-a", {
    template:` <nav>
        <a href="#">小說節錄</a>
        <a href="#">新詩精選</a>
        <a href="#">散文小品</a>

    </nav>
    `
})

var nav = new Vue ({
    el:"#nav-a"
})