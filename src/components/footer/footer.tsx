import { IconBaseProps } from "react-icons";

interface Props {
  footerLink1: IconBaseProps;
  footerLink2: IconBaseProps;
}

const Footer: React.FC<Props> = ({ footerLink1, footerLink2 }) => {
  return (
    <div className="h-auto">
      <div className="py-2 h-4 w-4 mb-10">
        <p>
          <a
            target="blank"
            className="text-xl hover:text-pink-400 transition 0.5s"
            href="https://github.com/LachlanStephan"
          >
            Github {""}
            {footerLink1}
          </a>
        </p>
      </div>
      <div className="py-2 w-4 h-4 mb-12">
        <a
          className="text-xl hover:text-pink-400 transition 0.5s"
          href="mailto:ljstephan116@gmail.com"
        >
          Email
          {footerLink2}
        </a>
      </div>
    </div>
  );
};

export default Footer;
