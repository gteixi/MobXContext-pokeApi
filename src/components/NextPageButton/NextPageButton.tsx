import React from "react"
import { Pressable, Text, View } from "react-native"
import { INextPageButtonProps } from "../../types/interfaces"

import styles from "./NextPageButton.styles"

export default function NextPageButton({ OnPress }: INextPageButtonProps) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={OnPress}>
                <Text style={styles.text}> {">"} </Text>
            </Pressable>
        </View>
    )
}