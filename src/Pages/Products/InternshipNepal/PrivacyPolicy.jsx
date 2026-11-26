import LegalPage, { ContactBlock, List, Note } from "../LegalPage";
import logoImage from "../../../assets/internship-nepal-logo.png";

const PRODUCT = "Internship Nepal";
const link = "text-indigo-600 hover:underline font-medium";

const sections = [
  {
    id: "overview",
    title: "Summary",
    body: (
      <>
        <p>
          Internship Nepal is the app of A1 IT Innovation&apos;s remote IT internship program. To run the internship we need some
          personal information — for example your CV to review your application and your ID to sign the internship agreement.
        </p>
        <Note>
          We use your information <strong>only to run your internship application and internship</strong>. We do not sell it, we do not
          show ads and we do not use it for advertising. You can ask us to delete your data at any time.
        </Note>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <p><strong>When you apply</strong> (in the app or on our website):</p>
        <List>
          <li>Full name, email address and phone number</li>
          <li>Whether you are a college student and your college name (optional)</li>
          <li>The track you choose (e.g. DevOps, Flutter) and what you write about your experience</li>
          <li>Your CV (PDF)</li>
        </List>
        <p><strong>When you are selected</strong> (onboarding):</p>
        <List>
          <li>Your signed internship agreement</li>
          <li>A photo or scan of your citizenship / ID card (front, and optionally back)</li>
          <li>Internship start and end dates, set by us</li>
        </List>
        <p><strong>During the internship:</strong></p>
        <List>
          <li>Daily check-ins: what you learned and any blockers you write (this is your attendance)</li>
          <li>Task work you submit: text, links and files</li>
          <li>Questions and messages between you and your mentor on each task</li>
          <li>Your certificate number and certificate details when it is issued</li>
        </List>
        <p><strong>To log in and send notifications:</strong></p>
        <List>
          <li>Your email address and a one-time login code (we store only a secure hash of the code and of your login session)</li>
          <li>A push notification token for your phone, provided by Google Firebase Cloud Messaging</li>
          <li>The notifications we send you (new task, review, mentor reply, due reminders, messages)</li>
        </List>
        <p><strong>Skill course enquiries:</strong> when you tap &quot;I want to join&quot; on a course, the name, email, phone number and message
          you enter are sent to our team by email so we can contact you.</p>
        <p>We do <strong>not</strong> collect your location, contacts, call logs, SMS, photos you did not choose to upload, or any
          advertising ID. The app contains no ads and no third-party analytics.</p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    body: (
      <List>
        <li>To review your application and contact you about it (email, phone call or WhatsApp)</li>
        <li>To prepare and keep the internship agreement and verify your identity</li>
        <li>To run the internship: tasks, reviews, check-ins, attendance and progress</li>
        <li>To issue your certificate and recommendation letter, and to let employers verify the certificate</li>
        <li>To send you emails and app notifications about your application and internship</li>
        <li>To reply to your skill course enquiry</li>
        <li>To keep the service secure (e.g. limiting login attempts) and to fix problems</li>
      </List>
    ),
  },
  {
    id: "permissions",
    title: "App Permissions",
    body: (
      <List>
        <li><strong>Internet</strong> — to talk to our servers.</li>
        <li><strong>Notifications</strong> (Android 13 and newer) — asked after you log in, only to tell you about your internship. You can turn it off in your phone&apos;s settings; everything is still listed inside the app.</li>
        <li><strong>Files</strong> — the app uses the system file picker only when you choose a CV, document or task file to upload. It does not read any other files.</li>
      </List>
    ),
  },
  {
    id: "sharing",
    title: "Sharing & Third-Party Services",
    body: (
      <>
        <p>We do <strong>not sell or rent</strong> your personal information. We share it only in these cases:</p>
        <List>
          <li><strong>Service providers that run the service for us:</strong> our own servers and private file storage (database and files),
            Zoho Mail (to send emails) and Google Firebase Cloud Messaging (to deliver push notifications). They process data only to provide
            their service. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={link}>Google&apos;s Privacy Policy</a>.</li>
          <li><strong>Certificate verification:</strong> anyone who has your certificate number can check that it is genuine and see your name,
            track and internship dates. Nothing else is shown.</li>
          <li><strong>Legal reasons:</strong> when required by the law of Nepal or a valid request from an authority.</li>
        </List>
        <p>Google Play may also collect installation and crash information as part of the Play Store.</p>
      </>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    body: (
      <List>
        <li>All communication between the app and our servers uses HTTPS (encrypted).</li>
        <li>CVs, agreements and ID documents are kept in private storage and are only available to our internship team.</li>
        <li>There are no passwords: you log in with a one-time code sent to your email, and only hashes of codes and sessions are stored.</li>
        <li>Login sessions expire after 30 days, and repeated wrong codes are blocked.</li>
      </List>
    ),
  },
  {
    id: "retention",
    title: "How Long We Keep Data",
    body: (
      <List>
        <li>Application and internship records are kept while your application or internship is active, and afterwards so that we can
          confirm your internship and keep your certificate verifiable.</li>
        <li>Login codes expire after 10 minutes; login sessions after 30 days.</li>
        <li>The in-app notification list keeps your most recent 100 notifications.</li>
        <li>Course enquiry emails are kept in our mailbox only to answer you.</li>
        <li>Everything is deleted earlier if you ask us (see below).</li>
      </List>
    ),
  },
  {
    id: "delete-your-data",
    title: "Delete Your Data",
    body: (
      <>
        <p>You can ask us to delete your application and all related data at any time:</p>
        <List>
          <li>In the app: menu (☰) → <strong>Delete my data</strong> (opens an email to us with your address filled in), or</li>
          <li>Email <a href="mailto:info@a1itinnovation.com.np?subject=Delete%20my%20Internship%20Nepal%20data" className={link}>info@a1itinnovation.com.np</a> with
            the subject &quot;Delete my Internship Nepal data&quot; from the email address you applied with.</li>
        </List>
        <p>
          We delete your application, CV, agreement and ID documents, task work, check-ins, notifications and device tokens, and confirm by
          email. Once deleted, your certificate can no longer be verified and we cannot restore the data.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Choices",
    body: (
      <List>
        <li>See your application, documents, tasks and attendance at any time in the app.</li>
        <li>Ask us to correct wrong information by email.</li>
        <li>Turn notifications off in your phone&apos;s settings.</li>
        <li>Log out from the app menu; logging out also stops push notifications on that phone.</li>
      </List>
    ),
  },
  {
    id: "children",
    title: "Age",
    body: (
      <p>
        The internship and the app are meant for students and graduates aged 18 and above. We do not knowingly collect information from
        children under 13. If you believe a child has given us personal information, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy when the app or the internship changes. We will change the &quot;Last Updated&quot; date above and,
        for important changes, tell you in the app or by email.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>Questions about your data or this policy? Contact us:</p>
        <ContactBlock product={PRODUCT} />
      </>
    ),
  },
];

export default function InternshipNepalPrivacyPolicy() {
  return (
    <LegalPage
      product={PRODUCT}
      logo={logoImage}
      title="Privacy Policy"
      lastUpdated="November 2026"
      canonical="https://www.a1itinnovation.com.np/products/internship-nepal/privacy-policy"
      description="Privacy Policy for Internship Nepal by A1 IT Innovation — what we collect for your remote IT internship (application, CV, documents, tasks, check-ins), how we use it and how to delete it."
      keywords="Internship Nepal privacy policy, A1 IT Innovation internship app, remote IT internship Nepal, delete internship data"
      intro={
        <p>
          This Privacy Policy explains how the <strong>Internship Nepal</strong> app and website (&quot;the service&quot;), run by A. One IT
          Innovation Pvt. Ltd. (&quot;A1 IT Innovation&quot;, &quot;we&quot;, &quot;us&quot;), collect and use your information. Please also read our
          <a href="/products/internship-nepal/terms-and-conditions" className={`${link} mx-1`}>Terms &amp; Conditions</a>
          and the <a href="/services/internship#policies" className={link}>internship policies</a>.
        </p>
      }
      sections={sections}
    />
  );
}
