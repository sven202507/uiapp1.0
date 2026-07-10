import type { Metadata } from "next";
import NovaProductEntryPage from "@/components/nova-entry/NovaProductEntryPage";

export const metadata: Metadata = {
  title: "Nova Finance",
  description: "Responsible financial services for Cambodia",
};

export default function NovaEntryPage() {
  return <NovaProductEntryPage />;
}
