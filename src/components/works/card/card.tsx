import React from "react";
import { IconBaseProps } from "react-icons";

// Declare props
interface Props {
  cardImg?: HTMLImageElement | HTMLElement | any;
  alt: string;
  cardTitle?: string;
  cardText?: string;
  tech?: IconBaseProps;
  tech1?: IconBaseProps;
  tech2?: IconBaseProps;
  tech3?: IconBaseProps;
  tech4?: IconBaseProps;
  tech5?: IconBaseProps;
  tech6?: IconBaseProps;
  hrefText?: string;
  icon?: IconBaseProps;
  liveSiteIcon?: IconBaseProps;
  liveSiteLink?: string;
}

// Parse props
const CardProp: React.FC<Props> = ({
  cardImg,
  alt,
  cardTitle,
  cardText,
  tech,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  hrefText,
  icon,
  liveSiteIcon,
  liveSiteLink,
}) => {
  return (
    <div className="py-5 flex flex-wrap justify-center">
      <div className="w-full md:w-3/5 lg:w-3/5 px-2 py-2">
        <img
          className="w-full h-full m-auto shadow-lg box rounded-lg"
          src={cardImg}
          alt={alt}
        />
      </div>
      <div className="w-full md:w-2/5 lg:w-2/5 px-5">
        <div className="py-2 font-bold text-lg">{cardTitle}</div>
        <div className="py-2">{cardText}</div>
        <div className="flex justify-start text-2xl">
          <p className="">{tech}</p>
          <p className="px-2">{tech1}</p>
          <p className="px-2">{tech2}</p>
          <p className="px-2">{tech3}</p>
          <p className="px-2">{tech4}</p>
          <p className="px-2">{tech5}</p>
        </div>
        <div className="flex pl-0 ml-0 justify-start text-2xl">
          <a
            target="blank"
            className="py-4 text-2xl hover:text-pink-400 transition 0.2s"
            href={hrefText}
          >
            {icon}
          </a>
          <a
            target="blank"
            className="p-4 text-2xl w-auto hover:text-pink-400 transition 0.2s"
            href={liveSiteLink}
          >
            {liveSiteIcon}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProp;
