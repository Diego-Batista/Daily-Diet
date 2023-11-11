import { TextProps } from "react-native"
import { Container } from "./styles"
import * as T from "./types"

export type TypographyStyles = {
    textAlign?: T.TextAlign
    family?: T.FontFamily
    lineHeight?: T.LineHeight
    fontSize?: T.FontSizes
    color?: T.Colors
}

type TypographyProps = TextProps & TypographyStyles

export const Typography = ({ ...props }: TypographyProps) => {
    return (
        //@ts-ignore
        <Container {...props}>
            {props.children}
        </Container>
    )
}