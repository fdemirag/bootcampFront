const app = Vue.createApp({
    data(){
        return{
            title : "Bu Vue tarafından set edilmiş başlık.",
            message : " lorem10",
            todoList:["yapılacak1","yapılacak2","yapılacak3"],
            link :{
                url:"https:/www.google.com.tr" ,
                target:"_blank",
                title :"Google WEB"
            },
            description : `<h3>Bu Dbden geliyor<h3/>
            <img width=100 src='https://www.dermokozmetika.com.tr/nivea-cream-nemlendirici-krem-orta-boy-75ml-28788-22-B.jpg'/>
            `,
            coords:"0,0"
        }
       },
       methods:{

        update(fieldName){
                
                if(fieldName === "title")this.changeTitle();
                else if (fieldName==="link")this.changeLink();
        },

        changeTitle(){ 
            this.title ="bardak";
           
        },
        changeLink(){
            this.link={
                url:"https://www.gkandemir.com.tr",
                target:"self",
                title:"google website 123"
            }
        },
        trackMouse({x,y}){
               this.coords=`${x},${y}` 
        },
        containerEnter(){
            console.log("alana girildi")
        },  containerOut(){
            console.log("alandan çıkıldı")
        },
       }   
  
}).mount("#app")