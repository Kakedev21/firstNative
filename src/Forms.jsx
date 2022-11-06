import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Button,
} from "react-native";
import SelectList from "react-native-dropdown-select-list";

const Forms = () => {
  const [isChecked, setChecked] = useState(false);
  const [selected, setSelected] = useState("");
  const [validForm, setValidForm] = useState(false);
  const [emptyForm, setEmptyForm] = useState(false);
  const [dbutton, setdbutton] = useState(true);

  const [form, setformData] = useState({
    name: String,
    age: Number,
    address: String,
    Employed: Boolean,
    job: String,
    addJob: String,
  });

  const data = [
    { key: "1", value: "Web Developer" },
    { key: "2", value: "Software Engineer" },
    { key: "3", value: "IT Specialist" },
  ];

  const jobButton = () => {
    const key = data.length + 1;
    const stringKey = key.toString();
    data.push({ key: stringKey, value: form.addJob });
    setformData({
      name: String,
      age: Number,
      address: String,
      Employed: Boolean,
      job: String,
      addJob: String,
    });
  };

  const submitButton = () => {
    if (
      /\d/.test(form.name) ||
      form.age < 18 ||
      /^[A-Za-z0-9]*$/.test(form.address)
    ) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  };

  return (
    <View style={styles.formContainer}>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          error={true}
          value={form.name}
          autoCapitalize="word"
          onChangeText={(value) => setformData({ ...form, name: value })}
        />
        {/\d/.test(form.name) ? (
          <Text style={{ color: "red" }}>Name contains no Number</Text>
        ) : (
          false
        )}
        <TextInput
          style={styles.textInput}
          placeholder="Age"
          value={form.age}
          onChangeText={(value) => setformData({ ...form, age: value })}
          keyboardType="number-pad"
        />
        {form.age < 18 ? (
          <Text style={{ color: "red" }}>Age must 18 above</Text>
        ) : (
          false
        )}
        <TextInput
          style={styles.textInput}
          placeholder="Address"
          value={form.address}
          multiline={true}
          onChangeText={(value) => setformData({ ...form, address: value })}
        />
        {/^[A-Za-z0-9]*$/.test(form.address) ? (
          <Text style={{ color: "red" }}>Address Must be a string</Text>
        ) : (
          false
        )}
      </View>
      <View>
        <Text>Is Employed?</Text>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "green" : undefined}
        />
      </View>
      {isChecked ? (
        <>
          <SelectList
            setSelected={setSelected}
            data={data}
            search={false}
            placeholder="List of Jobs"
          />
          <TextInput
            placeholder="Custom Job"
            style={styles.textInput}
            value={form.addJob}
            onChangeText={(value) => setformData({ ...form, addJob: value })}
          />
          {/\d/.test(form.addJob) ? <Text>Must be a string</Text> : false}
          <Button title="add Job" onPress={jobButton} />
        </>
      ) : (
        false
      )}
      <View style={{ marginTop: 25 }}>
        <Button title="Submit" onPress={submitButton} />
        {validForm ? (
          <Text>Form Successfully Submitted</Text>
        ) : (
          <Text>
            Please check if the input is valid and make sure to fill up all
            forms
          </Text>
        )}
        {emptyForm ? <Text>Please input all fields</Text> : false}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default Forms;
