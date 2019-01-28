import Koa from 'koa';
import path from 'path';
import resource from 'koa-static';
import cacheControl from 'koa-cache-control'
import etag from 'koa-etag'
import conditional from 'koa-conditional-get'

const app = new Koa();
const host = 'localhost';
const port = 3000;

app.use(cacheControl({
    maxAge: 30
}))
app.use(conditional());
app.use(etag());

app.use(resource(path.join(__dirname, './static')));

app.listen(port, () => {
  console.log(`server is listen in ${host}:${port}`);
});
