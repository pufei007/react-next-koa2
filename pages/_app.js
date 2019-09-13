import App, { Container } from "next/app";
import Layout from "../components/Layout";
import "antd/dist/antd.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    console.log("app init");
    let pageProps;
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps
    };
  }
  render() {
    const { Component, pageProps } = this.props;
    console.log(Component);
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
