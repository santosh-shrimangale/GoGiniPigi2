import { AccordionComponent } from "../../../components";

export const faqData = [
  {
    question: "  Is payment secure?",
    content: `    <p>
    We enable you to book up to 3 months in advance so you don’t have to
    pay in full and, can jump on that Appointment that you love the look
    of. You pay a small 15% deposit to secure your Appointment when
    booking - this is non-refundable once our fabulous Provider has
    confirmed. For Appointments less than 36 hours away, we then would
    require full payment which since it’s short notice – this would
    become non-refundable. If you would prefer to pay in full at the
    time of booking, you are welcome to do that too! This is why it’s
    great to be organised, have something to look forward to and bag
    that bargain, although have no doubt, there is last minute amazing
    offers to be had too!
</p>`,
  },
  {
    question: " At what point will money leave my account?",
    content: ` <p>
    We enable you to book up to 3 months in advance so you don’t have to
    pay in full and, can jump on that Appointment that you love the look
    of. You pay a small 15% deposit to secure your Appointment when
    booking - this is non-refundable once our fabulous Provider has
    confirmed. For Appointments less than 36 hours away, we then would
    require full payment which since it’s short notice – this would
    become non-refundable. If you would prefer to pay in full at the
    time of booking, you are welcome to do that too! This is why it’s
    great to be organised, have something to look forward to and bag
    that bargain, although have no doubt, there is last minute amazing
    offers to be had too!
</p>`,
  },
  {
    question:
      " I have seen a Treatment or Service I would love to book with ~ do I have to pay in full?",
    content: `    <p>
    We enable you to book up to 3 months in advance so you don’t have to
    pay in full and, can jump on that Appointment that you love the look
    of. You pay a small 15% deposit to secure your Appointment when
    booking - this is non-refundable once our fabulous Provider has
    confirmed. For Appointments less than 36 hours away, we then would
    require full payment which since it’s short notice – this would
    become non-refundable. If you would prefer to pay in full at the
    time of booking, you are welcome to do that too! This is why it’s
    great to be organised, have something to look forward to and bag
    that bargain, although have no doubt, there is last minute amazing
    offers to be had too!
</p>`,
  },
  {
    question: "  Why do I need to pay a deposit?",
    content: `  <p>
    We enable you to book up to 3 months in advance so you don’t have to
    pay in full and, can jump on that Appointment that you love the look
    of. You pay a small 15% deposit to secure your Appointment when
    booking - this is non-refundable once our fabulous Provider has
    confirmed. For Appointments less than 36 hours away, we then would
    require full payment which since it’s short notice – this would
    become non-refundable. If you would prefer to pay in full at the
    time of booking, you are welcome to do that too! This is why it’s
    great to be organised, have something to look forward to and bag
    that bargain, although have no doubt, there is last minute amazing
    offers to be had too!
</p>`,
  },
  {
    question: " I have been charged an incorrect amount, what shall I do?",
    content: `  <p>
    We enable you to book up to 3 months in advance so you don’t have to
    pay in full and, can jump on that Appointment that you love the look
    of. You pay a small 15% deposit to secure your Appointment when
    booking - this is non-refundable once our fabulous Provider has
    confirmed. For Appointments less than 36 hours away, we then would
    require full payment which since it’s short notice – this would
    become non-refundable. If you would prefer to pay in full at the
    time of booking, you are welcome to do that too! This is why it’s
    great to be organised, have something to look forward to and bag
    that bargain, although have no doubt, there is last minute amazing
    offers to be had too!
</p>`,
  },
  {
    question:
      "I need to cancel my appointment, what should I do? If it’s already  been confirmed…",
    content: `<p>
    We enable you to book up to 3 months in advance so you don’t have to
    pay in full and, can jump on that Appointment that you love the look
    of. You pay a small 15% deposit to secure your Appointment when
    booking - this is non-refundable once our fabulous Provider has
    confirmed. For Appointments less than 36 hours away, we then would
    require full payment which since it’s short notice – this would
    become non-refundable. If you would prefer to pay in full at the
    time of booking, you are welcome to do that too! This is why it’s
    great to be organised, have something to look forward to and bag
    that bargain, although have no doubt, there is last minute amazing
    offers to be had too!
</p>`,
  },
  {
    question:
      "   If the appointment hasn’t yet been confirmed by the Provider…",
    content: `      <p>
    We enable you to book up to 3 months in advance so you don’t have to
    pay in full and, can jump on that Appointment that you love the look
    of. You pay a small 15% deposit to secure your Appointment when
    booking - this is non-refundable once our fabulous Provider has
    confirmed. For Appointments less than 36 hours away, we then would
    require full payment which since it’s short notice – this would
    become non-refundable. If you would prefer to pay in full at the
    time of booking, you are welcome to do that too! This is why it’s
    great to be organised, have something to look forward to and bag
    that bargain, although have no doubt, there is last minute amazing
    offers to be had too!
</p>`,
  },
];

export const faqTabsData = [
  {
    category: "",
    data: [
      {
        name: "Before Appointment",
        key: "beforeAppointment",
        content: <AccordionComponent AccordionContent={faqData} />,
      },
      {
        name: "Booking & Payment",
        key: "bookingPayment",
        content: <AccordionComponent AccordionContent={faqData} />,
      },
      {
        name: "My Appointment",
        key: "myAppointment",
        content: <AccordionComponent AccordionContent={faqData} />,
      },
      {
        name: "Troubleshooting",
        key: "troubleshooting",
        content: <AccordionComponent AccordionContent={faqData} />,
      },
    ],
  },
];
