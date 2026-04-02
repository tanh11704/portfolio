import { ContactPageSection } from "@/widgets/contact-page/ui/ContactPageSection";

export default function ContactPage() {
  return (
    <main id="contact-page" className="overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
        <ContactPageSection />
      </div>
    </main>
  );
}
