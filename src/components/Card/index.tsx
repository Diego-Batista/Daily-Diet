import { Typography } from "@components/Typography"
import { FontSizeTitle } from "@components/Typography/types"
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils"
import { ButtonToStaticLeft, ButtonToStaticRight, Container, IconArrowLeft, IconArrowUpRight } from "./styles"

export type TextSize = {
    titleFontSize?: FontSizeTitle 
}

export type ButtonFloatProps = {
    iconPosition?: 'left' | 'right'
}

export type CardColors = {
    bg?: 'gray' | 'green' | 'red'
}

type CardProps = ViewProps & CardColors & TextSize & ButtonFloatProps & {
    title: string
    subtitle: string
    showIconButton?: boolean
    onPress?: () => void
}

export const Card = ({ showIconButton = true, iconPosition = 'right', titleFontSize = 'title_lg', bg = 'gray', ...props }: CardProps) => {
    return (
        <Container bg={bg}>
            {showIconButton && iconPosition  === 'left' ? (
                <ButtonToStaticLeft onPress={props.onPress}>
                    <IconArrowLeft bg={bg} />
                </ButtonToStaticLeft>
            ) : (
                <ButtonToStaticRight onPress={props.onPress}>
                    <IconArrowUpRight bg={bg} />
                </ButtonToStaticRight>
            )}
            
            <Typography
                fontSize={titleFontSize}
                lineHeight="lg"
                family="bold"
            >
                {props.title}
            </Typography>
            <Typography
                color="gray_2"
                fontSize="body_sm"
                textAlign="center"
            >
                {props.subtitle}
            </Typography>
        </Container>
    )
}