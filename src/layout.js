import React from "react"
import Header from "./components/header";
import Footer from "./components/footer";


class Layout extends React.Component {
  render(){
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}
export default Layout;