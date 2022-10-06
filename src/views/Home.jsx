import { HomeContent } from "@/components/pages/home/HomeContent";
import { Dashboard } from "@/components/widgets/templates/Dashboard/Dashboard";

function Home() {
  return (
    <Dashboard>
      <HomeContent />
    </Dashboard>
  );
}

export { Home };
