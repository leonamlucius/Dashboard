import StatsCards from "./StatsCards";
import RecentTransctions from "./RecentTransctions";
export default function Grid() {
  return (
    <div
      className="px-4 grid gap-3
        grid-cols-12"
    >
      <StatsCards/>
      <RecentTransctions/>
    </div>
  );
}
