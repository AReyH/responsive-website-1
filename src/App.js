import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import Header from './components/Header';
import { Container } from './components/styled/Container.styled';
import { GlobalStyles } from './components/styled/Global';
import content from './content';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
  
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles/>
      <Header/>
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item}></Card>
        ))}
      </Container>
      </>
    </ThemeProvider> 
    
  );
}

export default App;
