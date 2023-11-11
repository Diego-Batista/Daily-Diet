import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Meal } from '@components/Meal';
import { Typography } from '@components/Typography';
import { Plus } from 'phosphor-react-native';
import { SectionList, View } from 'react-native';
import { Container } from './styles';


export function HomeScreen() {

  const meals = [
    {
      title: '11.11.2023',
      data: [
        {
          id: '01',
          hour: '20:00',
          description: 'Whey-protein',
          isOnTheDiet: true
        },
        {
          id: '02',
          hour: '22:00',
          description: 'X-tudo',
          isOnTheDiet: false
        },
        {
          id: '02',
          hour: '22:00',
          description: 'X-tudo',
          isOnTheDiet: false
        }
      ]
    },
    {
      title: '10.11.2023',
      data: [
        {
          id: '03',
          hour: '20:00',
          description: 'Whey-protein',
          isOnTheDiet: true
        },
        {
          id: '04',
          hour: '22:00',
          description: 'X-tudo',
          isOnTheDiet: false
        },
        {
          id: '04',
          hour: '22:00',
          description: 'X-tudo',
          isOnTheDiet: false
        }
      ]
    },
]

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

        <SectionList
          sections={meals}
          keyExtractor={(item) => item.id}
          renderSectionHeader={({section: {title}}) => (
            <Typography
              fontSize='title_sm'
              family='bold'
              color='gray_1'
              style={{ marginBottom: 8, marginTop: 32}}
            >
              {title}
            </Typography>
          )}
          style={{ marginBottom: 32 }}
          contentContainerStyle={meals.length === 0 && {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <>
              <Typography>
                Não há refeições cadastradas ainda.
              </Typography>
              <Typography>
                Vamos cadastrar refeições hoje?
              </Typography>
            </>
          )}
          renderItem={({item}) => (
            <Meal 
              key={item.id}
              {...item}
              onPress={() => console.log('Clicou')}
            />
          )}
        />

        
    </Container>
  );
}