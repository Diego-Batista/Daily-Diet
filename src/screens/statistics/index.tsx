import { Card } from "@components/Card";
import { Layout } from "@components/Layout";
import { Typography } from "@components/Typography";
import { Container, Row } from "./styles";

export function StatisticsScreen() {
    return (
        <Container>
            <Layout 
				bg="green"
                header={
                    <Card 
                        bg="green"
                        title='90,86%' 
                        subtitle='das refeições dentro da dieta'
                        iconPosition="left"
						onPress={() => console.log('voltar')}
                    />
                }
				onPressBack={() => console.log('voltar')}
            >
                <Typography
                    family="bold"
                    fontSize="title_xs"
                    style={{ marginBottom: 20}}
                >
                    Estatísticas Gerais
                </Typography>

                    <Row>
						<Card
							title='90'
							subtitle="melhor sequência de pratos dentro da dieta"
							bg="gray"
							showIconButton={false}
						/>
					</Row>

					<Row>
						<Card
							title='90'
							subtitle="refeições registradas"
							bg="gray"
							showIconButton={false}
						/>
					</Row>

					<Row>
						<Card
							title='90'
							subtitle="refeições dentro da dieta"
							bg="green"
							showIconButton={false}
							style={{ width: '48%' }}
						/>

						<Card
							title='90'
							subtitle="refeições fora da dieta"
							bg="red"
							showIconButton={false}
							style={{ width: '48%' }}
						/>
					</Row>   
            </Layout>
        </Container>
    )
}