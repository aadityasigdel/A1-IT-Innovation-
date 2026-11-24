import LegalPage, { ContactBlock, List, Note } from "../LegalPage";
import logoImage from "../../../assets/paisa-aayo-logo.png";

const PRODUCT = "Paisa Aayo";
const link = "text-indigo-600 hover:underline font-medium";

const sections = [
  {
    id: "overview",
    title: "Our Privacy Promise",
    body: (
      <>
        <p>
          Paisa Aayo (पैसा आयो) announces incoming payments aloud in Nepali. To do that it reads payment notifications on your phone.
          We designed it so that <strong>your payment information stays on your phone</strong>.
        </p>
        <Note>
          <strong>No account, no ads, no tracking, no selling of data.</strong> Your payment history is stored only on your device.
          The only time any payment information leaves your phone is when <strong>you</strong> connect a staff phone — and even then
          it is <strong>end-to-end encrypted</strong>, so neither we nor Google can read it.
        </Note>
      </>
    ),
  },
  {
    id: "notification-access",
    title: "Notification Access",
    body: (
      <>
        <p>
          Paisa Aayo asks for Android&apos;s <strong>Notification access</strong>. This is the core of the app: it is how the app learns that a
          payment has arrived. We explain this inside the app before asking.
        </p>
        <List>
          <li>The app checks notifications only from <strong>payment apps</strong> (for example eSewa, Khalti, Fonepay and bank apps), from your <strong>SMS app</strong> if you turn on &quot;Bank SMS alert&quot;, and from any other app <strong>you choose</strong> on the Apps screen.</li>
          <li>Notifications from all other apps (WhatsApp, Facebook, email, etc.) are <strong>not read or stored</strong>. Chat apps are never read automatically.</li>
          <li>From a selected app, the app looks only for incoming-payment messages (amount, sender name). Debit, OTP and promotional messages are ignored.</li>
          <li>The &quot;Notification log&quot; that helps you check which app was detected is kept <strong>in memory only</strong>; it is never saved and disappears when the app closes. For apps you have not selected it shows only the app name, never the text.</li>
        </List>
        <p>You can turn Notification access off at any time in your phone&apos;s Settings; the app will then stop announcing payments.</p>
      </>
    ),
  },
  {
    id: "data-on-device",
    title: "Information Stored on Your Phone",
    body: (
      <>
        <p>The following is saved <strong>only on your device</strong>, in the app&apos;s private storage:</p>
        <List>
          <li>Payment history: amount, sender name (if present), source app, the payment notification text and the time</li>
          <li>Your settings (voice speed, selected apps, schedule and similar preferences)</li>
        </List>
        <p>
          This information is not uploaded to us. Announcements are spoken with your phone&apos;s own text-to-speech engine (for example
          Google Speech Services), which works under its provider&apos;s privacy policy.
        </p>
      </>
    ),
  },
  {
    id: "staff-device",
    title: "Optional Staff Phone Feature",
    body: (
      <>
        <p>
          If you choose to connect a second phone (for example a staff member&apos;s phone in your shop), payments detected on the owner&apos;s phone
          are also announced on the staff phone. This feature is <strong>off until you use it</strong>. When used, it works through
          Google Firebase as follows:
        </p>
        <List>
          <li><strong>Anonymous sign-in:</strong> each phone gets a random Firebase ID. We never ask for your name, phone number or email.</li>
          <li><strong>Payment events:</strong> the amount, sender name, source app and time are <strong>encrypted on the owner&apos;s phone</strong> (AES-256-GCM) before upload and decrypted only on approved staff phones. The encryption key is shared only through the QR code and is never sent to any server.</li>
          <li><strong>Device names:</strong> the model name of a staff phone (for example &quot;Redmi Note 13&quot;) is stored so the owner can recognise and approve or remove it.</li>
          <li><strong>Shop record:</strong> a random shop ID linked to the owner&apos;s anonymous ID, and the list of approved phones.</li>
          <li><strong>App Check:</strong> Firebase App Check (Google Play Integrity) verifies that requests come from the genuine Paisa Aayo app.</li>
        </List>
        <p>
          Encrypted payment events are deleted from the cloud automatically after about 2 days. This data is processed by Google as our
          service provider under the <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className={link}>Firebase Privacy and Security terms</a>.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "How We Protect Your Data",
    body: (
      <List>
        <li><strong>End-to-end encryption</strong> of relayed payments (AES-256-GCM). The ciphertext is bound to your shop, so it cannot be reused anywhere else, and any tampering is detected.</li>
        <li><strong>Hardware-backed key storage:</strong> the shop key is stored encrypted by the Android Keystore and cannot be copied out of the phone.</li>
        <li><strong>Owner approval:</strong> scanning the QR is not enough — the owner must tap &quot;Allow&quot; for every new phone.</li>
        <li><strong>Short-lived QR:</strong> each QR expires after 5 minutes, works for one phone only, and screenshots are blocked while it is shown.</li>
        <li><strong>Server-side rules:</strong> only the owner&apos;s phone can publish payments (no one can fake a &quot;payment received&quot; announcement) and only approved phones can read them. Removing a phone cuts its access immediately.</li>
        <li>All network traffic uses TLS (HTTPS).</li>
        <li>We recommend keeping a screen lock on your phone and your Android version up to date.</li>
      </List>
    ),
  },
  {
    id: "permissions",
    title: "Device Permissions",
    body: (
      <List>
        <li><strong>Notification access</strong> — to detect payment notifications (see above).</li>
        <li><strong>Notifications</strong> — to show the &quot;Paisa Aayo is listening&quot; status and test notifications.</li>
        <li><strong>Foreground service</strong> — keeps the app running so payments are not missed. You can turn the status notification off in Settings.</li>
        <li><strong>Internet</strong> — used only by the optional staff phone feature and its security checks.</li>
        <li><strong>Run at startup</strong> — reconnects a staff phone after the phone restarts.</li>
        <li><strong>List of installed apps (launcher apps only)</strong> — so you can choose which payment apps to listen to. This list never leaves your phone.</li>
      </List>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    body: (
      <>
        <p>
          Paisa Aayo is distributed through Google Play. Google may collect information such as installs and crash reports under{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={link}>Google&apos;s Privacy Policy</a>.
          The app may use Google Play&apos;s in-app review and in-app update features, which are provided by Google Play.
        </p>
        <p>
          The app contains <strong>no advertising and no analytics SDKs</strong>. If this ever changes, we will update this policy and the
          Google Play Data Safety section <strong>before</strong> releasing that version.
        </p>
        <p>
          Paisa Aayo is an independent app and is <strong>not affiliated with</strong> eSewa, Khalti, Fonepay, IME Pay or any bank. Their names are
          used only to describe compatibility.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention & Deletion",
    body: (
      <List>
        <li>Delete your payment history at any time from Statement → delete icon.</li>
        <li>Uninstalling the app, or clearing its storage, removes everything stored on your phone.</li>
        <li>A staff phone can tap &quot;Disconnect&quot;, and the owner can remove any staff phone; access ends immediately.</li>
        <li>Encrypted payment events are deleted from the cloud after about 2 days.</li>
        <li>To delete your shop record (random shop ID and device names) from the cloud, contact us using the details below and we will delete it within 30 days.</li>
      </List>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: (
      <p>
        Paisa Aayo is a business tool for shop owners and is not directed at children under 13. We do not knowingly collect personal
        information from children. If you believe a child has provided personal information, please contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will change the &quot;Last Updated&quot; date at the top of this
        page. Significant changes will also be announced in the app or in the Google Play release notes.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>If you have any questions about this Privacy Policy or how Paisa Aayo handles your data, please contact us:</p>
        <ContactBlock product={PRODUCT} />
      </>
    ),
  },
];

export default function PaisaAayoPrivacyPolicy() {
  return (
    <LegalPage
      product={PRODUCT}
      logo={logoImage}
      title="Privacy Policy"
      lastUpdated="November 2026"
      canonical="https://www.a1itinnovation.com.np/products/paisa-aayo/privacy-policy"
      description="Privacy Policy for Paisa Aayo by A1 IT Innovation — the payment speaker app for Nepal. Payment history stays on your phone; the optional staff phone feature is end-to-end encrypted."
      keywords="Paisa Aayo privacy policy, payment speaker Nepal, eSewa Khalti Fonepay sound alert, notification access, A1 IT Innovation app"
      intro={
        <p>
          This Privacy Policy explains how <strong>Paisa Aayo</strong> (&quot;the app&quot;), developed by A. One IT Innovation Pvt. Ltd.
          (&quot;A1 IT Innovation&quot;, &quot;we&quot;, &quot;us&quot;), handles your information. By using the app, you agree to this policy.
          Please also read our <a href="/products/paisa-aayo/terms-and-conditions" className={link}>Terms &amp; Conditions</a>.
        </p>
      }
      sections={sections}
    />
  );
}
