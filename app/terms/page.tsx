import { InfoPageShell } from "@/components/info-page-shell";

export const metadata = {
  title: "Terms of Service | Iron Kettle USA",
};

export default function TermsPage() {
  return (
    <InfoPageShell eyebrow="Legal" title="Terms of Service">
      <p>
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
      </p>
      <p>
        Welcome to ironkettleusa.com. By using this site, you agree to the
        following terms.
      </p>
      <h2>First-Run Reservations</h2>
      <p>
        Submitting your email through our reservation form reserves your
        place on our First-Run notification list. It is not a purchase, and
        no payment is collected at this stage. Reserving a spot does not
        guarantee a unit will be available; our first run is limited to 100
        units.
      </p>
      <h2>First-Run Reservation Pricing</h2>
      <p>
        Customers who complete a First-Run Reservation while our first batch
        of 100 units is available are guaranteed a price of{" "}
        <strong>$44.99</strong> for their unit when payment is collected,
        even if our listed price changes before then. This guarantee applies
        only to qualified First-Run Reservations — those submitted before our
        first run of 100 units sells out or the reservation period closes,
        whichever happens first.
      </p>
      <p>
        Pricing for any units beyond the first 100, future production runs,
        bundles, or additional products is not covered by this guarantee and
        may differ from the First-Run Reservation price.
      </p>
      <h2>Product Information</h2>
      <p>
        We do our best to accurately describe our products, including
        materials, dimensions, and weight. Minor variations may occur due to
        manufacturing.
      </p>
      <h2>Intellectual Property</h2>
      <p>
        All content on this site — including text, images, and branding — is
        the property of Iron Kettle USA and may not be used without
        permission.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        Iron Kettle USA products are intended for standard home and outdoor
        cooking use. Use products as directed and exercise normal care around
        heat sources.
      </p>
      <h2>Governing Law</h2>
      <p>These terms are governed by the laws of the State of Texas, USA.</p>
      <h2>Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href="mailto:hello@ironkettleusa.com">hello@ironkettleusa.com</a>.
      </p>
    </InfoPageShell>
  );
}
