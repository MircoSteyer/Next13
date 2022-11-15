import { getTodoWithoutCache } from "../../../services/todo";

const DynamicRenderingPage = async () => {
  const todo = await getTodoWithoutCache(1);

  return (
    <>
      <p>Time of render: {new Date().toUTCString()}</p>
      <pre>{JSON.stringify(todo, undefined, 2)}</pre>
    </>
  );
};

export default DynamicRenderingPage;
