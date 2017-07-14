import React from 'react';

import {
    Container,
    Text
} from "native-base";

import Picker from 'react-native-picker'

class Add๋JobPostingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: '',
            car: ''
        }
    }

    render() {
        let pickerData1 = ['เลือกประเภทงาน', 'ขนของทั่วไป', 'ขนสัตว์เลี้ยง', 'ขนอาหารสำเร็จ', 'ขนอาหารดิบ', 'ขนอาหารเครืองดื่ม'];
        let selectedValue1 = pickerData1[0];
        let pickerData2 = ['เลือกประเภทรถ', 'รถจักรยานยนต์', 'รถเก๋ง', 'รถตู้', 'รถกะบะ', 'รถกะบะแคป', 'รถกะบะ4ประตู', 'รถบรรทุก6ล้อ', 'รถบรรทุก8ล้อ', 'รถบรรทุก10ล้อ'];
        let selectedValue2 = pickerData2[0];
        return (
            <Container style={styles.container}>
                <Picker
                    style={{
                        height: 300
                    }}
                    showDuration={300}
                    showMask={true}
                    onPickerDone={this.state.job}
                    pickerData={pickerData1}
                    selectedValue={selectedValue1}
                />
                <Picker
                    style={{
                        height: 300
                    }}
                    showDuration={300}
                    showMask={true}
                    onPickerDone={this.state.car}
                    pickerData={pickerData2}
                    selectedValue={selectedValue2}
                />
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

export default Add๋JobPostingScreen;