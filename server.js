import express from 'express';
import layout from './layout';
const PORT = process.env.PORT || 3000;
const app = express();

// app.use(express.static('client/public')); // TODO: was used when this was NOT an isomorphic app
app.use(express.static('client/dist'));

app.get('/*', (req, res, next) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(layout());
});

app.listen(PORT, () => { console.log(`App is listening on port ${PORT}.`); });