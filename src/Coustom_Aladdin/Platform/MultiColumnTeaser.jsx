import { memo } from "react";

export default memo(function MultiColumnTeaser({MultiColumnTeaser}) {
    return<>
    <div className="flex  flex-1 flex-col sm:flex-row      gap-5 p-5 " >
       {MultiColumnTeaser.map((index, key)=>(
        <div key={key} className="flex-1 grid grid-rows-[auto]    ">
            <img src={index[0]} alt={index[1]} />
            <h2 className= {`scroll-m-20    pt-10 text-xl font-semibold tracking-tight first:mt-0`} >
              {index[2]}
            </h2>
            <p className={` text-start`}>{index[3]}</p>
        </div>
       )) }

    </div>
    </>
})