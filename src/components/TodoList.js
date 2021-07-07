import React from 'react'

import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
      <div>
        <ul>
          {props.items.map((item, index) => <TodoItem key={index} item={item} deleteItem={props.deleteItem} />)}
      </ul>
      <p>
          {props.items.length !== 0 && <button onClick={props.clearItems}>Clear Items</button>}
      </p>
      </div>
    )
}



// class TodoList extends React.Component{
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.items.map((item, index) => <TodoItem key={index} item={item} deleteItem={this.props.deleteItem} />)}
//       </ul>
//       <p>
//           {this.props.items.length !== 0 && <button onClick={this.props.clearItems}>Clear Items</button>}
//       </p>
//       </div>
//     )
//   }
// }

export default TodoList