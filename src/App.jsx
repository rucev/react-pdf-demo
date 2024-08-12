import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf, Image, PDFViewer } from '@react-pdf/renderer';

const MyPdfDocument = () => (
  <Document>
    <Page style={styles.body}>
      <View style={styles.section}>
        <Text style={styles.title}>Hello, Jack!</Text>
        <Text>This is a sample PDF document created with react-pdf. You can download it!</Text>
        <Image
          style={styles.image}
          src="/char.jpg"
        />
        <Text>A Wild Charmander Appears!</Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
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

const App = () => {

  return (
    <main>
      <h1>REACT PDF</h1>
      <PDFViewer width="100%" height="600">
        <MyPdfDocument />
      </PDFViewer>
    </main>
  );
};

export default App;