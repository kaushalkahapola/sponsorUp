import express from 'express';
import {router} from './routes/apiRoute.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use('/api', router);


app.get('*', (req, res) => {
  res.json({ message: 'Boooh' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
