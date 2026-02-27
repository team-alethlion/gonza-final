import AgencyDashboardClient from "./components/AgencyDashboardClient";

export default function AgencyDashboard() {
  // This is now a Server Component. 
  // In the future, you can fetch data here and pass it as props to the client component.
  return <AgencyDashboardClient />;
}
