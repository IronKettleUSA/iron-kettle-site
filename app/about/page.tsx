import { InfoPageShell } from "@/components/info-page-shell";

export const metadata = {
  title: "About | Iron Kettle USA",
};

export default function AboutPage() {
  return (
    <InfoPageShell eyebrow="Our Story" title="About Iron Kettle USA">
      <p>
        Iron Kettle USA is a Texas-based company built on a simple idea: the
        tools you use for real cooking should be as tough as the meal you're
        making. We were tired of flimsy, disposable kitchen gadgets that warp,
        crack, or end up in a drawer after one summer.
      </p>
      <p>
        Our first product, the Iron Kettle Burger Press, is machined from
        solid 304 stainless steel — no cast iron rust, no plastic parts, no
        gimmicks. It's built to deliver a perfect edge-to-edge smash-burger
        crust, cookout after cookout, for years to come.
      </p>
      <p>
        We're a small, first-run operation — this is a limited batch of 100
        units before we scale up. We believe in being upfront about that: this
        is a real, growing business, and every reservation helps us bring the
        next batch to life.
      </p>
      <h2>Who We Are</h2>
      <p>
        Iron Kettle USA is operated out of The Woodlands, Texas. We design and
        source our products to commercial-grade standards, and we stand behind
        every piece we sell.
      </p>
    </InfoPageShell>
  );
}
