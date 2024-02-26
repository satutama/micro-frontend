import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

const FAQS = [
  {
    question: 'What is Frontend Mentor, and how it will help me?',
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript, it's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: 'Is Frontend Mentor free?',
    answer:
      " The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.",
  },
  {
    question: 'Can I use Frontend Mentor projects in my portofolio?',
    answer:
      'Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!',
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      'The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it\'s a great place to ask questions. We even have a dedicated "help" channel!',
  },
];

@Component({
  selector: 'ng-mf-accordion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="shell">
      <div
        class="relative top-52 my-0 mx-auto p-6 min-w-[280px] max-w-[500px] bg-white rounded-xl shadow"
      >
        <section class="flex">
          <img src="assets/accordion/icon-star.svg" />

          <h2 class="my-0 mx-3 text-5xl font-bold">FAQs</h2>
        </section>

        <section class="mt-7">
          <details class="mb-4" *ngFor="let faq of faqs; index as i">
            <summary class="list-none">
              <p
                class="font-semibold cursor-pointer pr-5 hover:text-[color:hsl(292,16%,49%)]"
              >
                {{ faq.question }}
              </p>
            </summary>

            <p class="mt-4 text-[color:hsl(292,16%,49%)]">{{ faq.answer }}</p>
          </details>
        </section>
      </div>
    </div>
  `,
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent {
  public faqs = FAQS;
}
