import Card from "../components/Card";
import Code from "../components/Code";

export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-10">
      <h1>Welcome to NextJS 13!</h1>
      <section>
        <Card />
        <Code text="Test code here"></Code>
      </section>
    </main>
  );
}
