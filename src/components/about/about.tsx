import React, {useEffect, useState} from "react";

// Declare props
interface Props {
	aboutText: string;
	aboutText2: string;
	aboutText3: string;
}

const About: React.FC<Props> = ({aboutText, aboutText2, aboutText3}) => {
	return (
		<div id="about" className="py-4 text-xl flex flex-wrap">
			<div className="py-2">
				<div>
					<div>{aboutText}</div>
				</div>
				<div className="py-2">
					<div>{aboutText2}</div>
				</div>
			</div>
		</div>
	);
};

export default About;
