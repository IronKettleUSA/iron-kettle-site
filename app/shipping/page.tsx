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
        Our first batch is in production with an estimated lead time of 3-4
        weeks. Once units are ready, reserved customers will be contacted by
        email with next steps and estimated delivery windows.
      </p>
      <h2>Tracking</h2>
      <p>
        Once your order ships, you'll receive a confirmation email with
        tracking information.
      </p>
    </InfoPageShell>
  );
}
