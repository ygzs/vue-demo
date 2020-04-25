let preBooks = [
    {number:'1',name:'西游记',author:'吴承恩',price:'23'},
    {number:'2',name:'水浒传',author:'施耐庵',price:'24'},
    {number:'3',name:'三国演义',author:'罗贯中',price:'25'},
    {number:'4',name:'红楼梦',author:'曹雪芹',price:'26'},
]
axios.interceptors.response.use(function (response) {
    let config = response.config
    let {url,method,data} = config
    if(url==='/'&& method==='get'){
        data = preBooks
    }
    else if(url==='/'&& method==='put'){
        this.preBooks.splice(data,1)
        data = preBooks
    }
    return data
})

let model = {
    data:[],
    fetch(){
        return axios.get('/').then((data)=>{
            this.data = data
            return data
        })
    },
    update(obj){
        return axios.post('/',obj).then(()=>{
            this.data = data
            return data
        })
    }
}

let view = new Vue({
    el:'#app',
    data:{
        books:[
            //{number:'1',name:'西游记',author:'吴承恩',price:'23'},
            //{number:'2',name:'水浒传',author:'施耐庵',price:'24'},
            //{number:'3',name:'三国演义',author:'罗贯中',price:'25'},
            //{number:'4',name:'红楼梦',author:'曹雪芹',price:'26'},
        ],
         book:{
            number:0,
            name:'',
            author:'',
            price:'',
         }
    },
    created(){
        model.fetch().then(()=>{
            this.books = model.data
        })
    },
    computed:{
        amounts:function(){
            let sum = 0
            for (let index = 0; index < this.books.length; index++) {
                sum += this.books[index].price-0
            }
            return sum
        }
    },
    methods:{
        deleteBook(index){
            this.books.splice(index,1)
            //let obj = {num:index}
            //model.update(obj).then(()=>{
            //    this.books = model.data
            //})
        },
        addBook(){
            this.book.number = this.books.length +1
            this.books.push(this.book)
            this.book={}
        }
    }
})