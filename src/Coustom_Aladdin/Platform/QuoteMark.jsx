import { memo } from "react";

export default memo(function QuoteMark() {
    return<>
    <div className="p-[5%] pl-[20%] bg-yellow-300 flex flex-col gap-10">
            <img
              className="w-[10%] sm:w-[5%]"
              alt="Quotation start"
              src="https://www.blackrock.com/blk-inst-c-assets/cache-1745919577000/include/common/images/campaign-quote-mark-alternatebg.svg"
            />
            <p className="leading-7 [&:not(:first-child)]: text-2xl font-bold">
              Technology, as you'd expect, pretty much underpins the investment
              process. So, technology is critical for us in leveraging the data
              that's available, allowing people to run their simulations around risk
              and returns in developing quantitative investment strategies to
              support where we are allocating the money, as well.
            </p>
            <p className="leading-7 [&:not(:first-child)]: text-lg font-bold">
              Peter Curtis , Chife Operating Officer, AustralianSuper
            </p>
          </div>
    </>
})