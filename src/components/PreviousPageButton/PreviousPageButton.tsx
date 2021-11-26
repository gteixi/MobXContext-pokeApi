import React from "react"
import { Pressable, Text, View } from "react-native"
import { IPreviousPageButtonProps } from "../../types/interfaces"

import styles from "./PreviousPageButton.styles"

export default function PreviousPageButton({ OnPress }: IPreviousPageButtonProps) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={OnPress}>
                <Text style={styles.text}> {"<"} </Text>
            </Pressable>
        </View>
    )
}