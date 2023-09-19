import ListGroup from './components/ListGroup/ListGroup';
import Message from './components/Message'

function App() {
  const items: string[] | null = ["A", "B", "C", "D"];

  const handleSelect = (item: string) => {
    console.log(item, 'Selected');
    
  }

  return <><ListGroup items={items} heading="Cities" onSelectItem={handleSelect}/></>
}

export default App;