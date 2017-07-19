import React from 'react';

import { Image } from 'react-native';

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
    Thumbnail
} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";


//import Picker from 'react-native-picker'

const Item = Picker.Item;

class AddJobPostingScreen extends React.Component {
    static navigationOptions = {
        title: 'สร้างประกาศงาน',
    };
    constructor(props) {
        super(props);
        this.state = {
            jobType: ''
        }
    }


    onValueChange1(value) {
        this.setState({
            job: value
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        let pickerData1 = ['ขนของทั่วไป', 'ขนสัตว์เลี้ยง', 'ขนอาหารสำเร็จ', 'ขนอาหารดิบ', 'ขนอาหารเครืองดื่ม'];
        let serviceItems = pickerData1.map((s, i) => {
            return <Item key={i} value={s} label={s} />
        });

        console.log('render');
        return (
            <Container style={styles.container}>
                <Content>
                    <Body style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 25 }}>เลือกประเภทงานสำหรับประกาศของคุณ</Text>
                        <Text>การเลือกประเภทงานที่ถูกต้องจะช่วยให้ประกาศของคุณปรากฎใน</Text>
                        <Text>ผลการค้นหา</Text>
                    </Body>
                    <Grid>
                        <Row>
                            <Col>
                                <Thumbnail style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                                <Text>ขนเครืองใช้ทั่วไป</Text>
                            </Col>
                            <Col>
                                <Thumbnail style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                                <Text>ขนเครืองใช้โรงงาน</Text>
                            </Col>
                            <Col>
                                <Thumbnail style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                                <Text>ขนอาหาร</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Thumbnail onPress={() =>
                                    navigate('AddJobPost2', this.state)
                                } style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                                <Text>ขนเครืองใช้ทั่วไป</Text>
                            </Col>
                            <Col>
                                <Thumbnail onPress={() =>
                                    navigate('AddJobPost2', this.state)
                                } style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                                <Text>ขนเครืองใช้โรงงาน</Text>
                            </Col>
                            <Col>
                                <Thumbnail onPress={() =>
                                    navigate('AddJobPost2', this.state)
                                } style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                                <Text>ขนอาหาร</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Thumbnail onPress={() =>
                                    navigate('AddJobPost2', this.state)
                                } style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                                <Text>ขนเครืองใช้ทั่วไป</Text>
                            </Col>
                            <Col>
                                <Thumbnail onPress={() =>
                                    navigate('AddJobPost2', this.state)
                                } style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                                <Text>ขนเครืองใช้โรงงาน</Text>
                            </Col>
                            <Col>
                                <Thumbnail onPress={() =>
                                    navigate('AddJobPost2', this.state)
                                } style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                                <Text>ขนอาหาร</Text>
                            </Col>
                        </Row>

                    </Grid>

                </Content>
            </Container>
        );
    }
}

const styles = {
    container: {
        backgroundColor: "#FFF",
    },
    center: {
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
        flex: 1
    }
};

export default AddJobPostingScreen;