import { getTemplates } from "@/lib/api";
import Contact from "./Contact";

export default async function ContactSection() {
  const templateOptions = await getTemplates();

  return <Contact templateOptions={templateOptions} />;
}
