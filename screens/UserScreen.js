import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    ListItem,
    Text,
    Badge,
    Left,
    Right,
    Center,
    Body,
    Switch,
    Radio,
    Picker,
    Separator
} from "native-base";

export default class UserScreen extends React.Component {
  static navigationOptions = {
         title: 'บัญชีผู้ใช้',
    };
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Content>
                    <Separator bordered noTopBorder />
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#4CDA64" }}>
                                <Icon active name="person" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Username</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#8F8E93" }}>
                                <Icon active name="chatboxes" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>ข้อความ</Text>
                        </Body>
                        <Right>
                            <Badge style={{ backgroundColor: "#FD3C2D" }}>
                                <Text>3</Text>
                            </Badge>
                        </Right>
                    </ListItem>
                    <Separator bordered>
                      <Text>การขนส่ง</Text>
                      </Separator>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#8F8E93" }}>
                                <Icon active name="images" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>การขนส่งทั้งหมด</Text>
                        </Body>
                        <Right>
                            <Badge style={{ backgroundColor: "#FD3C2D" }}>
                                <Text>3</Text>
                            </Badge>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#8F8E93" }}>
                                <Icon active name="images" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>รอการยืนยัน</Text>
                        </Body>
                        <Right>

                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#8F8E93" }}>
                                <Icon active name="images" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>ยืนยันการรับของ</Text>
                        </Body>
                        <Right>

                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#8F8E93" }}>
                                <Icon active name="images" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>รับของแล้ว</Text>
                        </Body>
                        <Right>
                            <Badge style={{ backgroundColor: "#FD3C2D" }}>
                                <Text>2</Text>
                            </Badge>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#8F8E93" }}>
                                <Icon active name="home" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>ส่งของแล้ว</Text>
                        </Body>
                        <Right>

                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#FD3C2D" }}>
                                <Icon active name="close" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>ยกเลิกงาน</Text>
                        </Body>
                        <Right>
                            <Badge style={{ backgroundColor: "#FD3C2D" }}>
                                <Text>1</Text>
                            </Badge>
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        );
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
};
