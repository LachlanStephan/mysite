import { IconBaseProps } from "react-icons";

interface Props {
  footerLink1: IconBaseProps;
  footerLink2: IconBaseProps;
  footerLink3: IconBaseProps;
}

const Footer: React.FC<Props> = ({ footerLink1, footerLink2, footerLink3 }) => {
  return (
    <div className="h-auto flex justify-start">
      <div className="p-2">
        <p>
          <a
            target="blank"
            className="text-xl hover:text-pink-400 transition 0.5s text-2xl"
            href="https://github.com/LachlanStephan"
          >
            {footerLink1}
          </a>
        </p>
      </div>
      <div className="p-2">
        <a
          className="text-xl hover:text-pink-400 transition 0.5s text-2xl"
          href="mailto:ljstephan116@gmail.com"
        >
          {footerLink2}
        </a>
      </div>{" "}
      <div className="p-2 mb-1">
        <a
          target="blank"
          className="text-xl hover:text-pink-400 transition 0.5s text-2xl"
          href="https://www.linkedin.com/in/lachlan-stephan-b58a1a213/"
        >
          {footerLink3}
        </a>
      </div>
    </div>
  );
};

export default Footer;
