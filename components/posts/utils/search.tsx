import { FC } from "react";

interface Props {
  searchTarget: string;
  title: string;
}

export const Search: FC<Props> = (Props) => {
  return (
    <>
      <h1>{Props.title}</h1>
    </>
  )
}

