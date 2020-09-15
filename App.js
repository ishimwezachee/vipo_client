import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Separator from './src/components/separator';

const App = () => {
	return (
		<View>
			<Text>Hello </Text>
			<Separator style={styles.separator} />
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	separator: {
		borderBottomColor: 'black'
	}
});
