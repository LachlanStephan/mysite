import { IconBaseProps } from "react-icons";

interface Props {
  footerLink1: IconBaseProps;
  footerLink2: IconBaseProps;
}

const Footer: React.FC<Props> = ({ footerLink1, footerLink2 }) => {
  return (
    <div>
      <div>
        <div>
          <p>
            <a
              target="blank"
              className="footerLink"
              href="https://github.com/LachlanStephan"
            >
              Github {""}
              {footerLink1}
            </a>
          </p>
        </div>
      </div>
      <div>
        <div>
          <p>
            <a className="footerLink" href="mailto:ljstephan116@gmail.com">
              Email
              {footerLink2}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
