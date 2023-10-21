import ApiConnector from "./ApiConnector/ApiConnector.js";

const connector = new ApiConnector();

console.log(connector.buildUrl(2));
