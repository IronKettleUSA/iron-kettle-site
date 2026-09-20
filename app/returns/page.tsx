import { InfoPageShell } from "@/components/info-page-shell";

export const metadata = {
  title: "Returns | Iron Kettle USA",
};

export default function ReturnsPage() {
  return (
    <InfoPageShell eyebrow="Returns & Exchanges" title="Returns">
      <p>
        Reserving your spot on our First-Run list does not charge you and is
        not a completed sale — so there's nothing to return at this stage.
        The policy below is what will apply once your order ships and
        payment is collected.
      </p>

      <h2>Before You Return Anything</h2>
      <p>
        Please contact us at{" "}
        <a href="mailto:returns@ironkettleusa.com">
          returns@ironkettleusa.com
        </a>{" "}
        before sending anything back. We'll confirm the issue and give you
        return authorization and instructions. Returns sent back without
        first contacting us may experience delays.
      </p>

      <h2>Damaged, Defective, or Wrong Item</h2>
      <ul>
        <li>
          If your press arrives damaged, defective, or isn't what you
          ordered, contact us within 30 days of delivery.
        </li>
        <li>
          We will cover return shipping in these cases and send a free
          replacement or full refund, including your original shipping
          charge, at your choice.
        </li>
        <li>No restocking fee applies when the error is on our end.</li>
      </ul>

      <h2>Change-of-Mind Returns</h2>
      <ul>
        <li>
          Items may be returned within 30 days of delivery if they are
          unused and in original condition. You're welcome to open the box
          to inspect the product — "unused" means the press hasn't been
          used for cooking, not that the packaging must be untouched.
        </li>
        <li>
          Please return the item in its original packaging where possible.
        </li>
        <li>
          The customer is responsible for return shipping costs on
          change-of-mind returns.
        </li>
        <li>
          Original shipping charges are non-refundable for change-of-mind
          returns.
        </li>
      </ul>

      <h2>Refund Processing</h2>
      <p>
        Once we receive and inspect your returned item, we'll process your
        refund within 5-10 business days to your original payment method.
        You'll receive an email confirmation once it's processed.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about a return? Email us at{" "}
        <a href="mailto:returns@ironkettleusa.com">
          returns@ironkettleusa.com
        </a>{" "}
        with your order details. We're a small company and want you to be
        happy with your purchase — if something's wrong, reach out and we'll
        make it right.
      </p>
    </InfoPageShell>
  );
}
