const express=require('express');
const app = express();
app.get('/',(req,res)=>{
	console.log("someone hit your home");
	res.send('Devops pipeline running')
});
app.listen(3000,()=>{console.log("listening to 3000")});
