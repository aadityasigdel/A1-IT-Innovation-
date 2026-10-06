import LegalPage, { ContactBlock, List, Note } from "../LegalPage";
import logoImage from "../../../assets/a1-scanner-logo-darkmode.jpeg";

const PRODUCT = "A1 Scanner";

const sections = [
  {
    id: "overview",
    title: "Our Privacy Promise",
    body: (
      <>
        <p>
          A1 Scanner is built to work <strong>entirely on your device</strong>. Every tool in the app — document scanning,
          PDF merging, image conversion (e.g. JPG to PNG), compression and any tool we add in the future — processes your files
          locally on your phone.
        </p>
        <Note>
          <strong>Your documents never leave your phone.</strong> We do not upload, store, view or share your files, scans or
          images on any server. We do not require an account and we do not sell any data.
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
          <li>Documents, PDFs, photos or images you scan, open, convert or create</li>
          <li>Text or content inside your files</li>
          <li>Your name, email address, phone number or contacts</li>
          <li>Your precise or approximate location</li>
        </List>
        <p>
          Because the app has no sign-up or login, we have no user accounts and no personal profile about you.
        </p>
      </>
    ),
  },
  {
    id: "permissions",
    title: "Device Permissions",
    body: (
      <>
        <p>A1 Scanner asks only for the permissions it needs, and only when you use the related feature:</p>
        <List>
          <li><strong>Camera</strong> — to scan documents and capture images. Camera frames are processed on-device and are not recorded or sent anywhere.</li>
          <li><strong>Photos / Media / Files</strong> — to let you pick files to convert, merge or compress, and to save the results to your device.</li>
        </List>
        <p>
          You can deny or revoke any permission at any time from your phone&apos;s Settings. Some features will not work without the
          related permission, but the rest of the app will continue to work.
        </p>
      </>
    ),
  },
  {
    id: "how-files-handled",
    title: "How Your Files Are Handled",
    body: (
      <List>
        <li>All processing happens locally using your device&apos;s own processor and storage.</li>
        <li>Temporary files created during processing are kept in the app&apos;s private storage and cleared by the app or by the system.</li>
        <li>Output files are saved only where you choose to save them.</li>
        <li>Files you share using your phone&apos;s share menu (e.g. to WhatsApp, Gmail or Drive) are sent by you to that app and are governed by that app&apos;s own privacy policy.</li>
      </List>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    body: (
      <>
        <p>
          A1 Scanner is distributed through Google Play. Google may collect information such as app installs and device
          crash reports as part of the Play Store, under <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">Google&apos;s Privacy Policy</a>.
        </p>
        <p>
          If we add any third-party service in the future (for example advertising, analytics or crash reporting), we will update this
          policy and the app&apos;s Google Play Data Safety section <strong>before</strong> that version is released, and such services will
          never receive the content of your documents.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    body: (
      <p>
        Since your files are not transmitted to us, the security of your documents depends on your device. We recommend keeping a screen
        lock enabled and your operating system up to date. The app itself does not open any network connection to transfer your files.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data Retention & Deletion",
    body: (
      <>
        <p>
          We do not hold any of your data on our servers, so there is nothing for us to retain or delete. You remain in full control:
        </p>
        <List>
          <li>Delete any scanned or converted file directly from the app or your file manager.</li>
          <li>Clearing the app&apos;s storage or uninstalling the app removes all files kept in its private storage.</li>
          <li>Files you saved to shared folders (e.g. Downloads or Documents) stay there until you delete them.</li>
        </List>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: (
      <p>
        A1 Scanner is a general-purpose utility and is not directed at children under 13. We do not knowingly collect personal information
        from anyone, including children. If you believe a child has provided us with personal information, please contact us and we will
        help resolve it.
      </p>
    ),
  },
  {
    id: "future-features",
    title: "New Tools & Features",
    body: (
      <p>
        We plan to add more tools to A1 Scanner over time. Our principle stays the same: tools will process your files on your device.
        If any future feature ever needs an internet connection or handles data differently, we will clearly tell you inside the app,
        ask for your consent where required, and update this policy before releasing it.
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
        <p>If you have any questions about this Privacy Policy or about how A1 Scanner handles your data, please contact us:</p>
        <ContactBlock product={PRODUCT} />
      </>
    ),
  },
];

export default function A1ScannerPrivacyPolicy() {
  return (
    <LegalPage
      product={PRODUCT}
      logo={logoImage}
      title="Privacy Policy"
      lastUpdated="October 2026"
      canonical="https://www.a1itinnovation.com.np/products/a1-scanner/privacy-policy"
      description="Privacy Policy for A1 Scanner by A1 IT Innovation. All tools — document scanner, PDF merge, JPG to PNG, compression — run offline on your phone. Your files never leave your device."
      keywords="A1 Scanner privacy policy, offline document scanner, PDF merge app privacy, A1 IT Innovation app"
      intro={
        <p>
          This Privacy Policy explains how <strong>A1 Scanner</strong> (&quot;the app&quot;), developed by A. One IT Innovation Pvt. Ltd.
          (&quot;A1 IT Innovation&quot;, &quot;we&quot;, &quot;us&quot;), handles your information. By using the app, you agree to this policy.
          Please also read our <a href="/products/a1-scanner/terms-and-conditions" className="text-indigo-600 hover:underline font-medium">Terms &amp; Conditions</a>.
        </p>
      }
      sections={sections}
    />
  );
}
