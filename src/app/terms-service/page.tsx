import NavBar from "@/components/NavBar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TermsAndPrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
        <NavBar></NavBar>
      <main className="container mx-auto px-4 py-8 space-y-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center text-[#004a82]">Terms of Service & Privacy Policy</h1>
        <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
          Please read these terms carefully before using our services. By using Top Pro Painting's services, you agree to these terms and our privacy policy.
        </p>

        <Tabs defaultValue="terms" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger id="terms" value="terms">Terms of Service</TabsTrigger>
            <TabsTrigger id="privacy" value="privacy">Privacy Policy</TabsTrigger>
          </TabsList>
          <TabsContent value="terms" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {termsOfService.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent value="privacy" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {privacyPolicy.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </main>
    </div>
  )
}

const termsOfService = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing or using Top Pro Painting's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not use our services."
  },
  {
    title: "2. Description of Service",
    content: "Top Pro Painting provides interior and exterior painting services for residential and commercial properties. Our services include, but are not limited to, color consultation, surface preparation, paint application, and clean-up."
  },
  {
    title: "3. User Responsibilities",
    content: "You are responsible for providing accurate information when scheduling our services, preparing the area to be painted as instructed, and ensuring our team has access to the work area during the agreed-upon time."
  },
  {
    title: "4. Payment and Pricing",
    content: "Prices for our services are as quoted. Payment is due upon completion of the job unless otherwise agreed upon in writing. We accept various forms of payment as specified in our payment policy."
  },
  {
    title: "5. Cancellation and Rescheduling",
    content: "If you need to cancel or reschedule, please provide at least 48 hours notice. Late cancellations may be subject to a fee as outlined in our cancellation policy."
  },
  {
    title: "6. Warranty and Limitations",
    content: "We offer a limited warranty on our workmanship. This warranty does not cover damage due to normal wear and tear, improper maintenance, or acts of nature. Please refer to our warranty document for full details."
  },
  {
    title: "7. Liability",
    content: "Top Pro Painting is not liable for any indirect, incidental, or consequential damages. Our liability is limited to the amount paid for the services provided."
  },
  {
    title: "8. Modifications to Terms",
    content: "We reserve the right to modify these terms at any time. Continued use of our services after any such changes shall constitute your consent to such changes."
  }
]

const privacyPolicy = [
  {
    title: "1. Information Collection",
    content: "We collect information you provide directly to us, such as your name, address, phone number, and email when you schedule our services or contact us for information."
  },
  {
    title: "2. Use of Information",
    content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you about our services, and to comply with legal obligations."
  },
  {
    title: "3. Information Sharing",
    content: "We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in our business operations."
  },
  {
    title: "4. Data Security",
    content: "We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure."
  },
  {
    title: "5. Cookies and Tracking Technologies",
    content: "We may use cookies and similar tracking technologies to collect information about your interactions with our website to improve user experience and analyze website traffic."
  },
  {
    title: "6. Your Rights",
    content: "You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights or have any questions about your data."
  },
  {
    title: "7. Changes to Privacy Policy",
    content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page."
  },
  {
    title: "8. Contact Us",
    content: "If you have any questions about this privacy policy, please contact us at [Your Contact Information]."
  }
]