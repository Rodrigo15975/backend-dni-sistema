console.clear();
import express from "express";
import cors from "cors";
import { getFetchDNI } from "./hook/getFetchDni.js";
const server = express();

server.use(cors());
server.use(express.json());

server.get("/dni", async (req, res) => {
  const { numero } = req.query;
  if (!numero) return res.send({ msg: "Digite un dni" });

  try {
    const dataDNI = await getFetchDNI(numero);
    return res.send(dataDNI);
  } catch (error) {
    res.send(error);
  }
});

server.listen(3000, () => {
  console.log("listen in port 3000");
});
