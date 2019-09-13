import { withRouter } from "next/router";
import dynamic from 'next/dynamic'
import Link from "next/link";
// import Comp from "../components/comp";
import styled from "styled-components";
// import moment from "moment";
const Comp=dynamic(import('../components/comp.jsx'))
const Title = styled.h1`
  color: blue;
  font-size: 40px;
`;

const A = ({ router, name, time }) => (
  <>
    <Title>this is title{time}</Title>
    {/* <Comp></Comp>   */}
    <Link href="#a">
      <div>
        <a className="link">{router.query.id}</a>
        <a href="">{name}</a>
      </div>
    </Link>
    <style jsx>{`
      a {
        color: blue;
      }
      .link {
        color: green;
      }
    `}</style>
    <style jsx global>{`
      a {
        color: red;
      }
    `}</style>
  </>
);
A.getInitialProps = async ctx => {
  const moment = await import("moment");
  console.log("--------");
  return {
    name: "jack",
    time: moment.default(Date.now() - 60 * 1000).fromNow()
  };
};
export default withRouter(A);
