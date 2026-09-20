import { InfoPageShell } from "@/components/info-page-shell";

export const metadata = {
  title: "Returns | Iron Kettle USA",
};

export default function ReturnsPage() {
  return (
    <InfoPageShell eyebrow="Returns & Exchanges" title="Returns">
      <p>
        Reserving your spot on our First-Run list does not charge you and is
        not a completed sale — so there's nothing to return at this stage. The
        policy below is what will apply once your order ships and payment is
        collected.
      </p>
      <h2>Our Policy</h2>
      <ul>
        <li>
          If your press arrives damaged or defective, contact us within 30
          days of delivery for a free replacement or full refund.
        </li>
        <li>
          Unused, unopened items may be returned within 30 days of delivery
          for a refund, minus any return shipping costs.
        </li>
        <li>
          To start a return, email us at{" "}
          <a href="mailto:hello@ironkettleusa.com">
            hello@ironkettleusa.com
          </a>{" "}
          with your order details.
        </li>
      </ul>
      <p>
        We're a small company and want you to be happy with your purchase —
        if something's wrong, reach out and we'll make it right.
      </p>
    </InfoPageShell>
  );
}
