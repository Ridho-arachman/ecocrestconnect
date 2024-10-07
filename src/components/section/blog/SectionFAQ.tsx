import Accordion from "@/ui/Accordion";
import faq from "@/data/mock/faq.json";

const SectionFAQ = () => {
  return (
    <section className="mb-16">
      <div className="mb-10 flex flex-col gap-5 px-3">
        <h2 className="text-4xl font-bold">Pertanyaan</h2>
        <p>
          Temukan jawaban untuk pertanyaan umum tentang blog dan cara
          berkontribusi di sini.
        </p>
      </div>
      {faq.map((item, index) => (
        <Accordion key={index}>
          <Accordion.Header>
            <h4>{item.title}</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>{item.body}</p>
          </Accordion.Body>
        </Accordion>
      ))}
    </section>
  );
};

export default SectionFAQ;
