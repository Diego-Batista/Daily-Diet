import { ReactNode } from "react"
import { TouchableOpacityProps } from "react-native"
import { Container, Title } from "./styles"

export type ButtonType = {
    type?: 'solid' | 'outline'
    isActive?: boolean
}

export type ButonProps = TouchableOpacityProps & ButtonType & {
    title: string
    icon?: ReactNode
}

export const Button = ({ type = 'solid', isActive = true, ...props }: ButonProps) => {
    return (
        //@ts-ignore
        <Container isActive={isActive} type={type} disabled={isActive ? false : true} { ...props }>
            {props.icon && props.icon}

            <Title type={type} >{props.title}</Title>
        </Container>
    )
}