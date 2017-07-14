import React from 'react';

import {
    Container,
    Item,
    Content,
    Input,
    ListItem
} from "native-base";

import Picker from 'react-native-picker'

class AddJobPostingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: '',
            car: ''
        }
    }

    showPicker() {
        console.log('showPicker');
        let data = [];
        for (var i = 0; i < 100; i++) {
            data.push(i);
        }
        Picker.init({
            pickerData: data,
            selectedValue: [59],
            onPickerConfirm: data => {
                console.log(data);
            },
            onPickerCancel: data => {
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    }

    render() {
        let pickerData1 = ['เลือกประเภทงาน', 'ขนของทั่วไป', 'ขนสัตว์เลี้ยง', 'ขนอาหารสำเร็จ', 'ขนอาหารดิบ', 'ขนอาหารเครืองดื่ม'];
        let selectedValue1 = pickerData1[0];
        let pickerData2 = ['เลือกประเภทรถ', 'รถจักรยานยนต์', 'รถเก๋ง', 'รถตู้', 'รถกะบะ', 'รถกะบะแคป', 'รถกะบะ4ประตู', 'รถบรรทุก6ล้อ', 'รถบรรทุก8ล้อ', 'รถบรรทุก10ล้อ'];
        let selectedValue2 = pickerData2[0];
        
        console.log('render');
        return (
            <Container style={styles.container}>
                <Content>
                    <ListItem onPress={() => this.showPicker()}>
                        <Item>
                            <Input placeholder='เลือกประเภทงาน' />
                        </Item>
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

export default AddJobPostingScreen;