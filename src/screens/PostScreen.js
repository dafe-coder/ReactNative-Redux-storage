import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const PostScreen = () => {
	return (
		<View style={styles.center}>
			<Text>Post screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
	},
})
