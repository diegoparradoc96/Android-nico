import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { AppTheme } from '../../context/GlobalProvider';


const CustomHeader = ({ title }: { title: string }) => {
    const theme = useTheme<AppTheme>();


    return (
        <View style={{ ...styles.header, backgroundColor: theme.colors.neutral_1 }}>
            <Text style={{ ...styles.title, color: theme.colors.primary_7 }}> {title} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
    },
});

export { CustomHeader };