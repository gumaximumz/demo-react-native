import React from 'react';

import { Animated } from 'react-native';

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


class AddJobPostingScreen3 extends React.Component {
    static navigationOptions = {
        title: 'ต้นทาง-ปลายทาง',
    };
    colNumber = 3;


    constructor(props) {
        super(props)
        this.state = {
            jobType: props.navigation.state.params.jobType,
            carType: props.navigation.state.params.carType,
            source: {
                latitude: 13.903142,
                longitude: 100.519010
            },
            destination: {
                latitude: 15.903142,
                longitude: 99.519010
            }
        }
        console.log(this.state)
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {
        const { navigate } = this.props.navigation
        console.log('render');
        return (
            <Container style={styles.container}>
                <Content>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 13.903142,
                            longitude: 100.519010
                        }}
                    >
                        <MapView.Marker.Animated
                            coordinate={this.state.source}
                        />
                        <MapView.Marker.Animated
                            coordinate={this.state.destination}
                        />
                    </MapView>
                    <Form>
                        <Item floatingLabel>
                            <Label>ต้นทาง</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>ปลายทาง</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Text style={{ borderTopWidth: 25 }} />
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
    }
};

export default AddJobPostingScreen3