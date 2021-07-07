import React from 'react'

const Header = (props) => {
  return (
      <div>
        <h1>{props.title}</h1>
        <p>
          {props.description}
        </p>
      </div>
    )
}

// function Header(props) {
//   return (
//       <div>
//         <h1>{props.title}</h1>
//         <p>
//           {props.description}
//         </p>
//       </div>
//     )
// }


// class Header extends React.Component{
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <p>
//           {this.props.description}
//         </p>
//       </div>
//     )
//   }
// }

export default Header