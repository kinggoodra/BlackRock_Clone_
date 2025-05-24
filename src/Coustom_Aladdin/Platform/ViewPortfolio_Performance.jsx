import { memo } from "react";

export default memo(function ViewPortfolio_Performance() {
    return<>
    <div className="bg-black flex flex-col p-10 gap-10 ">
    <h2 className="scroll-m-20  text-accent  text-5xl font-normal  tracking-tight ">
A comprehensive view of portfolio risk & performance
          </h2>
        <ol className="list-disc text-accent">
            <li>Portfolio positioning and exposures </li>
            <li>Performance & attribution </li>
            <li>Portfolio Risk & scenario analysis</li>
            <li>Asset allocation analysis</li>
            <li>Complance and oversight  </li>
            <li> Security Risk and Iintractive analytics</li>
        </ol>
    </div>
    </>
})