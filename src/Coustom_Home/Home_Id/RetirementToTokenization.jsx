import { memo } from "react";
import Quotation from "./Quotation";
export default memo(function RetirementToTokenization() {
  return (
    <>
      <div id="3">
        <br />
        <div className="grid grid-cols-1 m-2  place-items-start  gap-5">
          <h1 className="scroll-m-20  font-semibold  tracking-tight text-5xl">
            From retirement to tokenization
          </h1>
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
            How all of us can democratize investing
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            On September 30, 1933, during the depths of the Great Depression, a
            small California newspaper, The Long Beach Telegram, published a
            letter from Francis Townsend. He was a local doctor who’d written
            his letter in a burst of anger after witnessing elderly women
            scavenging for food in the street. His proposal—$200 per month for
            every American over 60—touched off the movement that led to Social
            Security in the U.S.
            <sup>26</sup>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            According to the U.S. Census Bureau, Social Security keeps nearly 30
            million Americans from sliding into poverty each year—an
            extraordinary achievement.<sup>27</sup> And yet, projections show
            Social Security’s retirement and disability funds will run out by
            2035. After that, people would get only 83% of their promised
            benefits, and that percentage will drop over time. <sup>28</sup>
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            But even if we shore up Social Security, it’s not enough. The system
            was designed to do exactly what Francis Townsend had in mind: keep
            older people out of poverty. But escaping poverty doesn't equal
            financial security. That’s why today, even with the promise of
            Social Security, more than half of Americans still fear outliving
            their savings more than death itself.<sup>29</sup>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            A good retirement system provides a safety net to catch people when
            they fall. But a great system also offers a ladder—a way to grow
            savings, compounding wealth year after year. That’s where the U.S.
            falls short.{" "}
            <b>
              Right now, the country focuses heavily on preventing people from
              hitting the floor, as we should. But the U.S. needs to put just as
              much effort into helping people climb to the ceiling—through
              investing.
            </b>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            More than half the money BlackRock manages is retirement money.{" "}
            <sup>30</sup> It’s our core business, which makes sense: For most
            people, retirement accounts are their first—and often their
            only—experience with investing. So, if we really want to democratize
            investing, retirement is where the conversation has to start.
          </p>
          <div className=" bg-blue-200   w-full  ">
            <div className="grid sm:grid-cols-3 gap-5  ">
              <div>
                <img
                  src="https://www.blackrock.com/blk-corp-assets/cache-1743413422000/images/media-bin/web/global/chairmans-letter/2025-tile-number-thirty-three.webp"
                  alt=""
                />
                <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
                  Of Americans have no retirement savings
                </h3>
              </div>
              <div>
                <img
                  src="https://www.blackrock.com/blk-corp-assets/cache-1743413422000/images/media-bin/web/global/chairmans-letter/2025-tile-number-fifty-one.webp"
                  alt=""
                />
                <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
                  Are more worried about outliving their savings than of death
                  itself
                </h3>
              </div>{" "}
              <div>
                <img
                  src="https://www.blackrock.com/blk-corp-assets/cache-1743413422000/images/media-bin/web/global/chairmans-letter/2025-tile-fraction-one-third.webp"
                  alt=""
                />
                <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
                  Would have a hard time paying an unexpected $500 bill
                </h3>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-7 [&:not(:first-child)]:mt-4 font-bold">
                Source
              </p>
              <hr className="border-black" />
              <p className="leading-7 [&:not(:first-child)]:mt-4 font-extralight">
                Redefining retirement – it’s all of our work, BlackRock 2025
                survey
              </p>
            </div>
          </div>
          <Quotation
            p={
              "A good retirement system provides a safety net to catch people when they fall. But a great system also offers a ladder—a way to grow savings, compounding wealth year after year."
            }
          />
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            While BlackRock helps people invest for retirement all over the
            world, I want to focus on the U.S. in this section. Because the
            situation is dire. Public pensions are facing huge shortfalls.
            Nationwide, the data shows they’re only about 80% funded—and that’s
            probably an overly optimistic number. <sup>31</sup>
            <b>
              {" "}
              Meanwhile, a third of the country has no retirement savings at
              all. No pensions, no 401(k)—nothing.{" "}
            </b>
            <sup>32</sup>
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            As money runs shorter, lives are getting longer. Today, if you're
            married and both of you reach 65, there's a 50/50 chance at least
            one of you lives until 90.<sup>33</sup> And with biomedical
            breakthroughs like GLP-1 drugs, many more chronic diseases might
            soon become curable.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            That's an incredible blessing—but it also underscores something
            frustrating: We're great at extending people's lives, yet we hardly
            spend any effort helping them afford those extra years.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            It’s the problems we don’t talk about that should worry us most.
            And, by that measure, I’m less worried about the U.S. retirement
            crisis than I was a month ago.
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            In March, BlackRock hosted a retirement summit in Washington, D.C.,
            bringing together Republicans and Democrats, asset managers and
            pension funds, small business owners, firefighters, teachers, union
            members, and farmers. It was an eclectic group, and that was the
            point. Good ideas can come from unexpected places. After all, the
            most important retirement program in U.S. history started as an
            op-ed from an unknown doctor in a tiny newspaper.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            That same dynamic played out at the summit: We saw consensus around
            practical ideas to help more Americans start investing, grow their
            savings to hit their retirement goals, and confidently spend down
            what they've earned—so that Americans don’t have to fear running out
            of money, certainly not more than death itself.
          </p>
          <div className="h-[25%] w-full sm:w-[50%] mt-4">
            <img
              alt="Chart: S&amp;P 500 and global GDP growth"
              src="https://www.blackrock.com/blk-corp-assets/cache-1743413422000/images/media-bin/web/global/chairmans-letter/2025-photo-retirement-summit-1.webp"
            ></img>
            <small className="text-xm font-normal leading -none">
              <b>Left to right:</b> James Slevin (NY Fire Department, 1st
              District VP, International Association of Fire Fighters), Michelle
              Crowley (Former Biloxi Fire Department), Shebah Carfagna (Owner,
              Panache Wellness and Fitness), Nate Wilkins (Founder, Ageless
              Workout Method), and Gayle King (Moderator, Co-Host of CBS
              Mornings & Editor-at-Large, Oprah Daily)
            </small>
          </div>
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
            Where do we start?
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            At the summit, one panel featured a firefighter who recalled how, as
            a rookie, he’d enrolled in a pension without even knowing it. A
            veteran fireman gave him a form—and an order: “Just sign it. You’ll
            thank me in 25 years.” And he did.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Every American deserves to start investing that easily.{" "}
            <b>But for millions, investing still isn't even an option.</b>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            There are <b>three ways</b> we can start addressing this.
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            <b>First, expand emergency savings.</b> No one invests for
            retirement if they're worried about paying for a flat tire or ER
            visit tomorrow. Yet that's the reality for one-third of U.S. voters
            who say they couldn't handle an unexpected $500 expense.{" "}
            <sup>34F</sup>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            What's a solution? BlackRock’s philanthropic foundation has worked
            with a group of nonprofits to establish an Emergency Savings
            Initiative, helping mostly low-income Americans put away $2 billion
            in "emergency savings accounts." <sup>35</sup> We’ve found that
            people with these dedicated rainy-day funds are much more likely to
            invest for retirement—70% more likely according to one study.{" "}
            <sup>36</sup>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Congress scaled this idea nationwide in 2022 with the SECURE 2.0
            Act. The law allows workers to save up to $2,500 in emergency
            accounts linked to retirement plans, including employer matching and
            easy withdrawals. <sup>37</sup> But it's just a start. We can
            simplify the rules further, raise contribution limits, and enable
            automatic enrollment in standalone emergency accounts.
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            <b>Second, close the small business 401(k) gap.</b> Half of
            Americans work for small businesses, yet nearly half those
            businesses offer no retirement plan. <sup>38</sup> This is fixable.
            States experimenting with incentives have driven up 401(k) adoption
            and employee savings. Policymakers can lean in more here, helping
            small businesses offer plans and auto-enroll workers.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            <b>Third, help people start investing earlier.</b> At our retirement
            summit, Senators Cory Booker (D-NJ) and Todd Young (R-IN) talked
            about a market-based spin on "baby bonds.” The idea would be to open
            an investment account for every American child on the day they’re
            born. Senator Booker mentioned it could be seeded by redirecting a
            fraction of existing tax breaks that mostly benefit the wealthy.
            It’s an interesting concept. Even a small amount could compound into
            a very large portfolio over a lifetime.
          </p>
          <Quotation
            p={
              "Every American deserves to start investing that easily. But for millions, investing still isn't even an option."
            }
          />
          <div className="h-[25%] w-full sm:w-[50%] mt-4">
            <img
              alt="Chart: S&amp;P 500 and global GDP growth"
              class="align-left image-780-wide lazyloaded  "
              src="https://www.blackrock.com/blk-corp-assets/cache-1743413422000/images/media-bin/web/global/chairmans-letter/2025-photo-retirement-summit-2.webp"
            ></img>
            <small className="text-xm font-normal leading -none">
              <b>Left to right:</b> Sen. Cory Booker (D-NJ), Sen. Todd Young
              (R-IN), Shai Akabas (Bipartisan Policy Center)
            </small>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Many state and federal policymakers have proposed versions of this
            plan over the years. And I think it’s an idea worth revisiting. The
            real payoff isn’t just financial—it’s foundational. When people own
            a piece of the economy, they don’t just benefit from growth; they
            believe in it. Ownership creates connection. It turns passive
            observers into participants.
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Imagine a child born today whose personal wealth grows in step with
            America’s. That's what an <b>economic democracy</b> could look like:
            a country where everybody has a new avenue—investing—to pursue
            happiness and financial freedom.
          </p>
          <Quotation
            p={
              "That’s what an economic democracy could look like: a country where everybody has a new avenue—investing—to pursue happiness and financial freedom."
            }
          />
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
            How do you reach $2,089,000?
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Once people start investing for retirement, the goal is simple:{" "}
            <b>
              make their money grow—as much as possible, as fast as possible.
            </b>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            In January, BlackRock surveyed Americans, asking how much money
            they'd need to retire comfortably. When we took the average of those
            responses, it was just over $2 million—$2,089,000, to be exact.
            That’s a lot. More than I was expecting. And almost no one is close.
            Even Gen-Xers, the oldest of whom will start retiring in five years,
            are falling short. In fact, 62% have saved less than $150,000.{" "}
            <sup>39</sup>
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            We're going to need better ways to boost portfolios. As I wrote
            earlier, private assets like real estate and infrastructure can lift
            returns and protect investors during market downturns. Pension funds
            have invested in these assets for decades, but 401(k)s haven't. It’s
            one reason why pensions typically outperform 401(k)s by about 0.5%
            each year. <sup>40</sup>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Half a percent doesn't sound huge, but it adds up over time.
            BlackRock estimates that over 40 years, an extra 0.5% in annual
            returns results in 14.5% more money in your 401(k). It’s enough to
            fund nine more years of retirement, helping you stop working on your
            own terms.{" "}
            <b>
              Or, put another way, private assets just bought you nine extra
              years hanging out with your grandkids.
            </b>{" "}
            <sup>41</sup>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            If private assets perform so well, why aren't they in your 401(k)?
            One major reason is that it's <b> unfamiliar territory</b> for the
            401(k) providers who select the investments offered in your plan.
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            When you invest in private assets—like a bridge, for example—the
            values of those assets aren’t updated daily, and you can't withdraw
            your money whenever you want. It's a bridge, after all—not a stock.
            While BlackRock, as I've previously written, is working to make the
            markets for these assets more price-transparent and liquid, many
            401(k) providers haven't yet adapted to this evolving financial
            landscape. Indeed, including assets like real estate or
            infrastructure in a 401(k) has become practical only within the past
            five to ten years.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            <b>This is complex stuff. It requires clarification.</b> Asset
            managers, private-market specialists, consultants, and advisors all
            play a role in guiding 401(k) providers. That's part of the reason
            I'm writing this letter—to cut through the fog. We need to make it
            clear: Private assets are legal in retirement accounts. They're
            beneficial. And they're becoming increasingly transparent.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            <b>Target date funds are a great place to start.</b> People love
            their simplicity: You just pick the year you plan to retire—2040,
            2055, 2060—and let the fund do the rest. That simplicity makes
            target date funds ideal for introducing private assets. The usual
            barriers for 401(k) providers—like daily valuations or immediate
            liquidity—matter far less when you're investing over several
            decades.
          </p>
          <Quotation
            p={
              "Or,  put   another way, private assets just bought you nine extra years hanging out with your grandkids. "
            }
          />
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
            How can we help people spend what they’ve saved?
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Building a nest egg is only half the challenge. The other
            half—especially for 401(k) savers—<b>is knowing how to spend it.</b>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Most pension holders don’t worry about this. Their income arrives
            each month, like a steady paycheck. But a 401(k) doesn’t come with
            instructions. When you retire, you're handed a lump sum and asked to
            make it last for the rest of your life—without knowing how long that
            will be
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            The result? Even retirees who’ve saved well often spend too little,
            gripped by fear that they’ll run out. They downsize dreams and delay
            joy. The economist Bill Sharpe called this problem the "nastiest,
            hardest problem in finance." <b>Hard, but solvable.</b>
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Last year, BlackRock introduced LifePath Paycheck® to tackle this
            fear. It gives people the option to convert 401(k) retirement
            savings into a steady, reliable monthly income. In just 12 months,
            LifePath Paycheck® has already attracted six plan sponsor clients
            representing 200,000 individual retirement savers.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            But no one is declaring victory. The problem will only get harder
            and nastier as the oldest Gen-Xers start to retire. They're the
            first generation primarily dependent on 401(k)s. And the 401(k)
            trend is growing with Millennials and Gen Z. Their employers need to{" "}
            <b>
              offer solutions that turn their savings into predictable income.
            </b>{" "}
            This way, every American can retire with confidence.
          </p>
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
            We can’t democratize investing if it takes 13 years to build a power
            line.
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            In the U.S., retirement investing accounts for about 30% of the
            money flowing through the stock market. <sup>42</sup> It’s the
            biggest opportunity we have to help more people grow alongside the
            wider economy. But just as retirement isn’t the whole market, it’s
            not the whole solution.
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            For example, giving retirement investors access to infrastructure
            matters less if the infrastructure never gets built. That’s often
            the case today.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            In both the U.S. and the EU, it usually takes longer to permit
            infrastructure projects than to construct them.{" "}
            <b>
              A high-voltage power line can take 13 years to get
              approved—something China does in a quarter of the time.
            </b>{" "}
            <sup>43</sup>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Ezra Klein and Derek Thompson expertly illustrate this permitting
            nightmare in their new book, <i>Abundance</i>. One particularly
            vivid passage places California’s stalled bullet train project in
            historical context:
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            <i>
              “California... built all but a few hundred miles of the western
              portion of the Transcontinental Railroad in the 1860s. The project
              spanned nearly 1,800 miles. It took just six years to finish.
              These days, six years is roughly the amount of time it takes
              California to realize that its bullet train needs to be pushed
              back by another decade. In the time California has spent failing
              to complete its 500-mile high-speed rail system, China has built
              more than 23,000 miles of high-speed rail.”
            </i>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            But it’s delays in energy infrastructure, they write, that “could be
            chaotic at best, and catastrophic at worst.” <sup>44</sup>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Global electricity demand is surging, driven in part by the rise of
            AI. A single data center can draw 1 gigawatt of electricity. That’s
            enough to power the entire city of Honolulu on the hottest day of
            the year. <sup>45</sup> In Utah, Ohio, and Texas, utilities have
            already warned that AI-driven electricity demand will push their
            grids past capacity. Even Silicon Valley Power has stopped accepting
            new data center requests. <sup>46</sup>
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Without massive investments in energy generation and
            transmission—and the electricians and engineers to build them—we’re
            going to face an unacceptable tradeoff: Who gets the
            electricity—people or machines? And a society that chooses to cool
            its servers while its citizens swelter—or freeze—has fundamentally
            misplaced its priorities.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            We need{" "}
            <b>
              <u>energy pragmatism.</u>
            </b>{" "}
            That starts with fixing the <b>slow, broken permitting processes</b>{" "}
            in the U.S. and Europe. But it also means being clear-eyed about our{" "}
            <b>energy mix.</b>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Most new infrastructure investments have been flowing into
            renewables. But without major breakthroughs in storage, wind and
            solar alone can’t reliably keep the lights on. In the near term,
            more than half the electricity powering data centers must come from
            dispatchable sources. Otherwise, the air conditioning will shut off,
            the servers will overheat, and the data centers will shut down.{" "}
            <sup>47</sup>
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Where does dispatchable power come from? One source is nuclear. But
            it’s increasingly rare. Over the past 55 years, the United States
            has shut down more nuclear plants than it’s built. As Klein and
            Thompson write, “That is not a failure of the private market to
            responsibly bear risk but of the federal government to properly
            weigh risk.” <sup>48</sup>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            After all, today’s nuclear isn’t the old model of massive plants
            with the ominous cooling towers. Small modular reactors (SMRs) are
            everything old nuclear wasn’t—cheaper to build, safer to run, and
            you can build them anywhere.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            China isn’t waiting. They’re building 100 gigawatts of nuclear,
            which—when completed—will mean they supply half the planet’s nuclear
            power. Why is China so bullish on nuclear? They see decarbonization
            as a way to own the future of industry. <sup>49</sup>
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Consider BYD. The Chinese automaker sells more electric vehicles
            (EVs) than any other company in the world. Next year, they plan to
            add full autonomous capabilities to their cars—at the same price as
            last year’s models. <sup>50</sup> They already sell EVs for just
            $10,000—a price no U.S. or European automaker can match. Within five
            years, China may have completely phased out internal combustion
            engines—not just for environmental reasons, but also to corner the
            global market on driverless, battery-powered vehicles—cars that
            don’t require gas and cost a third as much as their foreign
            competitors.
          </p>
          <Quotation
            p={
              "Without massive investments in energy generation and transmission…we’re going to face an unacceptable tradeoff: Who gets the electricity—people or machines? And a society that chooses to cool its servers while its citizens swelter—or freeze—has fundamentally misplaced its priorities.  "
            }
          />
          <div className="h-[25%] w-full sm:w-[50%] mt-4">
            <span>
              <b>FIGURE 3.1:</b> <sup>51</sup>
            </span>

            <img
              alt="Chart: S&amp;P 500 and global GDP growth"
              class="mt-2 align-left image-780-wide lazyloaded  "
              src="https://www.blackrock.com/blk-corp-assets/cache-1743701552000/images/media-bin/web/global/chairmans-letter/2025-figure-3-1-energy-use-per-person.webp"
            ></img>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            There's a fascinating relationship between a country’s wealth and
            its energy consumption. The correlation is nearly perfect: more
            energy, more wealth. At some point, though, this relationship is
            supposed to break down.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            As economies grow richer, they typically keep growing with less
            incremental energy, thanks to efficiency gains. But you could argue
            that’s not the case anymore.{" "}
            <b>
              Even in the richest nations, prosperity is once again defined by
              our ability—and our willingness—to produce and consume more
              energy.
            </b>
          </p>{" "}
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
            Should we be bullish about Europe again?
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            BlackRock was born in America, and our first clients were in
            Japan—but it was Europe that made us truly global.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Our 2006 acquisition of Merrill Lynch’s asset management business,
            anchored in London, set us on the path to becoming the largest asset
            manager in the world. Today, we manage $2.7 trillion for our
            European clients, including approximately 500 pension schemes
            supporting millions of people.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            For the past decade, Europe’s economic outlook has been persistently
            pessimistic. Slow growth, stagnant markets, and cumbersome
            regulation have dominated the headlines. Mario Draghi, former
            Italian Prime Minister and head of the European Central Bank,
            recently pointed out that Europe has lowered trade barriers with
            countries outside the continent—but it hasn't done the same
            internally among EU nations. Draghi highlighted an analysis by the
            International Monetary Fund (IMF), which paints a striking picture:
            For a German company, it may now be more attractive to do business
            in China than in neighboring France. <sup>52</sup>
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            But I think Europe is waking up. The policymakers I talk to—and I
            talk to a lot—now see that the regulatory roadblocks aren’t going to
            remove themselves. They need to be addressed. And the upside is
            enormous. According to the IMF, reducing intra-EU trade barriers to
            the level between U.S. states could boost productivity by nearly 7%,
            adding an astounding $1.3 trillion to its economy—the equivalent of
            creating another Ireland and Sweden. <sup>53</sup>
          </p>
          <Quotation
            p={
              "BlackRock was born in America, and our first clients were in Japan—but it was Europe that made us truly global. "
            }
          />
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
            Even better, artificial intelligence may be able to defuse Europe’s
            demographic time bomb.
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            The continent’s biggest looming economic challenge is its aging
            workforce. In 22 of the 27 EU member states, the working-age
            population is already shrinking. <sup>54</sup> And because economic
            growth depends heavily on the size of a country's labor force,
            Europe faces the risk of prolonged economic decline. The European
            Commission itself recently sounded the alarm: Sustained growth is
            only possible if Europe's workforce either expands, becomes more
            productive, or both. <sup>55</sup>
          </p>
          <div className="h-[25%] w-full sm:w-[50%] mt-4">
            <span>
              <b>FIGURE 3.2:</b> <sup>56</sup>
            </span>

            <img
              alt="Chart: S&amp;P 500 and global GDP growth"
              class="mt-2 align-left image-780-wide lazyloaded  "
              src="https://www.blackrock.com/blk-corp-assets/cache-1743413422000/images/media-bin/web/global/chairmans-letter/2025-figure-3-2-working-age-population.webp"
            ></img>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            This is precisely where AI might play a crucial role. In economies
            heavily dependent on manufacturing and manual labor, AI has less
            impact. But in service-based economies, where AI can effectively
            automate tasks, productivity gains can be substantial.
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            There’s a worry that AI might eliminate jobs. It’s a valid concern.
            But in aging, wealthy societies facing inevitable labor shortages,
            AI may be less a threat than a lifeline.
          </p>
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
            Can Bitcoin eat away at the U.S. dollar’s reserve status?
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            The U.S. has benefited from the dollar serving as the world’s
            reserve currency for decades. But that’s not guaranteed to last
            forever.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            The national debt has grown at three times the pace of GDP since
            Times Square’s debt clock started ticking in 1989. <sup>57</sup>{" "}
            This year, interest payments will surpass $952 billion—exceeding
            defense spending. By 2030, mandatory government spending and debt
            service will consume all federal revenue, creating a permanent
            deficit. <sup>58</sup>
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            If the U.S. doesn’t get its debt under control, if deficits keep
            ballooning, America risks losing that position to digital assets
            like Bitcoin.
          </p>
          <div className="h-[25%] w-full sm:w-[50%] mt-4">
            <span>
              <b>FIGURE 3.3:</b> <sup>59</sup>
            </span>

            <img
              alt="Chart: S&amp;P 500 and global GDP growth"
              class="mt-2 align-left image-780-wide lazyloaded  "
              src="https://www.blackrock.com/blk-corp-assets/cache-1743413422000/images/media-bin/web/global/chairmans-letter/2025-figure-3-3-us-federal-debt-held-by-public.webp"
            ></img>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal"></p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            To be clear, I'm obviously not anti-digital assets (far from it; see
            the next section). But two things can be true at the same time:
            Decentralized finance is an extraordinary innovation. It makes
            markets faster, cheaper, and more transparent. Yet that same
            innovation could undermine America's economic advantage if investors
            begin seeing Bitcoin as a safer bet than the dollar.
          </p>{" "}
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
            Tokenization is democratization
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            The world’s money moves through plumbing built when trading floors
            still shouted orders and fax machines felt revolutionary.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Take the Society for Worldwide Interbank Financial Telecommunication
            (SWIFT). It’s the system that underpins trillions of dollars in
            global transactions every day, and it works much like a relay race:
            Banks hand off instructions one by one, meticulously checking
            details at each step. That relay approach made sense in the 1970s,
            an analog era when the markets were much smaller and daily
            transactions were much fewer. But today, relying on SWIFT feels like
            routing emails through the postal office.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            What exactly is tokenization? It's turning real-world assets—stocks,
            bonds, real estate—into digital tokens tradable online. Each token
            certifies your ownership of a specific asset, much like a digital
            deed. Unlike traditional paper certificates, these tokens live
            securely on a blockchain, enabling instant buying, selling, and
            transferring without cumbersome paperwork or waiting periods.
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            <b>
              Every stock, every bond, every fund—every asset—can be tokenized.
            </b>{" "}
            If they are, it will revolutionize investing. Markets wouldn't need
            to close. Transactions that currently take days would clear in
            seconds. And billions of dollars currently immobilized by settlement
            delays could be reinvested immediately back into the economy,
            generating more growth.
          </p>
          <Quotation
            p={
              "Every stock, every bond, every fund—every asset—can be tokenized. If they are, it will revolutionize investing."
            }
          />
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
            Perhaps most importantly, tokenization makes investing much more
            democratic.
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            <b>It can democratize access.</b> Tokenization allows for fractional
            ownership. That means assets could be sliced into infinitely small
            pieces. This lowers one of the barriers to investing in valuable,
            previously inaccessible assets like private real estate and private
            equity.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            <b>It can democratize shareholder voting.</b> When you own a stock,
            you have a right to vote on the company’s shareholder proposals.
            Tokenization makes that easier because your ownership and voting
            rights are digitally tracked, allowing you to vote seamlessly and
            securely from anywhere.
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            <b>It can democratize yield.</b> Some investments produce much
            higher returns than others, but only big investors can get into
            them. One reason? Friction. Legal, operational, bureaucratic.
            Tokenization strips that away, allowing more people access to
            potentially higher returns.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            One day, I expect tokenized funds will become as familiar to
            investors as ETFs—provided we crack one critical problem:{" "}
            <b>identity verification.</b>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Financial transactions demand rigorous identity checks. Apple Pay
            and credit cards handle identity verification effortlessly, billions
            of times a day. Trade venues like NYSE and MarketAxess manage to do
            the same for buying and selling securities. But tokenized assets
            won’t run through those traditional channels, meaning we need a new
            digital identity verification system. It sounds complex, but India,
            the world’s most populous country, has already done it. Today, over
            90% of Indians can securely verify transactions directly from their
            smartphones. <sup>60</sup>
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            The takeaway is clear. If we're serious about building an efficient
            and accessible financial system, championing tokenization alone
            won't suffice. We must solve digital verification, too.
          </p>
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
            Something worth expanding
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            In 1761, about 80 years after Jonathan’s Coffee House became the
            heartbeat of London’s financial life, a group of 150 wealthy traders
            tried to close the gates.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            They offered Jonathan’s owner £1,200 per year—about 10 years of
            wages for the average worker—for exclusive use of the space during
            key trading hours.{" "}
            <b>In essence, they wanted to create a private market.</b>
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            But London’s broader community of investors wasn’t having it. They
            protested, they argued their case in the courts, and after two
            years, they won. The markets had to remain open. Everybody could
            invest. <sup>61</sup>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            From our vantage point today, the history of finance can look like a
            long, steady march toward greater democracy—more investors, broader
            participation, and expanded prosperity. And to a large extent,
            that’s been the case. But this democratization was never guaranteed.
            It still isn’t.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            From our vantage point today, the history of finance can look like a
            long, steady march toward greater democracy—more investors, broader
            participation, and expanded prosperity. And to a large extent,
            that’s been the case. But this democratization was never guaranteed.
            It still isn’t.
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            Markets don’t naturally evolve to serve everyone equally. They
            require relentless effort, conscious choices, and constant
            vigilance—from those coffee-house protests centuries ago to today’s
            complex debates over retirement policy, tokenization, infrastructure
            investment, and artificial intelligence.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            It’s demanding work, but at BlackRock we’ve been doing it for 37
            years as fiduciaries to our clients. And not a single day has passed
            when it hasn’t felt worth every bit of effort. Because no system
            human beings have ever devised has done more to generate wealth for
            more people than the capital markets.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            People invest their savings—whether it’s 50 guilders or $50,000—and
            those investments become roads and schools, businesses and
            breakthrough technologies—the things that power our economies,
            sending wealth rippling back to millions, allowing them to worry
            less about kitchen-table finances and spend more time simply
            enjoying life with their families.
          </p>{" "}
          <p className="leading-7 [&:not(:first-child)]:mt-4 font-normal">
            I’ve always said investing is an act of hope—that no one invests for
            the long term unless they believe the future will be better than the
            present. But that’s not quite right. Investing isn’t just an act of
            hope; investing is what makes our hopes, our reality.
          </p>
          <ul className="leading-7">
            <li>That’s something worth protecting.</li>
            <li>That’s something worth expanding.</li>
            <li>That’s something worth democratizing.</li>
          </ul>
        </div>
      </div>
    </>
  );
});
