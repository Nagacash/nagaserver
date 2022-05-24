import express from 'express';
import axios from "axios"


const router = express.Router();

router.get('/coins/:id', async (req, res) => {

  const { id } = req.params;

  try {
    //make axios call to coingecko
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);

    return res.status(200).json({ message: 'Crypto by id of crypto', listdata: response.data })

  } catch (error) {
    return res.status(400).json("Error fetching crypto");
  }
});

router.get('/coins', async (req, res) => {
  try {
    //make axios call to coingecko

    //https://api.coingecko.com/api/v3/coins/
    //'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=150&page=1&sparkline=false

    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=150&page=1&sparkline=false`);

    return res.status(200).send({ message: 'Crypto by id of crypto', listdata: response.data })

  } catch (error) {
    return res.status(400).json(error.message);
  }
});

export default router;