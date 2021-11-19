import './App.css';
import Sidechart from "./Sidechart"
import Chartbox from './Chartbox';
import Pusher from 'pusher-js/types/src/core/pusher';
import axios from './aaxios';

function App() {

const [message,setMessages] =  useState()

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response=>{
      console.log(res)
      setMessages(response.data)
    })
    }, [])



  useEffect(() => {
        var pusher = new Pusher('c4215eb12f4630e2607a', {
    cluster: 'eu',
  });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted",(newMessages)=>
    {
      alert(JSON.stringify(newMessages));
      setMessages(...message,data)
    });
    ()=>
    {
      channel.unbind_all();
      channel.unsubscribe();

    }
  },[message]);

  return (
    <div className="app">
      <header className="app_header">
      <Sidechart />
      <Chartbox message = {message}/>
      </header>
    </div>
  );
}

export default App;
