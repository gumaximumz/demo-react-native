import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    ListItem,
    Icon,
    Text,
    Right,
    Body,
    Left,
    Picker,
    Form,
    Item as FormItem,
    Card,
    CardItem,
    Footer,
    FooterTab,
    H1,
    H2,
    H3,
    Thumbnail,
    Input,
    Item,
    Label
} from "native-base";

import MapView from 'react-native-maps';

import { Col, Row, Grid } from "react-native-easy-grid";

import DateTimePicker from 'react-native-modal-datetime-picker';

import moment from 'moment'

class AddJobPostingScreen5 extends React.Component {
    static navigationOptions = {
        title: 'สร้างประกาศงาน',
    };

    constructor(props) {
        super(props)
        this.state = props.navigation.state.params

    }

    render() {
        const { navigate } = this.props.navigation

        console.log('render');
        return (
            <Container style={styles.container}>
                <Content>
                    <Text />
                    <Body>
                        <Left>
                            <Text>ประเภทงาน</Text>
                            <Text note>ประเภทรถ</Text>
                            <Text note>ต้นทาง</Text>
                            <Text note>ปลายทาง</Text>
                            <Text note>วัน/เวลา ที่ถึงตันทาง</Text>
                            <Text note>วัน/เวลา ที่ถึงปลายทาง</Text>
                            <Text note>ช่วงราคา</Text>
                            <Text note>สิ่งของที่จะขน</Text>
                            <Text note>ขนาด</Text>
                            <Text note>น้ำหนัก</Text>
                        </Left>
                        <Right>
                            <Text>{this.state.jobType}</Text>
                            <Text note>{this.state.carType}</Text>
                            <Text note>{this.state.source && this.state.source.name}</Text>
                            <Text note>{this.state.destination && this.state.destination.name}</Text>
                            <Text note>{this.state.startDate + ' ' + this.state.startTime}</Text>
                            <Text note>{this.state.endDate + ' ' + this.state.endTime}</Text>
                            <Text note>{this.state.startPrice + ' - ' + this.state.endPrice}</Text>
                            <Text note>{this.state.order}</Text>
                            <Text note>{this.state.size}</Text>
                            <Text note>{this.state.weight}</Text>
                        </Right>
                    </Body>
                    <Text style={{ paddingTop: 50 }} />
                    <Button rounded block
                        style={{ backgroundColor: "#80C67D" }}
                        onPress={() =>
                            console.log('สร้างประกาศงาน')
                        }>
                        <H3 style={{ color: "#fff" }}>สร้างประกาศงาน</H3>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = {
    map: {
        height: 400,
        width: '100%',
    },
    container: {
        backgroundColor: "#FFF",
    },
    center: {
        textAlign: 'center'
    },
    head: {
        paddingTop: 50,
        textAlign: 'center'
    },
    text: {
        alignSelf: "center",
        marginBottom: 7
    },
    mb: {
        marginBottom: 15
    },
    image: {
        height: 100,
        width: 100,
    },
};

export default AddJobPostingScreen5