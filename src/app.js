const root = document.getElementById('root');

class TodoApp extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <TodoList />
        <Action />
      </div>
    )
  }
}


class Header extends React.Component{
  render() {
    return (
      <div>
        <h1>Todo Application</h1>
        <p>
          Culpa laborum amet id ipsum duis pariatur Lorem proident tempor.
        </p>
      </div>
    )
  }
}

class TodoList extends React.Component{
  render() {
    return (
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    )
  }
}

class TodoItem extends React.Component{
  render() {
    return (
      <li> Todo Item</li>
      )
  }
}

class Action extends React.Component{
  render() {
    return (
      <div>
        <p>
          <button>Clear Items</button>
        </p>
        <form>
          <input type="text" name="txtItem" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, root);