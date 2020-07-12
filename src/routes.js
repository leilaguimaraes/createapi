const routes = require("express").Router();

routes.post("/users", (req, res) =>{
    console.log (a= 3 + 5);
    return res.json({msg :`${a}`})
});
routes.post("/cadastro", (req,res) => {
    const {nome, sobrenome, idade} = req.body;
    return res.json({msg : `meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`})
});
 routes.get("/random", (req, res) =>{
     const r = Math.random().toFixed(2);
     return res.json({msg : `${r}`});
 })
 routes.get("/numero", (req, res) =>{
    const {n} = req.body;
    if(n % 2 == 0){
        return res.json({msg: `O número é par`});
    }
    return res.json({msg : `O número é impar`}); });

module.exports = routes;