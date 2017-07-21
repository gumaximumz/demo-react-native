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
    Thumbnail,
    Input,
    Item
} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

class AddJobPostingScreen extends React.Component {
    static navigationOptions = {
        title: 'สร้างประกาศงาน',
    };
    colNumber = 3;


    constructor(props) {
        super(props);
        this.state = {
            jobType: ''
        }
    }

    render() {
        const { navigate } = this.props.navigation
        let lists = ['ขนของทั่วไป', 'ขนสัตว์เลี้ยง', 'ขนอาหารสำเร็จ', 'ขนอาหารดิบ', 'ขนอาหารเครืองดื่ม', 'ขนสารเคมี', 'ขนวัตถุอันตราย', 'ขนวัตถุไวไฟ']
        let row = +(lists.length / this.colNumber).toFixed(0)
        let elementRow = [row];
        for (let i = 0; i < row; i++) {
            let listSubSet = lists.slice(i * this.colNumber, (i + 1) * this.colNumber);
            let elementCol = listSubSet.map((s, k) => {
                return (
                    <Col>
                        <Button transparent
                            id={k}
                            style={styles.image}
                            onPress={() =>
                                navigate('AddJobPost2', s)
                            }>
                            <Thumbnail square large
                                size={80}
                                source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                        </Button>
                        <Text style={{ textAlign: 'center' }}>{s}</Text>
                    </Col>)
            })
            if (elementCol.length < this.colNumber) {
                let plusColNumber = this.colNumber - elementCol.length
                for (let i = 0; i < plusColNumber; i++)
                    elementCol.push(<Col></Col>)
            }
            elementRow[i] = elementCol
        }

        let serviceItems = elementRow.map((s, k) => {
            return (<Row id={k}>{s}</Row>)
        });

        console.log('render');
        return (
            <Container style={styles.container}>
                <Content>
                    <H1 style={{ lineHeight: 30, textAlign: 'center' }}>เลือกประเภทงานสำหรับประกาศของคุณ{"\n"}</H1>
                    <Text style={{ lineHeight: 20, textAlign: 'center' }}>การเลือกประเภทงานที่ถูกต้องจะช่วยให้ประกาศของคุณปรากฎในผลการค้นหา</Text>

                    <Text />

                    <Grid >
                        {serviceItems}
                    </Grid>
                    <Text />
                    <Item>
                        <Input placeholder='อื่นๆ ระบุ...'
                            onChangeText={(text) => this.setState({ jobType: text })}
                            value={this.state.jobType}
                        />
                    </Item>
                    <Text />
                    <Button rounded block
                        style={{ backgroundColor: "#80C67D" }}
                        onPress={() =>
                            navigate('AddJobPost2', this.state.jobType)
                        }>
                        <H3 style={{ color: "#fff" }}>ถัดไป</H3>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = {
    header: {
        height: 200,
        backgroundColor: "#FFF",
    },

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
        alignSelf: "center",
    },
    lineSmall: {
        lineheight: '150%'
    },
    lineBig: {
        lineheight: '200%'
    }
};

export default AddJobPostingScreen;