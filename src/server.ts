import app from './app.ts';
import config from './config/index.ts';

const port = config.port;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});