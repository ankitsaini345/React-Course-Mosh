import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ExpendableText from "./components/ExpendableText";
import ComplexForm from "./components/Form/complexForm";
import Form from "./components/Form/Form";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup/ListGroup";
import Message from "./components/Message";
import UserList from "./components/UserList/UserList";
import MutateArray from "./Examples/MutateArray";
import ExpenseMain from "./Expense Tracker/ExpenseMain";
import Test from "./Video Game App/Test";
import VideoGameMain from "./Video Game App/VideoGameMain";

function App() {
  return <VideoGameMain />;
  // return <UserList />;
  // return <ExpenseMain />;
  // return <ComplexForm />;
  // return <Form />;

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

  // return <Like onClick={()=> console.log('Clicked')
  // }/>

  // return (
  //   <ExpendableText maxChars={10}>
  //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
  //     exercitationem dolorem, labore voluptates voluptatibus corrupti doloremque
  //     saepe impedit odit quasi.
  //   </ExpendableText>
  // );
}

export default App;
