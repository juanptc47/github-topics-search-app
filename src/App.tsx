import * as React from 'react';
import { Provider } from 'react-redux';

// React Router
import AppRouter from './router/AppRouter';

// Store
import { createCustomStore } from './redux/store/store';
const store = createCustomStore();

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AppRouter store={store} />
        </Provider>
    );
}

export default App;
