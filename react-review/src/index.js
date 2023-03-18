import react from "react"
import ReactDOM from "react-dom/client"
import App from "./06-react-redux/App"
import { Provider } from 'react-redux'
import {store, persistor} from "./06-react-redux/redux/redux"
import { PersistGate } from "redux-persist/integration/react"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>
)
