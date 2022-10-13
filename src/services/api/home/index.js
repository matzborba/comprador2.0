import api from "@/services/api/api";

function getOrders() {
  return api.get("/orders");
}

function getOffers() {
  return api.get("/offers");
}

function getPurchases() {
  return api.get("/purchases");
}

function getActions() {
  return api.get("/actions");
}

function getActionsPerDate() {
  return api.get("/actionsPerDate");
}

function getTable() {
  return api.get("/tableData");
}

export {
  getOrders,
  getOffers,
  getPurchases,
  getActions,
  getActionsPerDate,
  getTable,
};
