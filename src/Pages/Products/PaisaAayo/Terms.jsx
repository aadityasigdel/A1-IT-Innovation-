import LegalPage, { ContactBlock, List, Note } from "../LegalPage";
import logoImage from "../../../assets/paisa-aayo-logo.png";

const PRODUCT = "Paisa Aayo";
const link = "text-indigo-600 hover:underline font-medium";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: (
      <p>
        By downloading, installing or using Paisa Aayo, you agree to these Terms &amp; Conditions and our
        <a href="/products/paisa-aayo/privacy-policy" className={`${link} mx-1`}>Privacy Policy</a>.
        If you do not agree, please do not use the app and uninstall it from your device.
      </p>
    ),
  },
  {
    id: "about-app",
    title: "About the App",
    body: (
      <>
        <p>Paisa Aayo is a &quot;payment speaker&quot; for Android. It:</p>
        <List>
          <li>Detects incoming-payment notifications from payment apps, bank apps and bank SMS that you select</li>
          <li>Announces the amount (and optionally the sender) aloud in Nepali</li>
          <li>Keeps a payment history and daily, weekly and monthly totals on your phone</li>
          <li>Optionally announces the same payments on connected staff phones</li>
        </List>
        <p>Features may be added, changed or removed over time. These terms apply to all current and future features.</p>
      </>
    ),
  },
  {
    id: "not-a-payment-service",
    title: "Not a Payment Service — Always Verify",
    body: (
      <>
        <Note>
          <strong>Paisa Aayo only reads notifications. It does not receive, hold, send or confirm money.</strong> An announcement is a
          convenience, not proof of payment.
        </Note>
        <List>
          <li>Before handing over goods or services, <strong>confirm the payment in your official wallet or bank app</strong>, especially for large amounts.</li>
          <li>The app may miss or misread a payment if: the notification is delayed, hidden or worded differently; notification access is off; the phone has stopped the app (battery saver, autostart settings); the volume is muted; or there is no internet (staff phones).</li>
          <li>We are not responsible for any loss caused by a missed, delayed, duplicated or incorrect announcement, or by a fraudulent notification or message shown by another app or person.</li>
        </List>
      </>
    ),
  },
  {
    id: "independence",
    title: "No Affiliation",
    body: (
      <p>
        Paisa Aayo is an independent app made by A1 IT Innovation. It is <strong>not affiliated with, endorsed by or sponsored by</strong>{" "}
        eSewa, Khalti, Fonepay, IME Pay, Nepal Rastra Bank or any bank. All product names and trademarks belong to their respective owners
        and are used only to describe compatibility. Those apps may change their notifications at any time, which can affect detection
        until we release an update.
      </p>
    ),
  },
  {
    id: "staff-phones",
    title: "Staff Phones",
    body: (
      <List>
        <li>The shop owner decides which phones are connected and is responsible for approving only phones they trust.</li>
        <li>Do not share or post the pairing QR code; anyone who sees it while it is valid could ask to join (the owner must still approve).</li>
        <li>Remove a staff phone from &quot;Staff devices&quot; when that person no longer works with you.</li>
        <li>Staff phones need an internet connection and depend on the owner&apos;s phone being on and connected.</li>
        <li>Use of this feature must comply with applicable laws, including your employees&apos; privacy.</li>
      </List>
    ),
  },
  {
    id: "license",
    title: "License to Use",
    body: (
      <>
        <p>
          We grant you a personal, non-exclusive, non-transferable, revocable license to install and use Paisa Aayo on devices you own or
          control, in line with these terms and the Google Play Terms of Service.
        </p>
        <p>You agree not to:</p>
        <List>
          <li>Copy, modify, reverse-engineer, decompile or redistribute the app, except where the law allows it</li>
          <li>Interfere with, overload or try to gain unauthorised access to the app&apos;s cloud services</li>
          <li>Use the app to monitor another person&apos;s phone without their knowledge and consent</li>
          <li>Resell, rent or publish modified versions of the app</li>
        </List>
      </>
    ),
  },
  {
    id: "pricing",
    title: "Free & Paid Features",
    body: (
      <p>
        Paisa Aayo is currently free to use. If we introduce paid features in the future, prices will be shown clearly in the app before you
        buy, and payments will be processed by Google Play under Google&apos;s billing and refund policies.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Updates",
    body: (
      <p>
        We release updates to improve detection, fix bugs and strengthen security. The app may remind you when a new version is available on
        Google Play. Keeping the app updated is strongly recommended so that payments are detected correctly.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <p>
        The Paisa Aayo name, logo, design and source code are the property of A. One IT Innovation Pvt. Ltd. and are protected by applicable
        intellectual property laws. Open-source components used in the app remain under their respective licenses.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    body: (
      <p>
        The app is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, whether express or implied, including
        fitness for a particular purpose. We do not guarantee that every payment will be detected or announced, that the app will be
        error-free or uninterrupted, or that it will work on every device.
      </p>
    ),
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    body: (
      <p>
        To the maximum extent permitted by law, A1 IT Innovation is not liable for any indirect, incidental or consequential damages,
        including lost sales, lost money or business loss, arising from your use of or inability to use the app. Where liability cannot be
        excluded, it is limited to the amount you paid for the app, if any.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <p>
        You may stop using the app at any time by uninstalling it. We may suspend or end access to the app&apos;s cloud features if you break
        these terms. Sections on disclaimers, limitation of liability and intellectual property survive termination.
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
        Continuing to use the app after changes means you accept the updated terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>For questions about these Terms &amp; Conditions, please contact us:</p>
        <ContactBlock product={PRODUCT} />
      </>
    ),
  },
];

export default function PaisaAayoTerms() {
  return (
    <LegalPage
      product={PRODUCT}
      logo={logoImage}
      title="Terms & Conditions"
      lastUpdated="November 2026"
      canonical="https://www.a1itinnovation.com.np/products/paisa-aayo/terms-and-conditions"
      description="Terms and Conditions for Paisa Aayo by A1 IT Innovation — a payment speaker app that announces eSewa, Khalti, Fonepay and bank payments aloud in Nepali."
      keywords="Paisa Aayo terms and conditions, payment speaker app Nepal, soundbox app, A1 IT Innovation app"
      intro={
        <p>
          These Terms &amp; Conditions govern your use of the <strong>Paisa Aayo</strong> mobile application (&quot;the app&quot;), developed
          and published by A. One IT Innovation Pvt. Ltd. (&quot;A1 IT Innovation&quot;, &quot;we&quot;, &quot;us&quot;). Please read them carefully
          before using the app.
        </p>
      }
      sections={sections}
    />
  );
}
