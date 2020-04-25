let view = new Vue({
    el:'#app',
    data:{
        books:[
            {number:'1',name:'西游记',author:'吴承恩',price:'23'},
            {number:'2',name:'水浒传',author:'施耐庵',price:'24'},
            {number:'3',name:'三国演义',author:'罗贯中',price:'25'},
            {number:'4',name:'红楼梦',author:'曹雪芹',price:'26'},
        ],
         book:{
            number:0,
            name:'',
            author:'',
            price:'',
         }
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
            console.log(this.books);
        },
        addBook(){
            this.book.number = this.books.length +1
            this.books.push(this.book)
            this.book={}
        }
    }
})