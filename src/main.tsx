import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    // Now, the BrowserRouter controls the entire Routing for our website
    <BrowserRouter>
        <App />
    </BrowserRouter>
)