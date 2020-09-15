import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<View style={{ ...styles.button, ...props.style }}>
				<Text style={{ padding: 40 }}>orders</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#001f3f'
	}
});

export default Button;
