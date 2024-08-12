import { StyleSheet } from "@react-pdf/renderer";

const MyStyles = StyleSheet.create({
    body: {
        padding: 10,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orangered',
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
        marginVertical: 20,
        marginHorizontal: 120,
    },
});

export default MyStyles