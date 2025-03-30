const ClientJs = require("./bot");






class Express {
    static expressJs = require(`express`);
    static api = this.expressJs();
    static bodyParser = require(`body-parser`)
    static cors = require(`cors`);
    static expressConfig(){
        const port = process.env.PORT || 10000
        this.api.use(this.expressJs.json());
        this.api.use(this.bodyParser.json());
        this.api.use(this.cors());
        this.api.listen(port, () => {
            ClientJs.startBot()
            console.log(`Server is running on port ${port}`)


            
        })
    }
}


Express.expressConfig();
