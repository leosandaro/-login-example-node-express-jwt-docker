import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { connect } from './database';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await connect();
  console.log('Database connected');
});