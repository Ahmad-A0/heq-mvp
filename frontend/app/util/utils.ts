import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';
import { Alert } from 'react-native';

export const copyToClipboard = async (
    textToCopy: string,
    alert: boolean = true
) => {
    await Clipboard.setStringAsync(textToCopy);
    if (alert) {
        Toast.show({
            type: 'success',
            text1: 'Copied to clipboard',
            text2: textToCopy,
        });
    }
};
