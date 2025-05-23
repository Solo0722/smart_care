import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

type Props = {
    width?: number
    height?: number,
    fillColor?: string,
    dotColor?: string,
}

const Logo = (props: Props) => {
    const { width, height, fillColor, dotColor } = props
    return (
        <Svg width={width ?? 65} height={height ?? 64} viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="0.5" width="64" height="64" rx="32" fill={fillColor ?? "#FFF0EB"} />
            <Path d="M32.5 36C36.366 36 39.5 39.134 39.5 43C39.5 46.866 36.366 50 32.5 50C28.634 50 25.5 46.866 25.5 43C25.5 39.134 28.634 36 32.5 36Z" fill={dotColor ?? "#FE814B"} />
            <Path d="M21.5 25C25.366 25 28.5 28.134 28.5 32C28.5 35.866 25.366 39 21.5 39C17.634 39 14.5 35.866 14.5 32C14.5 28.134 17.634 25 21.5 25Z" fill={dotColor ?? "#FE814B"} />
            <Path d="M32.5 14C36.366 14 39.5 17.134 39.5 21C39.5 24.866 36.366 28 32.5 28C28.634 28 25.5 24.866 25.5 21C25.5 17.134 28.634 14 32.5 14Z" fill={dotColor ?? "#FE814B"} />
            <Path d="M43.5 25C47.366 25 50.5 28.134 50.5 32C50.5 35.866 47.366 39 43.5 39C39.634 39 36.5 35.866 36.5 32C36.5 28.134 39.634 25 43.5 25Z" fill={dotColor ?? "#FE814B"} />
        </Svg>

    )
}

export default Logo

const styles = StyleSheet.create({})