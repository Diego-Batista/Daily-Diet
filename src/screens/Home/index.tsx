import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Container } from './styles';


export function HomeScreen() {
  return (
    <Container>
        <Header />

        <Card 
          title='90,75%'
          subtitle='das refeições dentro da dieta'
          bg='green'
          iconPosition='right'
          onPress={() => console.log('Clicou')}
        />
    </Container>
  );
}