import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`container py-4 px-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

