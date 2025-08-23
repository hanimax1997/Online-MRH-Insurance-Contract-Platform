let user = sessionStorage.getItem("userId")
export const environment = {
  production: false,
  //url: 'https://'+(window.location as Location).hostname,
   url: 'https://voyage.axa.dz',
  portSatim: 8980,
  portProduit: user == null ? 8980 : 8980,
  portGeneric: user == null ? 8980 : 8980,
  portPersonne: user == null ? 8980 : 8980,
  portAgence: user == null ? 8980 : 8980,
  portDevis: user == null ? 8980 : 8980,
  portTarification: user == null ? 8980 : 8980,
  portControles: user == null ? 8980 : 8980,
  portContrat: user == null ? 8980 : 8980,
  portUser: user == null ? 8980 : 8980,
  portSinistre: user == null ? 8980 : 8980,
  keyForExchange : "XVxtWzI6T1RITUFORScYPHxBDww6dA9EUg==",
  siteKey: "6Ldis8YqAAAAAFrQXwDr4tNNEL5LS-Wi9fIJ4md2"
};