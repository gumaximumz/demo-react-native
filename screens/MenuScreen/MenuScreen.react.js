import React from "react";

import {
    Platform,
    ScrollView,
    StyleSheet
} from "react-native";

import { JobPostingMockData } from '../../mock/JobPosting.mocked.model'

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

const Item = Picker.Item;

class MenuScreen extends React.Component {
    static navigationOptions = {
        title: 'เพิ่มเติม',
    };
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    onValueChange(value) {
        this.setState({
            selected1: value
        });
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <Container style={styles.container}>
                <Content>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="globe" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>เปลี่ยนภาษา</Text>
                        </Body>
                        <Right>
                            <Text>ไทย</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="book" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>คู่มือการใช้งาน</Text>
                        </Body>
                        <Right>

                        </Right>
                    </ListItem>
                    <Separator bordered />
                    <ListItem>
                        <Body style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#FD3C2D' }}>ออกจากระบบ</Text>
                        </Body>
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

export default MenuScreen;
