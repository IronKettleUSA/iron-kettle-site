import { InfoPageShell } from "@/components/info-page-shell";

export const metadata = {
  title: "Privacy Policy | Iron Kettle USA",
};

export default function PrivacyPage() {
  return (
    <InfoPageShell eyebrow="Legal" title="Privacy Policy">
      <p>
        <strong>Effective Date: September 20, 2026</strong>
      </p>
      <p>
        Iron Kettle USA ("we," "us," "our") respects your privacy. This
        policy explains what information we collect through
        ironkettleusa.com, how we use it, who we share it with, and the
        choices you have.
      </p>

      <h2>What We Collect</h2>
      <p>
        When you complete a First-Run Reservation, we collect your first
        name, last name, email address, and optionally your shipping zip
        code. We do not collect payment information at the reservation
        stage.
      </p>
      <p>
        Our website hosting provider automatically logs standard technical
        information for every visitor, such as IP address, browser type, and
        pages visited, as part of normal web server operation and security
        monitoring. We do not currently use analytics tools or marketing
        cookies on this site. If that changes, we will update this policy.
      </p>

      <h2>How We Use It</h2>
      <ul>
        <li>To notify you when the first production run is ready to ship</li>
        <li>To communicate about your reservation or order</li>
        <li>To understand rough demand and shipping regions</li>
        <li>
          To maintain the security and normal operation of our website
        </li>
      </ul>

      <h2>Who Stores Your Information</h2>
      <p>
        Reservation form submissions (name, email, zip code) are stored in a
        Google Sheets spreadsheet managed by Iron Kettle USA, using Google's
        infrastructure. Our website itself is hosted by Vercel Inc. Both
        providers may process or store data on servers located outside the
        state of Texas, and in some cases outside the United States, as part
        of their standard global infrastructure. We do not control the exact
        physical location of this infrastructure, but we only work with
        providers that maintain industry-standard security practices.
      </p>

      <h2>How Long We Keep It</h2>
      <p>
        We retain reservation information for as long as needed to fulfill
        the purpose it was collected for — generally until the First-Run
        Reservation period concludes and related order communication is
        complete — or until you ask us to delete it, whichever comes first.
      </p>

      <h2>What We Don't Do</h2>
      <p>
        We do not sell or rent your information. We do not share it with
        third parties for their own marketing purposes.
      </p>

      <h2>Your Rights</h2>
      <p>
        You can ask us to access, correct, or delete your information at any
        time by emailing{" "}
        <a href="mailto:hello@ironkettleusa.com">hello@ironkettleusa.com</a>.
        We will respond to reasonable requests within 30 days.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Our site and products are not directed to children, and we do not
        knowingly collect personal information from anyone under 13. If we
        learn that we have collected information from a child under 13, we
        will delete it promptly.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy as our business grows. Material changes
        will be reflected by updating the effective date above.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach us at{" "}
        <a href="mailto:hello@ironkettleusa.com">hello@ironkettleusa.com</a>.
      </p>
    </InfoPageShell>
  );
}
