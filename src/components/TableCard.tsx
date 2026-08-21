import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableCard: FC = () => {
    return (
        <View style={styles.card}>
            <View style={styles.topBorder}></View>
            <View style={styles.cardContent}>
                <Text style={styles.cardText}>1</Text>
                <Text style={{ color: "#4cae51" }}>Libre</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        alignItems: 'center',
    },
    topBorder: {
        width: "100%",
        height: 10,
        backgroundColor: '#4cae51',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardContent: {
        padding: 18,
        alignItems: 'center',
    },
    cardText: {
        fontSize: 42,
        fontWeight: 'bold',
    },
});

export { TableCard };