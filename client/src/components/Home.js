import React, { Component } from 'react';
import { Header, Grid, Container, Card, Input, Button } from 'semantic-ui-react';
import axios from 'axios';
import swapi from 'swapi-node';
// import Swapi from 'swapi';
// import People from './People';

class Home extends Component {
  state = { people: [], visible: [], search: '', person: '' }

  componentDidMount() {
    fetch('http://swapi.co/api/people/?page=1')
      .then( res=> res.json() )
      .then( people => {
        this.setState({ people: people.results})
      } )
  }

  findPeople = (e) => {
    e.preventDefault();
    // const { dispatch } = this.props;

    axios.get("http://swapi.co/api/people/?page=1")
      .then( res => {
        debugger
        const { data } = res;
        this.setState({ people: data })
      })
      .catch( res => {
        alert('Error Finding Person', 'error');
    });
  }

  findPageOfPeople = (e) => {
    swapi.get('http://swapi.co/api/people/?page=2')
      .then((result) => {
      console.log(result);
    });
  }

  render() {
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as="h2" textAlign="center">Search</Header>
            <Input
              value={this.state.search}
              onChange={this.handleChange}
              icon={{ name: 'search', circular: true }}
              placeholder="Search..."
            />
            <hr />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            {/* <People people={this.state.visible} /> */}
            {/* {Swapi.get_person} */}
            {/* {this.findPageOfPeople} */}
            {/* {
              swapi.get('http://swapi.co/api/people/?page=2')
                .then((result) => {
                console.log(result);
              });
            } */}
            {this.findPeople}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Home;
