import React from 'react'

import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
      <div>
        <ul className="list-group">
          {props.items.map((item, index) => <TodoItem key={index} item={item} deleteItem={props.deleteItem} />)}
      </ul>
      <p>
        {props.items.length > 0 ?
          <button className="btn btn-danger mt-3" onClick={props.clearItems}>Clear Items</button>
        : <p className="alert alert-warning">Add item to start</p>}
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