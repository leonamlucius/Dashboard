import StatsCards from "./StatsCards";
import RecentTransctions from "./RecentTransactions";
import OldestTransctions from "./OldestTransactions";
export default function Grid() {
  return (
    <div
      className="px-4 grid gap-3
        grid-cols-12"
    >
      <StatsCards />
      <RecentTransctions />
      <OldestTransctions />
    </div>
  );
}
