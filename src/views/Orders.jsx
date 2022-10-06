import { Dashboard } from "@/components/widgets/templates/Dashboard/Dashboard";
import { OrdersContent } from "@/components/pages/orders/OrdersContent";

function Orders() {
  return (
    <Dashboard>
      <OrdersContent />
    </Dashboard>
  );
}

export { Orders };
