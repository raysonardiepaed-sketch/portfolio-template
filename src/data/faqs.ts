export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What EMR system are you most experienced with?',
    a: 'AthenaOne/Athenahealth - I\u2019ve used it daily for scheduling, billing, patient records, and prescription workflows. I\u2019m also actively expanding into other EMR platforms.',
  },
  {
    q: 'Do you have experience with behavioral health scheduling?',
    a: 'Yes. I supported scheduling for behavioral health providers alongside a primary care practice, where I paid close attention to timing and discretion given the sensitivity of psych scheduling.',
  },
  {
    q: 'What phone/VOIP systems have you worked with?',
    a: 'Avaya, AWS, Genesys, Five9, and TCN - across different roles handling high-volume inbound patient and member calls.',
  },
  {
    q: 'What\u2019s your background in revenue cycle management?',
    a: 'I\u2019ve handled patient statements, no-show fee processing, insurance verification, and claims - including reviewing EOBs/ERAs, tracking denials, and resubmitting claims.',
  },
  {
    q: 'Are you HIPAA trained?',
    a: 'Yes, I\u2019m HIPAA trained and take patient confidentiality seriously in every role.',
  },
]
