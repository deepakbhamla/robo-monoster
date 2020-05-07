import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search/search.component'
import {Footer} from './components/footer/footer.component'

class App extends React.Component {
  constructor(props) {
      super(props)
  
      this.state = {
       monstrs : [],
       searchField: ''  
      }
  }
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monstrs : users}))
  }
  render() {
      const {monstrs, searchField } = this.state;
      const flterMonstr = monstrs.filter(monstr => monstr.name.toLowerCase().includes(searchField.toLowerCase()))
      return (
          <div className='App'>
                <SearchBox
                 handleChange= { e => this.setState({ searchField : e.target.value })}
                 placeholder='search robot'  
                 />
                  <CardList monstrs={flterMonstr}/>
                  <Footer/>
          </div>
      )
  }
}

export default App
