import * as React from 'react';

export interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => <div>{message}</div>;

export default App;
