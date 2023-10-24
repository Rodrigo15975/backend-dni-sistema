import axios from "axios";
export const getFetchDNI = async (dni) => {
  const TOKEN = "apis-token-5822.ppgWPYcdBRGiv2S6UZLW5cqZRsQna086";
  try {
    const { data } = await axios.get(
      `https://api.apis.net.pe/v2/reniec/dni?numero=${dni}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    // Devuelve la respuesta de la API de Reniec como respuesta en tu servidor Express
    return { data };
  } catch (error) {
    return error.response.data;
  }
};
