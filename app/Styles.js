import { StyleSheet } from 'react-native';

export const MagePurple = '#800080';
export const MageGold = '#ffc300'
export const MageGrey = '#ebebeb';
export const BtnHeight = 40;
export const BtnFontSize = 15;
export const BtnFontWeight = 'bold';
export const BtnWidth = 1;

export const MageButtonStyle = StyleSheet.create({
    textColor: {
        color: MageGold
    },
    btn: {
        padding: 10,
        backgroundColor: MagePurple,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: MagePurple,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: BtnHeight
    },
    btnText: {
        textAlign: 'center',
        fontWeight: BtnFontWeight,
        fontSize: BtnFontSize
    }
});

export const MageButtonOutlineStyle = StyleSheet.create({
    textColor: {
        color: MagePurple
    },
    btn: {
        padding: 10,
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: MagePurple,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: BtnHeight
    },
    btnText: {
        textAlign: 'center',
        fontWeight: BtnFontWeight,
        fontSize: BtnFontSize
    }
});

export const MageButtonInvStyle = StyleSheet.create({
    textColor: {
        color: MagePurple,
    },
    btn: {
        padding: 10,
        backgroundColor: MageGold,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: MagePurple,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: BtnHeight
    },
    btnText: {
        textAlign: 'center',
        fontWeight: BtnFontWeight,
        fontSize: BtnFontSize
    }
});
