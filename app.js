class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }
  onGroceryItemClick() {
    this.setState({
      done: !this.state.done
    })
  }
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (<li style={style} onClick={this.onGroceryItemClick.bind(this)}>{this.props.item}</li>)
  }
}


var GroceryList = (props) => (
<ul>
    {props.items.map(item => 
    <GroceryListItem item={item}/>
    )}
</ul>
)
  


ReactDOM.render(<GroceryList items={['Breakfast sandwich', 'milk']}/>, document.getElementById("app"));

