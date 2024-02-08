import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "./ui/sectionTitle";

export default function Faqs() {
  return (
    <section className="mb-32">
      <SectionTitle title="Frequently Asked Questions" />
      <Accordion
        type="single"
        collapsible
        className="sm:max-w-[860px] mx-auto mt-12"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does the booking process work?
          </AccordionTrigger>
          <AccordionContent>
            Booking equipment on farmGearX is easy! Simply browse through
            the available listings, select the equipment you need, choose your
            desired rental dates, and submit a booking request. The equipment
            owner will review your request and confirm the booking. Once
            confirmed, make the payment, and you&apos;re all set!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What if the rented equipment malfunctions?
          </AccordionTrigger>
          <AccordionContent>
            In the rare event of equipment breakdown, please contact the
            equipment owner immediately. Many owners provide guidelines for
            troubleshooting or have alternative arrangements in place. If
            needed, our customer support team is available to assist and
            facilitate communication between both parties to ensure a quick
            resolution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How can I list my equipment on farmGearX?
          </AccordionTrigger>
          <AccordionContent>
            Listing your equipment on our platform is simple. Sign up as an
            equipment owner, create your profile, and navigate to the &quot;List
            Equipment&quot; section. Fill in the details of your equipment,
            including type, size, condition, and rental rates. Once submitted,
            your listing will be visible to farmers in need of equipment.
            It&apos;s a great way to earn extra income from your farming tools!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            What if I need to cancel a booking?
          </AccordionTrigger>
          <AccordionContent>
            We understand that circumstances may change. If you need to cancel a
            booking, please contact the equipment owner as soon as possible. The
            cancellation policy may vary, but open communication is key. Be
            mindful of any cancellation fees that may apply based on the terms
            set by the equipment owner.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How can I contact the equipment owner?
          </AccordionTrigger>
          <AccordionContent>
            Communication with the equipment owner is facilitated through our
            messaging system. Once a booking is confirmed, you can use the
            platform&apos;s messaging feature to discuss details, coordinate
            pick-up/drop-off, and address any questions you may have. This
            ensures a transparent and secure communication channel between
            farmers and equipment owners.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Can I extend my rental period?</AccordionTrigger>
          <AccordionContent>
            Yes, you can extend your rental period if the equipment owner
            agrees. To do this, contact the owner through the messaging system
            and discuss the extension details. Keep in mind that availability
            and pricing for the extended period will be determined by the owner.
            Plan ahead to ensure a smooth extension process.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
