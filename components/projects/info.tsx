import { FC } from "react";

interface Props {
  closeModal: Function;
  data: any;
}

// TODO: make md comp to pass content to
// add interfaces for this data being thrown around
// should do err handling on the fetched data - failed || empty
// add icons

export const Info: FC<Props> = (Props) => {
  const data = Props.data.data;
  return (
    <>
      <div className="h-3/6 w-3/5 absolute bg-white border-2 rounded-lg flex flex-col p-2 inset-x-1/4 inset-y-32 overflow-auto">
        <div className="flex h-10 w-full justify-between">{data.name}
          <div onClick={() => Props.closeModal()}>X</div>
        </div>
        <div>{atob(data.content)}</div>
      </div>
    </>
  );
};
