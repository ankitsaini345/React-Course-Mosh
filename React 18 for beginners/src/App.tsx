import Alert from './components/Alert';
import Button from './components/Button/Button';
import Like from './components/Like';
import ListGroup from './components/ListGroup/ListGroup';
import Message from './components/Message'

function App() {

  // ----------------------for list group component
  // const items: string[] | null = ["A", "B", "C", "D"];
  // const handleSelect = (item: string) => {
  //   console.log(item, 'Selected');
  // }
  // return <><ListGroup items={items} heading="Cities" onSelectItem={handleSelect}/></>
  //---------------------------------

  // return <Alert>
  //   Hello <p>World</p>
  // </Alert>

  // return <Button color='primary' childern = 'My Button' onClick={()=> console.log('Clicked')
  // }/>

  return <Like onClick={()=> console.log('Clicked')
  }/>
}

export default App;