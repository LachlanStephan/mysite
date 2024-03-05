import { FC } from "react";

interface Props {
	tags: string;
}

const Tag: FC<Props> = (Props) => {
	const tags = Props.tags.split(",");
	return (
		<div className="flex">
			{" "}
			{tags.map((val, i) => {
				return (
					<div
						className="border-2 rounded-md p-1 mr-1 mt-4 text-sm capitalize border-accent_grey"
						key={i}
					>
						{val}
					</div>
				);
			})}
		</div>
	);
};

export default Tag;
