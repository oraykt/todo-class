import React from 'react'

import Header from './Header'
import TodoList from './TodoList'
import Action from './Action'


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
    const app = {
      title: 'Todo Application',
      description: 'Ex mollit labore nulla sit dolor.',
    }
    return (
      <div className="container my-5">
        <div className="card">
          <div className="card-header">
            <Header title={app.title} description={app.description}/>
          </div>
          <div className="card-body">
            <TodoList items={this.state.items} deleteItem={this.deleteItem} clearItems={this.clearItems}/>
          </div>
          <div className="card-footer">
            <Action addItem={this.addItem}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp