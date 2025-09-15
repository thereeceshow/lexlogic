
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none text-card-foreground space-y-6">
              <p className="text-lg text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
                <p>
                  At LexLogic, we collect information you provide directly to us, such as when you contact us through
                  our website, request our services, or subscribe to our newsletter. This may include your name, email
                  address, phone number, company information, and project details.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices, updates, and marketing communications</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy. We may share your information with trusted service
                  providers who assist us in operating our website and conducting our business, provided they agree to
                  keep this information confidential.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                  or electronic storage is 100% secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Cookies and Tracking</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience. You
                  can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal information. You may also opt out of
                  receiving marketing communications from us at any time by following the unsubscribe instructions in
                  our emails or contacting us directly.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
      </main>  )
}
