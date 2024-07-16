import { portfolios } from "../data";
import Portfolio from "./Portfolio";

export default function () {
  return (
    <>
      {portfolios.map((portfolio) => {
        return <Portfolio portfolio={portfolio} key={portfolio.id} />
      })}
    </>
  )
}