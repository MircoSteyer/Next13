import React from "react";

export interface CodeProps {
  text: string;
}

const Code: React.FC<CodeProps> = ({ text }) => {
  return (
    <code className="max-w-3xl bg-next-code dark:bg-next-dark-code rounded-md p-3 text-lg font-code">
      {text}
    </code>
  );
};

export default Code;
