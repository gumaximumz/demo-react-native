import React from 'react';


import AddJobPostingScreen from './AddJobPostingScreen/AddJobPostingScreen.react';

import { JobPostingMockData } from '../mock/JobPosting.mocked.model'

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Item,
  Text,
  Badge,
  Left,
  Right,
  Center,
  Body,
  Switch,
  Radio,
  Picker,
  Separator,
  Input
} from "native-base";

class JobPostingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: "key1",
      results: {
        items: []
      }
    };
  }

  render() {
    const { navigate } = this.props.navigation
    const JobPostings = JobPostingMockData.map((jobPosting, key) => {
      return (
        <ListItem icon id={key}>
          <Left>
            <Button style={{ backgroundColor: "#8F8E93" }}>
              <Icon active name="images" />
            </Button>
          </Left>
          <Body>
            <Text>{jobPosting.jobType}</Text>
          </Body>

        </ListItem>
      )
    })
    return (
      <Container style={styles.container}>
        <Header searchBar
          rounded
          backgroundColor='#80C67D'
          androidStatusBarColor='#80C67D'>

          <Item>
            <Icon name="ios-search" />
            <Input placeholder="ค้นหา" />
            <Icon name="ios-flag" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <ListItem icon last
            onPress={() =>
              navigate('AddJobPost')
            }>
            <Left>
              <Button success>
                <Icon active name="add" />
              </Button>
            </Left>
            <Body>
              <Text>ประกาศงานใหม่</Text>
            </Body>
          </ListItem>
          <Separator bordered>
            <Text>ประกาศงานของคุณ</Text>
          </Separator>
          {JobPostings}
        </Content>
      </Container>

    )
  }
}

const styles = {
  container: {
    backgroundColor: "#FFF"
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  }
}

export default JobPostingScreen;
