const root = document.getElementById('root');

const app = {
  title: 'Todo Application',
  description: 'Ex mollit labore nulla sit dolor.',
  items: ['item 1','item 2', 'item 3']
}

class TodoApp extends React.Component{
  render() {
    return (
      <div>
        <Header title={app.title} description={app.description}/>
        <TodoList items={app.items} />
        <Action />
      </div>
    )
  }
}


class Header extends React.Component{
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>
          {this.props.description}
        </p>
      </div>
    )
  }
}

class TodoList extends React.Component{
  render() {
    
    return (
      <div>
        <ul>
        {this.props.items.map((item, index) => <TodoItem key={index} item={item} />)}
      </ul>
      <p>
          <button>Clear Items</button>
      </p>
      </div>
    )
  }
}

class TodoItem extends React.Component{
  render() {
    return (
      <li>{this.props.item}</li>
      )
  }
}

class Action extends React.Component{
  render() {
    return (
      <div>
        <form>
          <input type="text" name="txtItem" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, root);