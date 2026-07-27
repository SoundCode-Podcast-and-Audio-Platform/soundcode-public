type LegalDocumentProps = {
  title: string;
};

export function LegalDocument({ title }: LegalDocumentProps) {
  return (
    <article className="legal-page">
      <h1>{title}</h1>
      <p>
        SoundCode is a Christian streaming platform dedicated to providing music, podcasts, sermons,
        interviews, worship content, educational recordings, devotionals, and video programming. This
        document establishes the standards, expectations, and policies that support a safe, lawful,
        and faith-centered environment for listeners, viewers, creators, ministries, churches, and
        organizations. By using SoundCode, users acknowledge that the platform is intended to
        encourage inspirational and educational engagement while respecting intellectual property
        rights, applicable laws, and community values.
      </p>
      <p>
        Users are expected to act honestly, respectfully, and responsibly while interacting with the
        platform. SoundCode may update policies from time to time to address legal requirements,
        technological developments, security concerns, or improvements to platform operations.
        Continued use of the platform after updates constitutes acceptance of revised policies.
      </p>

      <section>
        <h2>Platform Standards</h2>
        <p>
          All users must provide accurate information, maintain account security, and comply with
          applicable laws. Content that infringes intellectual property rights, contains malicious
          software, promotes unlawful activity, or intentionally misleads users may be removed
          without notice. SoundCode reserves the right to investigate reported violations and
          cooperate with lawful requests from regulatory authorities where required.
        </p>
        <p>
          The platform strives to create a welcoming experience for listeners and creators. While
          SoundCode encourages discussion and creativity, users should avoid behavior that disrupts
          platform services or negatively affects the experience of others. Repeated violations may
          result in restrictions, temporary suspensions, or permanent account termination.
        </p>
      </section>

      <section>
        <h2>Content and Rights</h2>
        <p>
          Creators retain ownership of content they upload unless otherwise agreed through separate
          contracts. By uploading content, creators grant SoundCode permission to host, process,
          display, stream, distribute, and promote that content through platform services. Creators
          are responsible for ensuring they possess all necessary rights and permissions relating to
          music, artwork, recordings, images, trademarks, and other materials included in their
          submissions.
        </p>
        <p>
          SoundCode respects copyright and intellectual property laws. Users who believe their
          rights have been violated may submit detailed notices that identify the disputed material
          and supporting evidence. The platform may remove or restrict access to disputed content
          while investigations are conducted.
        </p>
      </section>

      <section>
        <h2>Privacy, Safety, and Community</h2>
        <p>
          SoundCode values user privacy and implements reasonable safeguards to protect information.
          Information collected may include account details, listening activity, subscription data,
          device information, support communications, and analytics. Such information helps improve
          services, personalize experiences, process transactions, and protect platform security.
        </p>
        <p>
          Community participation should demonstrate respect, integrity, and professionalism.
          Harassment, impersonation, fraud, abuse, intimidation, spam, and deceptive practices are
          prohibited. Content should be suitable for the platform audience and aligned with platform
          standards.
        </p>
      </section>

      <section>
        <h2>Additional Guidance</h2>
        <p>
          Users are encouraged to create meaningful profiles, provide accurate metadata, and use
          high-quality artwork, titles, descriptions, and recordings. Ministries and organizations
          should ensure that representatives publishing on behalf of an organization have the proper
          authority to do so. Podcast creators should obtain guest permissions where appropriate, and
          music creators should ensure that samples, cover versions, and collaborative works are
          properly licensed.
        </p>
        <p>
          Where subscriptions, memberships, or monetization features are offered, creators and users
          are responsible for complying with applicable tax obligations, payment requirements, and
          local regulations. SoundCode may revise revenue-sharing arrangements, platform features,
          and eligibility criteria as services evolve.
        </p>
      </section>

      <section>
        <h2>Contact and Enforcement</h2>
        <p>
          Violations of platform requirements may result in warnings, content removal,
          demonetization, account restrictions, or account termination depending upon severity and
          repetition. SoundCode reserves all rights necessary to maintain platform integrity and
          user safety. Questions regarding this document may be directed to the appropriate SoundCode
          support channel. This document forms part of the overall governance framework of the
          SoundCode platform and should be reviewed periodically by all users and creators.
        </p>
        <p>
          By continuing to access or use SoundCode, individuals acknowledge their responsibility to
          read, understand, and comply with platform policies. The success of the platform depends
          upon cooperation among listeners, creators, churches, ministries, educators, and community
          members who share a commitment to positive and respectful engagement. SoundCode seeks to
          provide a trusted environment where inspiring content can be discovered, shared, and
          enjoyed by audiences around the world.
        </p>
      </section>
    </article>
  );
}
