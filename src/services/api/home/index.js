import api from "@/services/api/api";

function getOrders() {
  return api.get("/orders");
}
export { getOrders };
