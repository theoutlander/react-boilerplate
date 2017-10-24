import assert from 'assert'
import server from '../server'

describe('Test WebServer', () => {
    describe('Started', () => {
        let webserver = new server();

        it('should start and trigger a callback', () => {
            webserver.start(() => assert(true, "Webserver started"))
        });

        it('should stop and trigger a callback', () => {
            webserver.stop(() => assert(true, "Webserver stopped"))
        })
    });
});