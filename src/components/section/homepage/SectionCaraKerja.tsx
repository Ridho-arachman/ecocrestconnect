import Card from "@/ui/card/Card";
import carakerja from "@/data/mock/carakerja.json";
import Image from "next/image";
import Button from "@/ui/Button";

const SectionCaraKerja = () => {
  return (
    <section className="mt-16 text-center">
      <div className="flex">
        <h1 className="mx-auto mt-16 text-3xl font-bold sm:w-3/4 sm:text-4xl">
          Panduan Penggunaan Platform untuk Edukasi dan Kolaborasi
        </h1>
      </div>
      <div className="mt-16 flex">
        <div className="m-auto grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {carakerja.map((item, index) => (
            <Card key={index} lessPadding>
              <Card.Header>
                <Image
                  alt={item.alt}
                  src={item.src}
                  height={300}
                  width={3002}
                  className="h-64 w-full object-cover"
                />
              </Card.Header>
              <Card.Body>
                <div className="flex flex-col items-center">
                  <h2 className="card-title font-semibold">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <Card.Action>
                  <Button className="btn btn-primary">Mulai</Button>
                </Card.Action>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCaraKerja;
