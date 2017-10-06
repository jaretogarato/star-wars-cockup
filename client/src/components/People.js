import React from 'react';
import { List, Image } from 'semantic-ui-react';

const People = ({ people }) => (
  <List divided relaxed>
    { people.map( people =>
        <List.Item key={person.id}>
          <List.Content>
            <List.Header>{person.user.name}</List.Header>
            <List.Content>{person.text}</List.Content>

          </List.Content>
        </List.Item>
      )
    }
  </List>
)

export default People;
