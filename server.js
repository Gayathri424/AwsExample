const http=require('http')
const path=require('path')

const server=http.createserver((req,res)=>{
  if(req.url=='/'){
    res.writehead(200,content-type:'application/text');
    res.sendfile(path.join(__dirname,'index.html');
  }
}
server.listen(3000,()=>{
  console.log("server running");
}
