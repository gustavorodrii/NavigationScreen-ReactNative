import React from "react"
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import TextoCentral from "./components/TextoCentral"
import TelaA from "./views/TelaA"
import TelaB from "./views/TelaB"
import TelaC from "./views/TelaC"
import Stack from "./navegacao/Stack"


export default props => (
    <SafeAreaView style={{flex: 1}}>
        <Stack/>
    </SafeAreaView>
)
