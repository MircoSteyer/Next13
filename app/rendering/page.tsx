import Code from "../../components/Code";

const RenderingPage = async () => {
  return (
    <>
      <h1>Rendering Fundamentals</h1>
      <h2>Rendering Environments</h2>
      <p>
        With React 18 and Next 13, there are now two ways to render an
        application. This is because there are now two environments available
        where code can be rendered:
      </p>
      <ol>
        <li>The client.</li>
        <li>The server.</li>
      </ol>
      <p>
        Before React 18, the primary way to render application code was on the
        client.
      </p>
      <p>
        NextJS attempted to ease the load on the client by prerendering parts of
        the application. In turn, however, that code needed hydration in order
        to work, which ultimately did not lessen the time to interactive (TTA)
        by much.
      </p>
      <p>
        Via the new <Code text={"app"} /> directory, components are now by
        default rendered on the server with the option to render the components
        on the client still via the <Code text={"'use client'"} /> directive.
      </p>
      <h2>Why server components?</h2>
    </>
  );
};

export default RenderingPage;
