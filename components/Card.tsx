const Card: React.FC = () => {
  return (
    <a
      href="https://beta.nextjs.org/docs"
      className="block m-4 p-6 text-left no-underline border border-solid border-next-border rounded-xl
      transition max-w-3xl hover:text-next-blue hover:border-next-blue focus:text-next-blue focus:border-next-blue active:text-next-blue active:border-next-blue"
    >
      <h2 className="mb-4 text-base">Documentation &rarr;</h2>
      <p className="m-0 text-sm">Find in-depth information about Next.js 13</p>
    </a>
  );
};

export default Card;
