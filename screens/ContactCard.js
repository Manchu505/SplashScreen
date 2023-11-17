import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeGenerator = () => {
  const [vCardData, setVCardData] = useState('');
  const [showGenerateButton, setShowGenerateButton] = useState(true);
  const [lname, setLName] = useState('');
  const [fname, setFName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateForm();
  }, [lname, email]);

  const validateForm = () => {
    let errors = {};

    if (!lname) {
      errors.lname = 'Name is required.';
    }

    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }

    setErrors(errors);
  };

  const generateVCardQRCode = () => {
    if (!lname || !fname || !organization || !email || !tel || !street || !city || !state || !zip) return;

    const vCardAdmin = `BEGIN:VCARD
VERSION:4.0
FN:
N:${lname};${fname}
ORG:${organization}
TEL;TYPE=mobile:${tel}
EMAIL;TYPE=work:${email}
ADR;TYPE=wor:;;${street};${city};${state};${zip}
END:VCARD`;

    setVCardData(vCardAdmin);
    setShowGenerateButton(false);

  };

  const clearScreen = () => {
    setVCardData('');
    setShowGenerateButton(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.errorText}>{errors.lname}</Text>
      <TextInput
        style={styles.input}
        value={fname}
        placeholder="Enter your first name:"
        onChangeText={setFName}
      /><TextInput
        style={styles.input}
        value={lname}
        placeholder="Enter your last name:"
        onChangeText={setLName}
      />

      <TextInput
        style={styles.input}
        value={organization}
        placeholder="Enter your organization:"
        onChangeText={setOrganization}
      />
      <Text style={styles.errorText}>{errors.email}</Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Enter your email:"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        value={tel}
        placeholder="Enter your work telephone:"
        onChangeText={setTel}
      />
      <TextInput
        style={styles.input}
        value={street}
        placeholder="Enter your work street:"
        onChangeText={setStreet}
      />
      <TextInput
        style={styles.input}
        value={city}
        placeholder="Enter your work city:"
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        value={state}
        placeholder="Enter your work state:"
        onChangeText={setState}
      />
      <TextInput
        style={styles.input}
        value={zip}
        placeholder="Enter your work zip:"
        onChangeText={setZip}
      />
      {vCardData ? (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 5 }}>
          <QRCode value={vCardData} size={200} />
          <Text style={styles.qrText}>Scan this Code to add contact</Text>
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
            <TouchableOpacity
              onPress={generateVCardQRCode}
              style={styles.generateButton}
            >
              <Text style={styles.generateButtonText}>
                Generate vCard QR Code
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#eee',
    padding: 16,
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
    textAlign: 'center',
  },
  input: {
    fontSize: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 8,
  },
});

export default QRCodeGenerator;
