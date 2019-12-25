import express from 'express';
import * as path from 'path';
import { shared_var } from '../../common';

const app = express();
const port = process.argv[2] === 'prod' ? 80 : 3000;

export const bootstrapApi = () => {
    console.log(`Shared resource loaded in: ${shared_var}`);
    console.log(`Api sever is bootstrapping.`);

    app.get('/api/hello', (req, res) => res.send('Hello World!'));

    app.use('/', express.static(path.join(__dirname, '../../frontend')));

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}