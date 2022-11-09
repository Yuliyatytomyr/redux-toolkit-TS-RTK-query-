import React, { useEffect } from 'react';

import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import './App.css';

function App() {
    const { users, isLoading, error } = useAppSelector(state => state.userReducer);
    // const { increment } = userSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    return (
        <div className="App">
            {/*<h1>{count}</h1>*/}
            {/*<button onClick={() => dispatch(increment( 1))}>increment</button>*/}
            {
                isLoading
                    ? "loading..."
                    : error
                    ? <>{error}</>
                    : <>{JSON.stringify(users, null, 2)}</>
            }
            <PostContainer/>
        </div>
    )
}

export default App;
