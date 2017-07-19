import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class WallScreen extends React.Component {
    static navigationOptions = {

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
        let data = [{
            date: 'นายเทส บล้าบล้า',
            carType: 'รถกะบะ',
            jobType: 'ขนของทั่วไป',
            tel: '0971868888',
            point: 5,
            price: '1000 - 1500'
        },
        {
            date: 'นายเทส บล้าบล้า',
            carType: 'รถกะบะ',
            jobType: 'ขนของทั่วไป',
            tel: '0971868888',
            point: 4,
            price: '1000 - 1500'
        },
        {
            date: 'นายเทส บล้าบล้า',
            carType: 'รถกะบะ',
            jobType: 'ขนของทั่วไป',
            tel: '0971868888',
            point: 3,
            price: '1000 - 1500'
        },
        {
            date: 'นายเทส บล้าบล้า',
            carType: 'รถกะบะ',
            jobType: 'ขนของทั่วไป',
            tel: '0971868888',
            point: 3,
            price: '1000 - 1500'
        },
        {
            date: 'นายเทส บล้าบล้า',
            carType: 'รถกะบะ',
            jobType: 'ขนของทั่วไป',
            tel: '0971868888',
            point: 3,
            price: '1000 - 1500'
        },
        {
            date: 'นายเทส บล้าบล้า',
            carType: 'รถกะบะ',
            jobType: 'ขนของทั่วไป',
            tel: '0971868888',
            point: 3,
            price: '1000 - 1500'
        },
        {
            date: 'นายเทส บล้าบล้า',
            carType: 'รถกะบะ',
            jobType: 'ขนของทั่วไป',
            tel: '0971868888',
            point: 2,
            price: '1000 - 1500'
        },
        {
            date: 'นายเทส บล้าบล้า',
            carType: 'รถกะบะ',
            jobType: 'ขนของทั่วไป',
            tel: '0971868888',
            point: 1,
            price: '1000 - 1500'
        },
        {
            date: 'นายเทส บล้าบล้า',
            carType: 'รถกะบะ',
            jobType: 'ขนของทั่วไป',
            tel: '0971868888',
            point: 1,
            price: '1000 - 1500'
        },
        {
            date: 'นายเทส บล้าบล้า',
            carType: 'รถกะบะ',
            jobType: 'ขนของทั่วไป',
            tel: '0971868888',
            point: 0,
            price: '1000 - 1500'
        },
        {
            date: 'นายเทส บล้าบล้า',
            carType: 'รถกะบะ',
            jobType: 'ขนของทั่วไป',
            tel: '0971868888',
            point: 0,
            price: '1000 - 1500'
        },
        {
            date: 'นายเทส บล้าบล้า',
            carType: 'รถกะบะ',
            jobType: 'ขนของทั่วไป',
            tel: '0971868888',
            point: 0,
            price: '1000 - 1500'
        }];

        let serviceGrid = data.map((s) => {
            let points = [];
            for (let i = 0; i < 5; i++) {
                if (s.point > i)
                    points[i] = <Icon fontSize={5} active name="star" style={{
                        color: "#ECDC12"
                    }} />
                else
                    points[i] = <Icon fontSize={5} active name="star" />
            }

            return (
                <ListItem avatar>
                    <Left>
                        <Thumbnail style={styles.image} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
                    </Left>
                    <Body>
                        <Grid>
                            <Row>
                                <Col>
                                    <Left>
                                        <Text>ชื่อ-สกุล</Text>
                                        <Text note>ประเภทรถ</Text>
                                        <Text note>ประเภทงาน</Text>
                                        <Text note>เบอร์ติดต่อ</Text>
                                        <Text note>ราคา</Text>
                                        <Row>
                                            {points[0]}{points[1]}{points[2]}{points[3]}{points[4]}
                                        </Row>
                                    </Left>
                                </Col>
                                <Col>
                                    <Right>
                                        <Text>{s.date}</Text>
                                        <Text note>{s.carType}</Text>
                                        <Text note>{s.jobType}</Text>
                                        <Text note>{s.tel}</Text>
                                        <Text note>{s.price}</Text>
                                    </Right>
                                </Col>
                            </Row>
                        </Grid>
                    </Body>
                </ListItem>)
        });
        return (
            <Container>
                <Content>
                    <List>
                        {serviceGrid}
                    </List>
                </Content>
            </Container>

        )

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
        height: 70,
        width: 70
    }
};

export default WallScreen;