import LegalPage, { ContactBlock, List, Note } from "../LegalPage";
import logoImage from "../../../assets/internship-nepal-logo.png";

const PRODUCT = "Internship Nepal";
const link = "text-indigo-600 hover:underline font-medium";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: (
      <p>
        By installing or using Internship Nepal, or by applying for an internship, you agree to these Terms &amp; Conditions and our
        <a href="/products/internship-nepal/privacy-policy" className={`${link} mx-1`}>Privacy Policy</a>.
        If you do not agree, please do not use the app.
      </p>
    ),
  },
  {
    id: "about",
    title: "About the Service",
    body: (
      <>
        <p>Internship Nepal is the app of A1 IT Innovation&apos;s remote IT internship program. With it you can:</p>
        <List>
          <li>Apply for an internship track with your CV</li>
          <li>Follow your application, download and upload the internship agreement and ID documents</li>
          <li>Do daily check-ins, work on tasks, talk with your mentor and see your attendance</li>
          <li>Get notifications, download your certificate and verify certificates</li>
          <li>Read about our skill courses and send an enquiry</li>
        </List>
        <p>Features may be added, changed or removed over time.</p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility & Applications",
    body: (
      <List>
        <li>You must be 18 or older and give true, complete information, including a CV that is your own.</li>
        <li>You should be familiar with the technology of the track you apply for. College students and self-learners are both welcome.</li>
        <li>Applying does not guarantee selection. We review every application and may accept or decline it at our discretion.</li>
      </List>
    ),
  },
  {
    id: "internship-terms",
    title: "Internship Terms",
    body: (
      <>
        <Note>
          The internship is <strong>free</strong> — you pay nothing — and <strong>unpaid</strong> — there is no salary or stipend.
        </Note>
        <List>
          <li>Fully remote. Core hours 10:00 AM – 5:00 PM (flexible by agreement). Saturday is off.</li>
          <li>Minimum duration is 2 months.</li>
          <li>You keep a daily learning log (the daily check-in) and join progress check-ins with your mentor.</li>
          <li>We provide mentorship and the servers / hosting needed for your internship projects.</li>
          <li>
            The full rules are on our <a href="/services/internship#policies" className={link}>internship policies</a> page. If you are selected,
            the <strong>internship agreement</strong> you sign is the main contract between you and us; if it differs from these terms, the agreement applies.
          </li>
        </List>
      </>
    ),
  },
  {
    id: "certificate",
    title: "Certificate & Job Opportunity",
    body: (
      <List>
        <li>A certificate of completion and a recommendation letter are given after you successfully complete the internship (at least 2 months, with regular check-ins and task work).</li>
        <li>Each certificate has a number that anyone can verify in the app or on our website.</li>
        <li>If your work goes into production, we may offer you a placement. A job is not guaranteed by joining the internship.</li>
      </List>
    ),
  },
  {
    id: "conduct",
    title: "Your Responsibilities",
    body: (
      <>
        <p>While using the service you agree to:</p>
        <List>
          <li>Submit your own work and say clearly when you used other sources</li>
          <li>Upload only real documents that belong to you</li>
          <li>Keep confidential any company code, data, servers or credentials you get access to</li>
          <li>Communicate respectfully with mentors and other interns</li>
          <li>Not misuse the app — for example by trying to access other people&apos;s data or attacking our servers</li>
          <li>Keep access to your email account safe, because login codes are sent there</li>
        </List>
      </>
    ),
  },
  {
    id: "work-ownership",
    title: "Work & Intellectual Property",
    body: (
      <List>
        <li>Ownership and use of the work you do on company projects is set out in your internship agreement.</li>
        <li>The app, its design, the A1 IT Innovation name and logos belong to A. One IT Innovation Pvt. Ltd. Product names and logos of
          third-party tools shown in the courses (e.g. Docker, Kubernetes) belong to their owners and are used only to describe the course content.</li>
      </List>
    ),
  },
  {
    id: "termination",
    title: "Ending an Internship",
    body: (
      <List>
        <li>You may stop the internship at any time by telling us. A certificate is given only for a completed internship.</li>
        <li>We may end an internship or block access to the service if these terms, the internship policies or the agreement are broken —
          for example for false documents, copied work or misuse of company resources.</li>
      </List>
    ),
  },
  {
    id: "courses",
    title: "Skill Courses",
    body: (
      <p>
        Course pages describe what a course covers. Sending an enquiry only asks our team to contact you; it does not enrol you and creates no
        obligation. Batch dates, format and any fees are told to you before you join a course.
      </p>
    ),
  },
  {
    id: "notifications",
    title: "Notifications & Communication",
    body: (
      <p>
        By using the service you agree that we may contact you by email, phone, WhatsApp and app notifications about your application,
        internship and enquiries. You can turn off app notifications in your phone&apos;s settings.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Availability & Liability",
    body: (
      <List>
        <li>We work to keep the service running, but it is provided &quot;as is&quot; and may sometimes be unavailable (for example during maintenance or without internet).</li>
        <li>Keep your own copies of important files you upload.</li>
        <li>To the extent allowed by law, A1 IT Innovation is not liable for indirect losses from using or not being able to use the app.</li>
      </List>
    ),
  },
  {
    id: "law",
    title: "Governing Law",
    body: <p>These terms are governed by the laws of Nepal. Any dispute will first be resolved by talking with us; otherwise the courts of Nepal have jurisdiction.</p>,
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these terms. We will change the &quot;Last Updated&quot; date above and tell you about important changes in the app or by
        email. Continuing to use the service after a change means you accept it.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>Questions about these terms? Contact us:</p>
        <ContactBlock product={PRODUCT} />
      </>
    ),
  },
];

export default function InternshipNepalTerms() {
  return (
    <LegalPage
      product={PRODUCT}
      logo={logoImage}
      title="Terms & Conditions"
      lastUpdated="November 2026"
      canonical="https://www.a1itinnovation.com.np/products/internship-nepal/terms-and-conditions"
      description="Terms and Conditions for Internship Nepal by A1 IT Innovation — the free, remote IT internship app for students in Nepal: applications, internship rules, certificate and courses."
      keywords="Internship Nepal terms and conditions, A1 IT Innovation internship, remote IT internship Nepal rules"
      intro={
        <p>
          These Terms &amp; Conditions govern your use of the <strong>Internship Nepal</strong> app and the related internship services of
          A. One IT Innovation Pvt. Ltd. (&quot;A1 IT Innovation&quot;, &quot;we&quot;, &quot;us&quot;). Please read them before you apply.
        </p>
      }
      sections={sections}
    />
  );
}
