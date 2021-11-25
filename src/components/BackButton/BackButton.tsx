import React from "react"
import { Pressable, Text, View } from "react-native"
import { IBackButtonProps } from "../../types/interfaces"

import styles from "./BackButton.styles"

export default function BackButton({ OnPress }: IBackButtonProps) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={OnPress}>
                <Text style={styles.text}>Back</Text>
            </Pressable>
        </View>
    )
}