import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = (props) => {
	return <View style={{ ...styles.line, ...props.style }} />;
};

const styles = StyleSheet.create({
	line: {
		borderBottomWidth: 1
	}
});

export default Separator;
