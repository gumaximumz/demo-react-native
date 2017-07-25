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

class AddJobPostingScreen3 extends React.Component {
    static navigationOptions = {
        title: 'รายละเอียดเพิ่มเติม',
    };

    constructor(props) {
        super(props)
        this.state = {
            jobType: props.navigation.state.params.jobType,
            carType: props.navigation.state.params.carType,
            source: props.navigation.state.params.source,
            destination: props.navigation.state.params.destination,
            startDate: 'เลือกวันที่',
            startTime: 'เลือกเวลา',
            endDate: 'เลือกวันที่',
            endTime: 'เลือกเวลา',
        }
        console.log(this.state)
    }


    _showStartDatePicker = () => this.setState({ isStartDatePickerVisible: true });

    _hideStartDatePicker = () => this.setState({ isStartDatePickerVisible: false });

    _handleStartDate = (date) => {
        console.log(date)
        let startDate = moment(new Date(date)).format('DD/MM/YYYY')
        this.setState({ startDate: startDate })
        console.log(this.state)
        this._hideStartDatePicker()
    }


    _showStartTimePicker = () => this.setState({ isStartTimePickerVisible: true });

    _hideStartTimePicker = () => this.setState({ isStartTimePickerVisible: false });

    _handleStartTime = (time) => {
        console.log(time)
        let startTime = moment(new Date(time)).format('HH:mm')
        this.setState({ startTime: startTime })
        console.log(this.state)
        this._hideStartTimePicker()
    }


    _showEndDatePicker = () => this.setState({ isEndDatePickerVisible: true });

    _hideEndDatePicker = () => this.setState({ isEndDatePickerVisible: false });

    _handleEndDate = (date) => {
        console.log(date)
        let EndDate = moment(new Date(date)).format('DD/MM/YYYY')
        this.setState({ endDate: EndDate })
        console.log(this.state)
        this._hideEndDatePicker()
    };

    _showEndTimePicker = () => this.setState({ isEndTimePickerVisible: true });

    _hideEndTimePicker = () => this.setState({ isEndTimePickerVisible: false });

    _handleEndTime = (time) => {
        console.log(time)
        let endTime = moment(new Date(time)).format('HH:mm')
        this.setState({ endTime: endTime })
        console.log(this.state)
        this._hideEndTimePicker()
    }

    render() {
        const { navigate } = this.props.navigation

        return (
            <Container style={styles.container}>
                <Content>
                    <Text />
                    <H3 style={styles.head}>วัน/เวลา ที่ถึง</H3>
                    <Form>
                        <Item>
                            <Label>ต้นทาง</Label>
                            <Button iconRight transparent onPress={this._showStartDatePicker}>
                                <Text>{this.state.startDate}</Text>
                                <Icon name='arrow-down' />
                            </Button>
                            <DateTimePicker
                                isVisible={this.state.isStartDatePickerVisible}
                                onConfirm={this._handleStartDate}
                                onCancel={this._hideStartDatePicker}
                            />
                            <Button iconRight transparent onPress={this._showStartTimePicker}>
                                <Text>{this.state.startTime}</Text>
                                <Icon name='arrow-down' />
                            </Button>
                            <DateTimePicker
                                isVisible={this.state.isStartTimePickerVisible}
                                onConfirm={this._handleStartTime}
                                onCancel={this._hideStartTimePicker}
                                mode='time'
                            />
                        </Item>
                        <Item>
                            <Label>ปลายทาง</Label>
                            <Button iconRight transparent onPress={this._showEndDatePicker}>
                                <Text>{this.state.endDate}</Text>
                                <Icon name='arrow-down' />
                            </Button>
                            <DateTimePicker
                                isVisible={this.state.isEndDatePickerVisible}
                                onConfirm={this._handleEndDate}
                                onCancel={this._hideEndDatePicker}
                            />
                            <Button iconRight transparent onPress={this._showEndTimePicker}>
                                <Text>{this.state.endTime}</Text>
                                <Icon name='arrow-down' />
                            </Button>
                            <DateTimePicker
                                isVisible={this.state.isEndTimePickerVisible}
                                onConfirm={this._handleEndTime}
                                onCancel={this._hideEndTimePicker}
                                mode='time'
                            />
                        </Item>
                    </Form>
                    <Text />
                    <H3 style={styles.head}>ช่วงราคา</H3>
                    <Form>
                        <Item>
                            <Label>เริ่มต้น</Label>
                            <Input
                                placeholder='บาท'
                                onChangeText={(text) => this.setState({ startPrice: text })}
                                value={this.state.startPrice} />
                        </Item>
                        <Item>
                            <Label>ถึง</Label>
                            <Input
                                placeholder='บาท'
                                onChangeText={(text) => this.setState({ endPrice: text })}
                                value={this.state.endPrice} />
                        </Item>
                    </Form>
                    <H3 style={styles.head}>สิ่งของที่จะขน</H3>
                    <Form>
                        <Item>
                            <Label>สิ่งของ</Label>
                            <Input
                                onChangeText={(text) => this.setState({ order: text })}
                                value={this.state.order} />
                        </Item>
                        <Item>
                            <Label>ขนาด</Label>
                            <Input
                                placeholder='ลบ.ซม.'
                                onChangeText={(text) => this.setState({ size: text })}
                                value={this.state.size} />
                        </Item>
                        <Item>
                            <Label>น้ำหนัก</Label>
                            <Input
                                placeholder='กก.'
                                onChangeText={(text) => this.setState({ weight: text })}
                                value={this.state.weight} />
                        </Item>
                    </Form>
                    <Text />

                    <Text style={{ paddingTop: 50 }} />
                    <Button rounded block
                        style={{ backgroundColor: "#80C67D" }}
                        onPress={() =>
                            navigate('AddJobPost5', this.state)
                        }>
                        <H3 style={{ color: "#fff" }}>{this.state.startDate || this.state.endTime ? 'ถัดไป' : 'ข้าม'}</H3>
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

export default AddJobPostingScreen3