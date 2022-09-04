import {FC} from "react";
import {FaGithubAlt, FaLinkedinIn, FaEnvelope} from "react-icons/fa";

export const Footer: FC = () => {
    return (
        <>
            <footer className="w-full mt-8 py-2 flex flex-col gap-5">
                <hr/>
                <div className="flex w-20 justify-between">
                    <a aria-label={"opens github"} rel={"noreferrer"} href="https://github.com/LachlanStephan"
                       target="_blank">
                        <FaGithubAlt/>
                    </a>
                    <a
                        aria-label={"opens linkedin"}
                        rel={"noreferrer"}
                        href="https://www.linkedin.com/in/lachlan-stephan-b58a1a213/"
                        target="_blank"
                    >
                        <FaLinkedinIn/>
                    </a>
                    <a
                        aria-label={"opens mail"}
                        href="mailto:ljstephan116@gmail.com">
                        <FaEnvelope/>
                    </a>
                </div>
            </footer>
        </>
    );
};
