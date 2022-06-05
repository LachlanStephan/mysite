import { FC, useState, useEffect } from "react";

interface Props {
    eventsTotal: any[];
}

export const CommitBoard: FC<Props> = (Props) => {
    const squares = Props.eventsTotal;

    // TODO:
    //  how to get 30 last days to show
    //  sort by date - need to format dates?
    //  sort colour by psuhEvents per date
    //  
    const board = squares.map((v: any, i: any) => {
        const currDate = new Date();
        console.log(currDate, "CURRENT");
        if (v.type === "PushEvent") {
            console.log(v.created_at, "COMMITED AT");
            return <div key={i} className="h-2 w-2 bg-green-600"></div>;
        }
        return <div key={i} className="h-2 w-2 bg-black"></div>;
    });

    return (
        <>
            <h1 className="font-bold">Github:</h1>
            <br />
            <div className="grid gap-1 grid-rows-10 grid-cols-10  h-auto w-auto">
                {board}
            </div>
        </>
    );
};
