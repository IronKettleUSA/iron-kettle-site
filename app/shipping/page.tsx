import { InfoPageShell } from "@/components/info-page-shell";

export const metadata = {
  title: "Shipping | Iron Kettle USA",
};

export default function ShippingPage() {
  return (
    <InfoPageShell eyebrow="Shipping Info" title="Shipping">
      <p>
        Iron Kettle USA is currently taking First-Run Reservations for our
        debut product, the Iron Kettle Burger Press. Reserving your spot does
        not charge you today — you'll be notified by email once the first
        production run is ready to ship.
      </p>
      <h2>Where We Ship</h2>
      <p>
        At launch, we will be shipping within the United States only. We may
        expand to additional countries in the future.
      </p>
      <h2>Production & Shipping Timeline</h2>
      <p>
        <strong>Target first-run shipping: November 2026.</strong> Timing may
        change based on final production scheduling and quality inspection.
        Reserved customers will receive updates before payment is requested.
      </p>
      <h2>Tracking</h2>
      <p>
        Once your order ships, you'll receive a confirmation email with
        tracking information.
      </p>
    </InfoPageShell>
  );
}
