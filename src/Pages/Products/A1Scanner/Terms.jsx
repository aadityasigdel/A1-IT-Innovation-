import LegalPage, { ContactBlock, List } from "../LegalPage";
import logoImage from "../../../assets/a1-scanner-logo-darkmode.jpeg";

const PRODUCT = "A1 Scanner";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: (
      <p>
        By downloading, installing or using A1 Scanner, you agree to these Terms &amp; Conditions and our
        <a href="/products/a1-scanner/privacy-policy" className="text-indigo-600 hover:underline font-medium mx-1">Privacy Policy</a>.
        If you do not agree, please do not use the app and uninstall it from your device.
      </p>
    ),
  },
  {
    id: "about-app",
    title: "About the App",
    body: (
      <>
        <p>A1 Scanner is a collection of document and image tools that run on your device, including:</p>
        <List>
          <li>Document / image scanner</li>
          <li>PDF merge</li>
          <li>Image conversion (e.g. JPG to PNG)</li>
          <li>File and image compression</li>
          <li>Other tools we add in future updates</li>
        </List>
        <p>
          Features may be added, changed or removed over time. These terms apply to all current and future tools in the app.
        </p>
      </>
    ),
  },
  {
    id: "license",
    title: "License to Use",
    body: (
      <>
        <p>
          We grant you a personal, non-exclusive, non-transferable, revocable license to install and use A1 Scanner on devices you own or
          control, in line with these terms and the Google Play Terms of Service.
        </p>
        <p>You agree not to:</p>
        <List>
          <li>Copy, modify, reverse-engineer, decompile or redistribute the app, except where the law allows it</li>
          <li>Remove copyright or proprietary notices from the app</li>
          <li>Resell, rent or publish modified versions of the app</li>
        </List>
      </>
    ),
  },
  {
    id: "your-content",
    title: "Your Files & Content",
    body: (
      <>
        <p>
          You keep full ownership of every document, image and file you scan, convert or create with A1 Scanner. Since all processing happens
          on your device, we never receive or access your content.
        </p>
        <p>
          You are responsible for the files you process and must have the right to use them. Do not use the app to copy, forge or
          distribute documents illegally — for example official IDs, certificates or copyrighted material you are not authorised to use.
        </p>
      </>
    ),
  },
  {
    id: "backups",
    title: "Backups & Data Loss",
    body: (
      <p>
        Files are stored only on your device. We cannot recover files that are deleted, lost when the app is uninstalled, or lost when your
        device is reset, damaged or stolen. Please keep your own backups of important documents.
      </p>
    ),
  },
  {
    id: "accuracy",
    title: "Accuracy of Output",
    body: (
      <p>
        We work hard to make every tool reliable, but results can vary depending on your device, camera, lighting and the original file.
        Compression can reduce image quality, and conversions may not preserve every detail. Please check the output before using it for
        important, legal or official purposes.
      </p>
    ),
  },
  {
    id: "pricing",
    title: "Free & Paid Features",
    body: (
      <p>
        A1 Scanner is currently free to use. If we introduce paid features or subscriptions in the future, prices will be shown clearly in
        the app before you buy, and all payments will be processed by Google Play under Google&apos;s billing and refund policies.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Updates",
    body: (
      <p>
        We may release updates to fix bugs, improve security or add new tools. Some features may require the latest version of the app.
        Keeping the app updated is recommended for the best and safest experience.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <p>
        The A1 Scanner name, logo, design and source code are the property of A. One IT Innovation Pvt. Ltd. and are protected by
        applicable intellectual property laws. Open-source components used in the app remain under their respective licenses.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    body: (
      <p>
        The app is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, whether express or implied, including
        fitness for a particular purpose. We do not guarantee that the app will be error-free or uninterrupted, or that it will work on every
        device.
      </p>
    ),
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    body: (
      <p>
        To the maximum extent permitted by law, A1 IT Innovation is not liable for any indirect, incidental or consequential damages,
        including loss of data, files or business, arising from your use of or inability to use the app. Where liability cannot be excluded,
        it is limited to the amount you paid for the app, if any.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <p>
        You may stop using the app at any time by uninstalling it. We may suspend or end your license if you break these terms. Sections on
        your content, intellectual property, disclaimers and limitation of liability survive termination.
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

export default function A1ScannerTerms() {
  return (
    <LegalPage
      product={PRODUCT}
      logo={logoImage}
      title="Terms & Conditions"
      lastUpdated="October 2026"
      canonical="https://www.a1itinnovation.com.np/products/a1-scanner/terms-and-conditions"
      description="Terms and Conditions for A1 Scanner by A1 IT Innovation — an offline document scanner, PDF merge, image converter and compression app for Android."
      keywords="A1 Scanner terms and conditions, A1 Scanner app terms, offline PDF tools Nepal, A1 IT Innovation app"
      intro={
        <p>
          These Terms &amp; Conditions govern your use of the <strong>A1 Scanner</strong> mobile application (&quot;the app&quot;), developed
          and published by A. One IT Innovation Pvt. Ltd. (&quot;A1 IT Innovation&quot;, &quot;we&quot;, &quot;us&quot;). Please read them carefully
          before using the app.
        </p>
      }
      sections={sections}
    />
  );
}
