import LegalPage, { ContactBlock, List } from "../LegalPage";
import logoImage from "../../../assets/twin-lane-logo.png";

const PRODUCT = "Twin Lane: Dual Car Racing";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: (
      <p>
        By downloading, installing or playing Twin Lane: Dual Car Racing, you agree to these Terms &amp; Conditions and our
        <a href="/products/twin-lane/privacy-policy" className="text-indigo-600 hover:underline font-medium mx-1">Privacy Policy</a>.
        If you do not agree, please do not use the game and uninstall it from your device.
      </p>
    ),
  },
  {
    id: "about-game",
    title: "About the Game",
    body: (
      <>
        <p>
          Twin Lane is a free, offline arcade reflex game. You control two cars at the same time: collect circles, avoid squares and try to
          beat your best score.
        </p>
        <List>
          <li>No ads</li>
          <li>No sign-up or account</li>
          <li>Works 100% offline</li>
        </List>
        <p>Features may be added, changed or removed in future updates. These terms apply to all versions of the game.</p>
      </>
    ),
  },
  {
    id: "license",
    title: "License to Use",
    body: (
      <>
        <p>
          We grant you a personal, non-exclusive, non-transferable, revocable license to install and play Twin Lane on devices you own or
          control, for personal and non-commercial entertainment, in line with these terms and the Google Play Terms of Service.
        </p>
        <p>You agree not to:</p>
        <List>
          <li>Copy, modify, reverse-engineer, decompile or redistribute the game, except where the law allows it</li>
          <li>Remove copyright or proprietary notices from the game</li>
          <li>Resell, rent or publish modified or cloned versions of the game</li>
          <li>Extract or reuse the game&apos;s graphics, music or sound effects in other products</li>
        </List>
      </>
    ),
  },
  {
    id: "pricing",
    title: "Price, Ads & Purchases",
    body: (
      <p>
        Twin Lane is free to download and play. It contains no ads and no in-app purchases. If this ever changes in a future version, it will
        be shown clearly on Google Play and in the game, and any payments will be processed by Google Play under Google&apos;s billing and
        refund policies.
      </p>
    ),
  },
  {
    id: "scores",
    title: "Scores & Game Data",
    body: (
      <p>
        Your best score, games played and settings are stored only on your device. They are not backed up by us, and we cannot restore them if
        you clear the app&apos;s data, uninstall the game or change or reset your device.
      </p>
    ),
  },
  {
    id: "safe-play",
    title: "Play Safely",
    body: (
      <>
        <p>Twin Lane is a fast-paced game with moving objects and flashing effects. Please:</p>
        <List>
          <li>Do not play while driving, walking in traffic or doing anything that needs your full attention</li>
          <li>Take regular breaks to rest your eyes and hands</li>
          <li>Stop playing and seek medical advice if you feel dizzy, unwell or experience any discomfort</li>
        </List>
      </>
    ),
  },
  {
    id: "updates",
    title: "Updates",
    body: (
      <p>
        We may release updates to fix bugs, improve performance or add features. Keeping the game updated is recommended for the best
        experience.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <p>
        The Twin Lane name, logo, game design, graphics, music, sound effects and source code are the property of A. One IT Innovation Pvt.
        Ltd. and are protected by applicable intellectual property laws. Open-source components used in the game remain under their
        respective licenses.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    body: (
      <p>
        The game is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, whether express or implied. We do not
        guarantee that the game will be error-free or uninterrupted, or that it will work on every device.
      </p>
    ),
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    body: (
      <p>
        To the maximum extent permitted by law, A1 IT Innovation is not liable for any indirect, incidental or consequential damages,
        including loss of scores or game data, arising from your use of or inability to use the game. Where liability cannot be excluded, it
        is limited to the amount you paid for the game, if any.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <p>
        You may stop using the game at any time by uninstalling it. We may end your license if you break these terms. Sections on
        intellectual property, disclaimers and limitation of liability survive termination.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: (
      <p>
        These terms are governed by the laws of Nepal. Any dispute will be handled by the competent courts of Nepal, without affecting any
        consumer rights you have under the laws of your own country.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these Terms &amp; Conditions from time to time. The &quot;Last Updated&quot; date at the top shows the latest version.
        Continuing to play after changes means you accept the updated terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>
          For questions about these Terms &amp; Conditions, contact us at{" "}
          <a href="mailto:support@a1itinnovation.com.np" className="text-indigo-600 hover:underline">support@a1itinnovation.com.np</a>{" "}
          or:
        </p>
        <ContactBlock product={PRODUCT} />
      </>
    ),
  },
];

export default function TwinLaneTerms() {
  return (
    <LegalPage
      product={PRODUCT}
      logo={logoImage}
      title="Terms & Conditions"
      lastUpdated="November 2026"
      canonical="https://www.a1itinnovation.com.np/products/twin-lane/terms-and-conditions"
      description="Terms and Conditions for Twin Lane: Dual Car Racing by A1 IT Innovation, a free offline arcade car game with no ads and no sign-up."
      keywords="Twin Lane terms and conditions, Twin Lane Dual Car Racing, offline car game, A1 IT Innovation game"
      intro={
        <p>
          These Terms &amp; Conditions govern your use of the <strong>Twin Lane: Dual Car Racing</strong> mobile game (&quot;the game&quot;),
          developed and published by A. One IT Innovation Pvt. Ltd. (&quot;A1 IT Innovation&quot;, &quot;we&quot;, &quot;us&quot;). Please read them
          carefully before playing.
        </p>
      }
      sections={sections}
    />
  );
}
