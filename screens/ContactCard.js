import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeGenerator = () => {
  const [vCardData, setVCardData] = useState('');
  const [showGenerateButton, setShowGenerateButton] = useState(true);

  const generateVCardQRCode = () => {
    // Replace with your vCard data in the following format
    const vCard = `BEGIN:VCARD
VERSION:4.0
FN:  
N: My Test
TEL;TYPE=mobile:555-505-5555
EMAIL;TYPE=work:mtest@uat.edu
END:VCARD`;

    setVCardData(vCard);
    setShowGenerateButton(false);
  };

  const clearScreen = () => {
    setVCardData('');
    setShowGenerateButton(true);
  };

  return (
    <View style={styles.container}>
      {vCardData ? (
        <View>
          <QRCode value={vCardData} size={200} />
          <Text style={styles.qrText}>Scan this  Code to add contact</Text>
          
            <TouchableOpacity onPress={clearScreen} style={styles.generateButton}>
              <Text style={styles.generateButtonText}>Clear QR Code</Text>
            </TouchableOpacity>
          
        </View>
      ) : (
        <View>
          <Text style={styles.infoText}>
            Generate a vCard QR Code to share contact information.
          </Text>
          {showGenerateButton && (
            <TouchableOpacity onPress={generateVCardQRCode} style={styles.generateButton}>
              <Text style={styles.generateButtonText}>Generate vCard QR Code</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrText: {
    marginTop: 10,
    fontSize: 16,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  generateButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  generateButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
});

export default QRCodeGenerator;
