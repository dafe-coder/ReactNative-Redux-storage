import React, { useCallback, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { AppNavigation } from './src/navigation/AppNavigation'
SplashScreen.preventAutoHideAsync()

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false)

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync({
					'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
					'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
				})
				await new Promise((resolve) => setTimeout(resolve, 2000))
			} catch (e) {
				console.warn(e)
			} finally {
				setAppIsReady(true)
			}
		}

		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
		return null
	}

	return <AppNavigation onLayout={onLayoutRootView} />
}
