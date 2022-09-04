let express = require('express')
let app = express()


app.get('/',function (req,res){
    res.redirect('https://sante-kionou.netlify.app')
})





app.listen(process.env.PORT || 5000,function (){
    console.log('connecter au port 5000');
})