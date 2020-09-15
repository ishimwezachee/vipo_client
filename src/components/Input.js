import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Input = (props) => {
	return (
		<View>
			<TextInput
				style={styles.input}
				onChange={() => console.log('hello')}
				placeholder={props.placeholder}
				placeholderTextColor="#606b6b"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 40,
		borderBottomColor: '#606b6b',
		borderBottomWidth: 1,
		marginHorizontal: 20,
		fontSize: 14
	}
});

export default Input;
