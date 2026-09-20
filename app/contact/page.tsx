import { InfoPageShell } from "@/components/info-page-shell";

export const metadata = {
  title: "Contact | Iron Kettle USA",
};

export default function ContactPage() {
  return (
    <InfoPageShell eyebrow="Get In Touch" title="Contact Us">
      <p>
        Have a question about your reservation, the product, or anything
        else? We're a small team and read every message ourselves.
      </p>
      <h2>Email</h2>
      <p>
        <a href="mailto:wayne@ironkettleusa.com">wayne@ironkettleusa.com</a>
      </p>
      <h2>Response Time</h2>
      <p>
        We typically respond within 1-2 business days. During busy launch
        periods it may take a little longer, but we do get to every message.
      </p>
      <h2>Based In</h2>
      <p>The Woodlands, Texas, USA</p>
    </InfoPageShell>
  );
}
