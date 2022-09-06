import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      items:[
        {
          id:1,
          img:"image1.jpg",
          desc: "Apollo running short",
          price:"50.00"
        },
        {
          id:2,
          img:"image2.jpg",
          desc: "Apollo running short",
          price:"50.00"
        },
        {
          id:3,
          img:"image3.jpg",
          desc: "Apollo running short",
          price:"50.00"
        },
        {
          id:4,
          img:"image2.jpg",
          desc: "Apollo running short",
          price:"50.00"
        },
        {
          id:5,
          img:"image1.jpg",
          desc: "Apollo running short",
          price:"50.00"
        },
        {
          id:6,
          img:"image6.jpg",
          desc: "Apollo running short",
          price:"50.00"
        }, 
      ],
      showFullItem:false,
      fullItem: {}
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Items onShowItem={this.onShowItem} items={this.state.items} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer/>
    </div>
  )
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
