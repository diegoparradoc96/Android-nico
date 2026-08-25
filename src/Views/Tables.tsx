import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { AppTheme } from '../context';
import { TableCard } from '../components';


export const Tables = () => {
    const theme = useTheme<AppTheme>();

    const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /**
    * Componente visual que informa los estado o modos para una tabla.
    **/
    const tableModes = () => {
        return (
            <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around', marginVertical: 20, width: '80%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 5, width: 20, height: 20, borderRadius: 100, backgroundColor: "#4cae51" }}></View>
                    <Text style={{ color: theme.colors.neutral_9 }}> Libre </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 5, width: 20, height: 20, borderRadius: 100, backgroundColor: theme.colors.primary_7 }}></View>
                    <Text style={{ color: theme.colors.neutral_9 }}> Ocupada </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 5, width: 20, height: 20, borderRadius: 100, backgroundColor: theme.colors.tertiary_6 }}></View>
                    <Text style={{ color: theme.colors.neutral_9 }}> Limpieza </Text>
                </View>
            </View>
        );
    }

    return (
        <View style={{ ...styles.container, backgroundColor: theme.colors.background }}>
            {tableModes()}
            <FlatList
                data={tables}
                numColumns={2}
                keyExtractor={(item) => item.toString()}
                contentContainerStyle={styles.cardsContainer}
                columnWrapperStyle={styles.cardsRow}
                renderItem={() => (
                    <View style={styles.cardColumn}>
                        <TableCard />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: "black"
    },
    cardsContainer: {
        padding: 16,
    },
    cardsRow: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },

    cardColumn: {
        width: '48%',
    },
});
