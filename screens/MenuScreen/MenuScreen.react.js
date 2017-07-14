import React from "react";

import {
    Platform,
    ScrollView,
    StyleSheet
} from "react-native";

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
        header: null,
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

    onValueChange(value) {
        this.setState({
            selected1: value
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Header>
                    <Body>
                        <Title>เมนู</Title>
                    </Body>
                    <Right />
                </Header>

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

                    <Separator bordered />
                    <ListItem itemDivider>
                        <Text>ประกาศงาน</Text>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#8F8E93" }}>
                                <Icon active name="images" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>ขนส่งทั่วไป</Text>
                        </Body>
                        <Right>
                            <Badge style={{ backgroundColor: "#FD3C2D" }}>
                                <Text>2</Text>
                            </Badge>
                        </Right>
                    </ListItem>
                    <ListItem icon last
                        onPress={() =>
                            navigate('AddJobPost')
                        }>
                        <Left>
                            <Button style={{ backgroundColor: "#FD3C2D" }}>
                                <Icon active name="bullhorn" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>ประกาศงานใหม่</Text>
                        </Body>
                    </ListItem>
                    <Separator bordered />
                    <ListItem itemDivider>
                        <Text>การขนส่ง</Text>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#8F8E93" }}>
                                <Icon active name="arrow-forward" />
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
                                <Icon active name="checkbox-blank-outline" />
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
                                <Icon active name="checkbox-marked-outline" />
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
                                <Icon active name="truck" />
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
                    <Separator bordered />
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
                            <Badge style={{ backgroundColor: "#FD3C2D" }}>
                                <Text>2</Text>
                            </Badge>
                        </Right>
                    </ListItem>
                    <Separator bordered />
                    <ListItem>
                        <Body>
                            <Text>ออกจากระบบ</Text>
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
