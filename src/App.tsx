import React from 'react';
import { Button } from 'antd';
import { Route, Routes } from 'react-router-dom';
import LazySuspense from 'components/LazySuspense';
import HomePage from 'pages/HomePage';
import EditorPage from 'pages/EditorPage';

// const HomePage = React.lazy(() => import('./pages/HomePage'));
// const EditorPage = React.lazy(() => import('./pages/EditorPage/EditorPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
    return (
        <Routes>
            {['/'].map((element, index) => {
                return (
                    <Route
                        key={`mainRoute_${index}`}
                        path={element}
                        element={<LazySuspense component={<HomePage />} />}
                    />
                );
            })}
            <Route
                path='editor'
                element={<LazySuspense component={<EditorPage />} />}
            />
            <Route
                path='*'
                element={<LazySuspense component={<NotFound />} />}
            />
        </Routes>
    );
}

export default App;
