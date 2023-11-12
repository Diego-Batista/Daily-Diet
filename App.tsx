import { Loading } from '@components/Loading';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { StatisticsScreen } from '@screens/statistics';
import theme from '@theme/index';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular, 
    NunitoSans_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? ( <StatisticsScreen /> ): ( <Loading /> )}
        
    </ThemeProvider>
  );
}

