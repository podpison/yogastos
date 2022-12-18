import { useScrollTop } from "../../../hooks/useScrollTop";
import { ContactUsForm } from "./ContactUsForm/ContactUsForm";

export const ContactUsPage: React.FC = () => {
  useScrollTop();

  return <main>
    <ContactUsForm />
  </main>
};