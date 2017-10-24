let express = require('express');

export default class Server {
    constructor() {
        this.app = express();
        this.app.use(express.static('public'));
    }

    start(cb) {
        this.server = this.app.listen(3000, function () {
            if(cb) {
                cb();
            }
        });
    }

    stop(cb) {
        this.server.close(() => {
            if(cb) {
                cb();
            }
        });
    }
}