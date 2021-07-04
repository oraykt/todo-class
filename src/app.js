const root = document.getElementById('root');

const app = {
  title: 'Todo Application',
  description: 'Ex mollit labore nulla sit dolor.',
}

class TodoApp extends React.Component{
  constructor(props) {
    super(props)
    this.clearItems = this.clearItems.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
      const json = localStorage.getItem('items');
      const items = JSON.parse(json)
      items && this.setState({items})
    }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      const items = JSON.stringify(this.state.items)
      localStorage.setItem('items', items)
    }
  }
  clearItems() {
    this.setState({
      items: []
    })
  }

  addItem(item) {
    if (this.state.items.indexOf(item) > -1) {
      alert('You can not enter an item twice')
      return false;
    }
    this.setState((prevState) => {
      return { items: prevState.items.concat(item)}
    })
  }

  deleteItem(item) {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((i) => item !== i)
      }
    })
  }

  render() {
    return (
      <div>
        <Header title={app.title} description={app.description}/>
        <TodoList items={this.state.items} deleteItem={this.deleteItem} clearItems={this.clearItems}/>
        <Action addItem={this.addItem}/>
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
          {this.props.items.map((item, index) => <TodoItem key={index} item={item} deleteItem={this.props.deleteItem} />)}
      </ul>
      <p>
          {this.props.items.length !== 0 && <button onClick={this.props.clearItems}>Clear Items</button>}
      </p>
      </div>
    )
  }
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
  }

  deleteItem() {
    this.props.deleteItem(this.props.item)
  }

  render() {
    return (
      <li>
        {this.props.item} 
        <button onClick={this.deleteItem}>x</button>
      </li>
      )
  }
}

class Action extends React.Component{
  constructor(props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(event) {
    event.preventDefault();
    const item = event.target.elements.txtItem.value.trim();
    item && this.props.addItem(item)
    event.target.elements.txtItem.value=""
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="txtItem" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, root);