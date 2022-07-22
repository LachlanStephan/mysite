import { FC } from "react";

interface Props {
  loading_text: string;
}

// maybe change this to something cool at some point
const Loader:FC<Props> = (Props) => {
  return (
    <div>
      {Props.loading_text}
    </div>
  );
}

export default Loader;
