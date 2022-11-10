import Card from "../components/Card";
import Code from "../components/Code";
import { cardContent } from "../content/card-content";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-10 p-4">
      <h1 className="text-5xl text-center">
        Welcome to{" "}
        <a
          href="https://beta.nextjs.org/docs"
          className="text-next-blue hover:underline"
        >
          NextJS 13
        </a>
        !
      </h1>
      <p className="text-base text-center">
        Or rather, welcome to an overview and playground of the newest changes
        in NextJS version 13.
      </p>
      <p className="text-base text-center">
        Below, a list of topics can be found that have changed with the newest
        update. Click through all of them to find out about all the most
        relevant changes NextJS can offer.
      </p>

      <section
        className={`grid md:w-2/3 md:grid-cols-2 md:grid-rows-${
          cardContent.length / 2
        }`}
      >
        {cardContent.map((contentInfo) => (
          <Card
            headerText={contentInfo.headerText}
            href={contentInfo.href}
            infoText={contentInfo.infoText}
            key={contentInfo.id}
          />
        ))}
        <Code text="Test code here"></Code>
      </section>
    </main>
  );
}
