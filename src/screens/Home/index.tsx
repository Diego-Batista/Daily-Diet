import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Typography } from '@components/Typography';
import { Plus } from 'phosphor-react-native';
import { View } from 'react-native';
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

        <View style={{ marginTop: 40}}>

          <Typography fontSize='title_sm' style={{ marginBottom: 8 }}>Refeições</Typography>
          <Button 
            title='Nova refeição' 
            icon={<Plus color='white' size={18} />}
            type='solid'
            onPress={() => console.log('Nova refeição')}
            isActive
          />

        </View>
    </Container>
  );
}