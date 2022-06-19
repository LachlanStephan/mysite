import { FC } from "react";
import Markdown from 'markdown-to-jsx'
import { FaRegWindowClose } from "react-icons/fa";

interface Data {
  content: string;
  name: string;
}

interface Props {
  closeModal: Function;
  data: Data;
}

// TODO: 
// should do err handling on the fetched data - failed || empty
// need to make a proper modal without pos absolute

export const Info: FC<Props> = (Props) => {
  const data = Props;
  return (
    <>
      <div className="h-3/6 w-3/5 xs:w-full lg:w-2/5 absolute bg-white border-2 rounded-lg flex flex-col p-2 inset-x-1/4 inset-y-32 overflow-y-auto overflow-x-clip">
        <div className="flex h-10 w-full justify-between">{data.data.name}
          <div className="cursor-pointer" onClick={() => Props.closeModal()}>
            <FaRegWindowClose />
          </div>
        </div>
        <div className="break-all">
        <Markdown>
          {atob(data.data.content)}
        </Markdown>
        </div>
      </div>
    </>
  );
};
