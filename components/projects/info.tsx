import { FC } from "react";
import Markdown from "markdown-to-jsx";
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
// add loader for readme

export const Info: FC<Props> = (Props) => {
  const data = Props;
  return (
    <>
      <div className="flex justify-center items-start overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div className="p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="bg-light_background dark:bg-dark_background  border-2 rounded-lg shadow border-accent_grey">
            <div className="flex justify-between items-start p-4 t">
              <h3 className="text-xl font-semibold">
                {data.data.name}
              </h3>
              <button
                onClick={() => Props.closeModal()}
                type="button"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 text-sm"
              >
                <FaRegWindowClose />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="break-all max-h-96 overflow-auto">
                <Markdown>{atob(data.data.content)}</Markdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
