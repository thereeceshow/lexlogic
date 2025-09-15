export default function Tos() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none text-card-foreground space-y-6">
              <p className="text-lg text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Acceptance of Terms</h2>
                <p>
                  By accessing and using LexLogic&apos;s website and services, you accept and agree to be bound by the terms
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Services Description</h2>
                <p>
                  LexLogic provides custom digital solutions including web development, software development, digital
                  consulting, and related technology services. We reserve the right to modify or discontinue any service
                  at any time without notice.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Client Responsibilities</h2>
                <p>As a client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information necessary for project completion</li>
                  <li>Respond to requests for feedback and approvals in a timely manner</li>
                  <li>Make payments according to agreed terms and schedules</li>
                  <li>Respect intellectual property rights and confidentiality agreements</li>
                  <li>Use our services in compliance with applicable laws and regulations</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Payment Terms</h2>
                <p>
                  Payment terms will be specified in individual project agreements. Generally, we require a deposit
                  before beginning work, with remaining payments due according to project milestones or upon completion.
                  Late payments may incur additional fees.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
                <p>
                  Upon full payment, clients receive ownership of custom-developed materials specifically created for
                  their project. LexLogic retains rights to general methodologies, techniques, and pre-existing
                  intellectual property. We reserve the right to showcase completed work in our portfolio unless
                  otherwise agreed.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
                <p>
                  LexLogic&apos;s liability for any claim related to our services shall not exceed the total amount paid by
                  the client for the specific service giving rise to the claim. We are not liable for indirect,
                  incidental, or consequential damages.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Termination</h2>
                <p>
                  Either party may terminate a project agreement with written notice. Upon termination, the client is
                  responsible for payment of all work completed up to the termination date. LexLogic will provide all
                  completed deliverables upon receipt of payment.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of Kentucky, United States.
                  Any disputes arising from these terms or our services shall be resolved in the courts of Kentucky.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Contact Information</h2>
                <p>For questions regarding these Terms of Service, please contact us at:</p>
                <div className="bg-card p-4 rounded-lg border">
                  <p>
                    <strong>Email:</strong> info@lexlogic.dev
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (615) 268-3560
                  </p>
                  <p>
                    <strong>Address:</strong> Lexington, KY
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
  )
}