import React from "react";

export interface CardProps {
  href: string;
  headerText: string;
  infoText: string;
}

const Card: React.FC<CardProps> = ({ href, headerText, infoText }) => {
  return (
    <a
      href={href}
      className="md:w-50 block m-4 p-6 text-left no-underline border border-solid border-next-border rounded-xl
      transition hover:text-next-blue hover:border-next-blue focus:text-next-blue focus:border-next-blue active:text-next-blue active:border-next-blue"
    >
      <h2 className="mb-4 text-base font-bold">{headerText} &rarr;</h2>
      <p className="m-0 text-sm">{infoText}</p>
    </a>
  );
};

export default Card;
