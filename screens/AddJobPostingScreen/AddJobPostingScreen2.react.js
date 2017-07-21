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


class AddJobPostingScreen2 extends React.Component {
    static navigationOptions = {
        title: 'เลือกประเภทรถ',
    };
    colNumber = 3;


    constructor(props) {
        super(props);
        this.state = {
            jobType: props.navigation.state.params,
            carType: ''
        }
    }


    onValueChange(navigate, value) {
        this.setState({
            carType: value
        });
        navigate('AddJobPost3', this.state)
    }

    render() {
        console.log(this.state.jobType)
        const { navigate } = this.props.navigation
        let lists = ['รถจักรยานยนต์', 'รถเก๋ง', 'รถตู้', 'รถกะบะ', 'รถกะบะแคป', 'รถกะบะ4ประตู', 'รถบรรทุก6ล้อ', 'รถบรรทุก8ล้อ', 'รถบรรทุก10ล้อ'];

        let row = +(lists.length / this.colNumber).toFixed(0)
        let elementRow = [row];
        for (let i = 0; i < row; i++) {
            let listSubSet = lists.slice(i * this.colNumber, (i + 1) * this.colNumber);
            let elementCol = listSubSet.map((s) => {
                return (
                    <Col>
                        <Button transparent
                            style={styles.image}
                            onPress={() =>
                                this.onValueChange(navigate, s)
                            }>
                            <Thumbnail square large source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
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

        let serviceItems = elementRow.map((s) => {
            return (<Row>{s}</Row>)
        });

        console.log('render');
        return (
            <Container style={styles.container}>
                <Content>
                    <Body>
                        <H2 style={{ lineHeight: 30, textAlign: 'center' }}>เลือกประเภทรถสำหรับประกาศของคุณ</H2>
                    </Body>
                    <Text />
                    <Grid >
                        {serviceItems}
                    </Grid>
                    <Text/>
                    <Item>
                        <Input placeholder='อื่นๆ ระบุ...' 
                        onChangeText={(text) => this.setState({carType: text})} 
                        value={this.state.carType}
                        />
                    </Item>
                    <Text/>
                    <Button rounded block
                        style={{ backgroundColor: "#80C67D" }}
                        onPress={() =>
                            navigate('AddJobPost3', this.state)
                        }>
                        <H3 style={{ color: "#fff" }}>{this.state.carType != '' ? 'ถัดไป' : 'ข้าม'}</H3>
                    </Button>
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
        alignSelf: "center",
    }
};

export default AddJobPostingScreen2;