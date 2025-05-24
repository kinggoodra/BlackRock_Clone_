import Navitems from "@/Coustom_Home/Navitems";
import NavLinks from "@/Coustom_Home/NavLinks";
import SVGS from "@/SVGS";
import { Universal } from "@/UniversalClass/UniversalClass";
import { memo } from "react";
import RelatedMaterials from "./RelatedMaterials";
import Footer from "@/Coustom_Home/Footer";
import { Link, useLocation } from "react-router";
import NavBar from "@/Coustom_Home/Newsroom/NavBar";

export default memo(function InvestmentStewardship() {
  const location = useLocation();
  return (
    <>
      <NavBar UniversaL={Universal.SubNavLink} indexes={Universal.indexes} img={"/src/blackrock.svg "} />

      <div className="flex content-start  p-15  flex-col  bg-yellow-300">
        <div className="sm:w-[70%]">
          <small className="text-xm font-medium leading-none inline-block text-black">
            INVESTMENT STEWARDSHIP
          </small>
          <h1 className="scroll-m-20 mt-10 font-semibold text-black tracking-tight text-4xl sm:text-5xl">
            Stewardship at BlackRock
          </h1>
          <p
            className={
              "  font-normal mt-10 text-black text-start  break-words max-w-full"
            }
          >
            BlackRock’s purpose is to help more and more people experience
            financial well-being. In pursuit of our purpose, we focus on the
            long-term sustainability of BlackRock so we can continue to deliver
            value to our shareholders, employees, communities and clients.
          </p>
        </div>
      </div>

      <div className="flex content-start  gap-10 p-5 sm:w-[60%]  flex-col  ">
        <h1 className="scroll-m-20 font-semibold text-black tracking-tight text-4xl">
          At BlackRock, investment stewardship is core to our role as an asset
          manager and manager and a fiduciary to our clints.
        </h1>
        <p
          className={
            "  font-normal  text-black text-start  break-words max-w-full"
          }
        >
          As stewards of our clients' assets, we engage with companies and vote
          at shareholder meetings to promote sound corporate governance and
          business practices that support companies in delivering durable,
          risk-adjusted financial returns over time. We are committed to
          building strong relationships through constructive, ongoing dialogue
          with the boards and executive management of the companies in which our
          clients are invested.
        </p>
        <p
          className={
            " text-base sm:text-lg md:text-xl font-semibold text-black text-start  break-words max-w-full"
          }
        >
          As a link between our clients and the public companies they are
          invested in, BlackRock offers a range of investment stewardship
          options to reflect clients’ individual investment choices and goals.
        </p>
        <p
          className={
            "  font-normal  text-black text-start  break-words max-w-full"
          }
        >
          BlackRock’s stewardship policies are developed and implemented
          separately by two independent, specialist teams, BlackRock Investment
          Stewardship (BIS) and BlackRock Active Investment Stewardship (BAIS).
          While the two teams operate independently, their general approach is
          grounded in widely recognized norms of corporate governance and
          shareholder rights and responsibilities.
        </p>
        <p
          className={
            "  font-normal  text-black text-start  break-words max-w-full"
          }
        >
          BIS is responsible for stewardship activities in relation to clients’
          assets managed by certain index equity portfolio managers.
          Approximately 90% of BlackRock clients’ public equity assets under
          management are held in index equity strategies, as of December 31,
          2024.<sup>1</sup>
        </p>
        <p
          className={
            "  font-normal  text-black text-start  break-words max-w-full"
          }
        >
          Index or active, our BlackRock stewardship teams, and all of our
          stewardship efforts across the firm, are focused on making decisions
          consistent with our clients’ stated objectives.
        </p>
        <h3
          className={
            "  font-bold text-2xl text-black text-start  break-words max-w-full"
          }
        >
          BlackRock’s stewardship program has four key pillars:{" "}
        </h3>
        <ol className="list-decimal marker:font-bold m-5">
          <li>
            <b>Engaging with companies</b>
          </li>
          <p
            className={
              "  font-normal  text-black text-start  break-words max-w-full"
            }
          >
            BlackRock stewardship analysts engage with the boards and management
            of companies in which clients are invested to listen to their
            perspectives on material business risks and opportunities they are
            facing to help make more informed voting decisions.
          </p>
          <li>
            <b>Proxy voting on behalf of clients</b>
          </li>
          <p
            className={
              "  font-normal  text-black text-start  break-words max-w-full"
            }
          >
            Voting at a company’s shareholder meeting is a basic right of share
            ownership and the formal means by which investors express their
            views on a company’s corporate governance and performance.
          </p>
          <p
            className={
              "  font-normal  text-black text-start  break-words max-w-full"
            }
          >
            When authorized by clients to vote on their behalf, BlackRock votes
            to convey support for or concern about a company’s approach to
            delivering financial returns for investors over time.
          </p>
          <li>
            <b>Contrbuting to industry dialog on stewardship</b>
          </li>
          <p
            className={
              "  font-normal  text-black text-start  break-words max-w-full"
            }
          >
            BlackRock’s stewardship teams contribute to market-level discussions
            to share perspectives on topical and emerging stewardship issues.
          </p>
          <li>
            <b>Reporting on our stewardship activities</b>
          </li>
          <p
            className={
              "  font-normal  text-black text-start  break-words max-w-full"
            }
          >
            BlackRock informs clients about our stewardship activities on their
            behalf through a range of publications on our website, as well as
            through direct reporting.
          </p>
        </ol>
        <p
          className={
            "  font-bold text-2xl text-black text-start  break-words max-w-full"
          }
        >
          Offering more choice to meet our clients’ investment needs{" "}
        </p>
        <p
          className={
            "  font-normal  text-black text-start  break-words max-w-full"
          }
        >
          In addition to BlackRock’s stewardship policies - developed and
          implemented separately and independently by BIS and BAIS - BlackRock
          offers two additional stewardship options to provide clients with more
          choice to meet their investment needs.
        </p>
        <p
          className={
            "  font-normal  text-black text-start  break-words max-w-full"
          }
        >
          <u>
            <Link to={`${location.pathname}/BlackRock Voting Choice`}>
              <b>BlackRock Voting Choice -</b>
            </Link>
          </u>
          sometimes known as pass-through voting – provides eligible clients
          with more opportunities to participate in the proxy voting process,
          where legally and operationally viable.
        </p>
        <p
          className={
            "  font-normal  text-black text-start  break-words max-w-full"
          }
        >
          The climate and decarbonization stewardship program applies only to
          funds that have climate and decarbonization objectives and that have
          been explicitly approved for inclusion in the program by the
          respective governing body. Separately managed accounts clients may
          also instruct BlackRock to apply the program to their holdings. BIS
          and BAIS separately administer the program for their respective
          in-scope strategies.
        </p>
        <p
          className={
            "  font-normal  text-black text-start  break-words max-w-full"
          }
        >
          We are committed to providing clients with a range of choices to
          support their individual investment needs and preferences.
        </p>{" "}
      </div>
      <RelatedMaterials />
      <Footer margin={"0"} img={"/src/blackrock.svg "} />
    </>
  );
});
