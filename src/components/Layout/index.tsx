import { Typography } from "@components/Typography"
import { ArrowLeft } from "phosphor-react-native"
import { ReactNode } from "react"
import { BackButton, Container, Content, Header } from "./styles"

export type LayoutColor = {
    bg?: 'gray' | 'green' | 'red'
}

type LayoutProps = LayoutColor & {
    header: JSX.Element | string
    children: ReactNode
    onPressBack?: () => void
}

export const Layout = ({ header, bg = 'gray', children, onPressBack }: LayoutProps) => {
    return (
        <Container bg={bg}>
            <Header>
                {typeof header === 'string' ? 
                    (
                        <>
                            <BackButton
                                style={{ width: '15%'}}
                                onPress={onPressBack}
                            >
                                <ArrowLeft />
                            </BackButton>

                            <Typography
                                fontSize="title_sm"
                                family="bold"
                                lineHeight="lg"
                                textAlign="center"
                                style={{ width: '60%'}}
                            >
                                {header}
                            </Typography>
                            <Typography style={{ width: '15%'}} />
                        </> 
                    ) : (
                        <>
                            {header}
                        </>
                    )
                }
            </Header>
            <Content>
                {children}
            </Content>
        </Container>
    )
}