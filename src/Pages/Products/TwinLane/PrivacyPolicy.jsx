import LegalPage, { ContactBlock, List, Note } from "../LegalPage";
import logoImage from "../../../assets/twin-lane-logo.png";

const PRODUCT = "Twin Lane: Dual Car Racing";

const sections = [
  {
    id: "overview",
    title: "Our Privacy Promise",
    body: (
      <>
        <p>
          Twin Lane: Dual Car Racing is a simple offline arcade game. It runs <strong>entirely on your device</strong> and does not
          need an internet connection to play.
        </p>
        <Note>
          <strong>No ads. No sign-up. No data collection.</strong> The game does not collect, upload, store or share any personal
          information, and it contains no advertising, analytics or tracking.
        </Note>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <p>We do <strong>not</strong> collect, store or transmit:</p>
        <List>
          <li>Your name, email address, phone number or contacts</li>
          <li>Your precise or approximate location</li>
          <li>Photos, files or any other content from your device</li>
          <li>Device identifiers, advertising IDs or usage analytics</li>
        </List>
        <p>
          Because the game has no sign-up or login, we have no user accounts and no personal profile about you.
        </p>
      </>
    ),
  },
  {
    id: "data-on-device",
    title: "Data Saved on Your Device",
    body: (
      <>
        <p>To remember your progress, the game saves a few values only in its private storage on your own device:</p>
        <List>
          <li>Your best score</li>
          <li>The number of games you have played</li>
          <li>Your settings: music on/off, sound effects on/off and start speed (1×, 2× or 3×)</li>
        </List>
        <p>This data never leaves your device and we cannot see it.</p>
      </>
    ),
  },
  {
    id: "permissions",
    title: "Internet & Device Permissions",
    body: (
      <p>
        The game works 100% offline. It does <strong>not</strong> request internet access, camera, microphone, location, contacts or
        storage permissions. Vibration feedback during play uses the standard system feature and does not collect any data.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Ads & Third-Party Services",
    body: (
      <>
        <p>
          The game contains no advertising, no analytics, no crash-reporting SDKs and no third-party tracking. No data is sold or shared
          with anyone.
        </p>
        <p>
          The game is distributed through Google Play. Google may collect information such as app installs and device crash reports as
          part of the Play Store, under{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">Google&apos;s Privacy Policy</a>.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention & Deletion",
    body: (
      <p>
        We do not hold any of your data on our servers, so there is nothing for us to retain or delete. Your scores and settings are
        removed when you clear the game&apos;s app data or uninstall the game.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: (
      <p>
        The game does not collect personal information from anyone, including children. If you believe a child has provided us with
        personal information, please contact us and we will help resolve it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will change the &quot;Last Updated&quot; date at the top of
        this page. If a future version ever adds a feature that handles data differently, we will update this policy and the game&apos;s
        Google Play Data Safety section <strong>before</strong> that version is released.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:support@a1itinnovation.com.np" className="text-indigo-600 hover:underline">support@a1itinnovation.com.np</a>{" "}
          or:
        </p>
        <ContactBlock product={PRODUCT} />
      </>
    ),
  },
];

export default function TwinLanePrivacyPolicy() {
  return (
    <LegalPage
      product={PRODUCT}
      logo={logoImage}
      title="Privacy Policy"
      lastUpdated="November 2026"
      canonical="https://www.a1itinnovation.com.np/products/twin-lane/privacy-policy"
      description="Privacy Policy for Twin Lane: Dual Car Racing by A1 IT Innovation. A free offline car game with no ads, no sign-up and no data collection."
      keywords="Twin Lane privacy policy, Twin Lane Dual Car Racing, offline car game, no ads game, A1 IT Innovation game"
      intro={
        <p>
          This Privacy Policy explains how <strong>Twin Lane: Dual Car Racing</strong> (&quot;the game&quot;), developed by A. One IT
          Innovation Pvt. Ltd. (&quot;A1 IT Innovation&quot;, &quot;we&quot;, &quot;us&quot;), handles your information. By using the game,
          you agree to this policy. Please also read our{" "}
          <a href="/products/twin-lane/terms-and-conditions" className="text-indigo-600 hover:underline font-medium">Terms &amp; Conditions</a>.
        </p>
      }
      sections={sections}
    />
  );
}
