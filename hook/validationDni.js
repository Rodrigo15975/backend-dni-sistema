export const validationDNI = (dni = "") => {
  if (dni === "00000000") {
    return { msg: "DNI inválido. No se puede procesar el DNI '00000000'." };
  }
  if (dni === "" || dni.length !== 8 || isNaN(dni)) {
    return {
      msg: "DNI incorrecto. El número de DNI debe tener 8 dígitos numéricos.",
    };
  }
};
