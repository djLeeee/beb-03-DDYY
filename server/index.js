const express =require('express');
const app = express();
const port = 8080;
const nftRouter = require('./routes/nft')
const etherRouter = require('./routes/ether')
const cors = require('cors');
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json());

app.use('/nft',nftRouter);
app.use('/ether',etherRouter);

app.get('/', (req, res) => {
  
});
app.listen(port, () => {
	console.log('Listening...');
});