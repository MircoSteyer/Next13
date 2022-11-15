import { getTodo } from "../../../services/todo";

const StaticRenderingPage = async () => {
  const todo = await getTodo(1);

  return (
    <>
      <p>Time of render: {new Date().toUTCString()}</p>
      <pre>{JSON.stringify(todo, undefined, 2)}</pre>
    </>
  );
};

export default StaticRenderingPage;
