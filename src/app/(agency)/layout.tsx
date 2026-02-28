import AgencyLayout from "@/components/AgencyLayout";

export default function AgencyLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AgencyLayout>{children}</AgencyLayout>;
}
