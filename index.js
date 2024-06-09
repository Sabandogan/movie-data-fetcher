import express from "express";
import axios from "axios";

const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/", async (req,res)=>{


    await axios.get('https://www.omdbapi.com/?t=breaking+bad&apikey=d20934c1')
    .then(response => {
      
        let veri = response.data;
      console.log(veri);
      res.render("index.ejs",veri);
    })
    .catch(error => {
      // İstek sırasında bir hata oluştuysa
      console.error('Hata:', error);
    });

   
});


app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});