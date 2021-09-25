import React, {useEffect, useState} from "react";

// Declare props
interface Props {
	aboutText: string;
	aboutText2: string;
	aboutText3: string;
}

const About: React.FC<Props> = ({aboutText, aboutText2, aboutText3}) => {
	return (
		<div id="about" className="min-h-screen py-0 text-xl flex flex-wrap">
			<div className="py-2">
				<div>
					<div>{aboutText}</div>
				</div>
				<div className="py-2">
					<div>{aboutText2}</div>
				</div>
				{/* <div className="">
					<div>{aboutText3}</div>
				</div> */}
			</div>
			{/* <div className="m-auto p-0 mt-0">
				<a href="#works">
	
				</a>
			</div> */}
		</div>
	);
};

export default About;
