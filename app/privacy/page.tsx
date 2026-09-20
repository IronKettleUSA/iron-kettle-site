import { InfoPageShell } from "@/components/info-page-shell";

export const metadata = {
  title: "Privacy Policy | Iron Kettle USA",
};

export default function PrivacyPage() {
  return (
    <InfoPageShell eyebrow="Legal" title="Privacy Policy">
      <p>
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
      </p>
      <p>
        Iron Kettle USA ("we," "us," "our") respects your privacy. This policy
        explains what information we collect through ironkettleusa.com and
        how we use it.
      </p>
      <h2>What We Collect</h2>
      <p>
        When you reserve a spot on our First-Run list, we collect your first
        name, last name, email address, and optionally your shipping zip
        code. We do not collect payment information at the reservation stage.
      </p>
      <h2>How We Use It</h2>
      <ul>
        <li>To notify you when the first production run is ready to ship</li>
        <li>To communicate about your reservation or order</li>
        <li>To understand rough demand and shipping regions</li>
      </ul>
      <h2>What We Don't Do</h2>
      <p>
        We do not sell, rent, or share your information with third parties
        for marketing purposes.
      </p>
      <h2>Your Rights</h2>
      <p>
        You can ask us to remove your information from our list at any time
        by emailing{" "}
        <a href="mailto:wayne@ironkettleusa.com">wayne@ironkettleusa.com</a>.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach us at{" "}
        <a href="mailto:wayne@ironkettleusa.com">wayne@ironkettleusa.com</a>.
      </p>
    </InfoPageShell>
  );
}
