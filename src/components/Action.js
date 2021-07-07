import React from 'react'

const Action = (props) => {
  return (
      <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        const item = event.target.elements.txtItem.value.trim();
        item && props.addItem(item)
        event.target.elements.txtItem.value=""
        }}>
          <input type="text" name="txtItem" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    )
}

// class Action extends React.Component{
//   constructor(props) {
//     super(props)
//     this.onFormSubmit = this.onFormSubmit.bind(this)
//   }

//   onFormSubmit(event) {
//     event.preventDefault();
//     const item = event.target.elements.txtItem.value.trim();
//     item && this.props.addItem(item)
//     event.target.elements.txtItem.value=""
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.onFormSubmit}>
//           <input type="text" name="txtItem" />
//           <button type="submit">Add Item</button>
//         </form>
//       </div>
//     )
//   }
// }

export default Action