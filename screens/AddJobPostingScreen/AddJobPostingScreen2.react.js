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
    H3
} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";


//import Picker from 'react-native-picker'

const Item = Picker.Item;

class AddJobPostingScreen2 extends React.Component {
    static navigationOptions = {
        title: 'สร้างประกาศงาน',
    };
    constructor(props) {
        super(props);
        this.state = {
            job: '',
            car: ''
        }
    }


    onValueChange1(value) {
        this.setState({
            job: value
        });
    }

    render() {
        let pickerData1 = ['รถจักรยานยนต์', 'รถเก๋ง', 'รถตู้', 'รถกะบะ', 'รถกะบะแคป', 'รถกะบะ4ประตู', 'รถบรรทุก6ล้อ', 'รถบรรทุก8ล้อ', 'รถบรรทุก10ล้อ'];

        let serviceItems = pickerData1.map((s, i) => {
            return <Item key={i} value={s} label={s} />
        });

        console.log('render');
        return (
            <Container style={styles.container}>
                <Content>
                    <Body style={{ alignItems: 'center' }}>
                        <Grid>
                            <Row>
                                <Col>
                                    <Thumbnail style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                                </Col>
                                <Col>
                                    <Thumbnail style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                                </Col>
                                <Col>
                                    <Thumbnail style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                                </Col>
                            </Row>
                        </Grid>
                    </Body>

                </Content>
                <Footer>
                    <FooterTab>
                        <Button rounded block success>
                            <H3>ถัดไป</H3>
                        </Button>
                    </FooterTab>
                </Footer>
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
        height: 300,
        width: null,
        flex: 1
    }
};

export default AddJobPostingScreen2;