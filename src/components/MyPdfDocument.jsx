import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import MyStyles from './MyStyles';

const MyPdfDocument = () => (
    <Document>
        <Page style={MyStyles.body}>
            <View style={MyStyles.section}>
                <Text style={MyStyles.title}>Hello, Jack!</Text>
                <Text>This is a sample PDF document created with react-pdf. You can download it!</Text>
                <Image
                    style={MyStyles.image}
                    src="/char.jpg"
                />
                <Text>A Wild Charmander Appears!</Text>
            </View>
        </Page>
    </Document>
);

export default MyPdfDocument