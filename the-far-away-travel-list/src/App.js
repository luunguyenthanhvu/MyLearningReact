export default function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Form></Form>
      <PackingList></PackingList>
      <Stats></Stats>
    </div>
  );
}

function Logo() {
  return (
    <h1>Far Away</h1>
  );
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">List</div>
  );
}

function Stats() {
  return (
    <footer>
      <em>You have X items on your lists, and you already packed X </em>
    </footer>
  );
}