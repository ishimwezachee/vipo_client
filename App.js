import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Separator from './src/components/separator';
import Card from './src/components/Card';
import Input from './src/components/Input';
import Button from './src/components/Button';
const App = () => {
	return (
		<View>
			<Button onPress={() => console.log('hello rwanda')} />
		</View>
	);
};

export default App;

const styles = StyleSheet.create({});
