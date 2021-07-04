const root = document.getElementById('root');

// const Header = function (props) {
//   console.log(props)
//   return <h1>Hello React</h1>
// }


class Header extends React.Component{
  render() {
    // console.log(this.props)
    return <h1> Hello React</h1>
  }
}

const template = <Header />

ReactDOM.render(template, root);