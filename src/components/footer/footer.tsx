import { IconBaseProps } from "react-icons";

interface Props {
  footerLink1: IconBaseProps;
  footerLink2: IconBaseProps;
}

const Footer: React.FC<Props> = ({ footerLink1, footerLink2 }) => {
  return (
    <div className="h-auto">
      <div className="py-2">
        <p>
          <a
            target="blank"
            className="text-xl hover:text-pink-200 transition 0.5s"
            href="https://github.com/LachlanStephan"
          >
            Github {""}
            {footerLink1}
          </a>
        </p>
      </div>
      <div className="py-2">
        <p>
          <a
            className="text-xl hover:text-pink-200 transition 0.5s"
            href="mailto:ljstephan116@gmail.com"
          >
            Email
            {footerLink2}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
