import express, { Express } from 'express'
import router from './routes';

export default class App {
    server: Express

    constructor() {
    
        this.server = express();

        this.server.use(express.json())

        this.routes();
    }

    private routes(): void {
        this.server.use(router);
      }
    
      public start(port: number = 3001): void {
        this.server.listen(port, () => {
          console.log(`Listening on port ${port}`);
        });
      }
}