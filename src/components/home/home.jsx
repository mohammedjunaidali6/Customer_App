import React, { useState, useEffect, Fragment } from 'react';
import * as Global from "../common/global.jsx";

import { GET_USERS_URL } from '../../constants/actionTypes';
import { getUsers } from '../../actions/home/homeAction';

import Landing from '../landing/landing.jsx';

export default function Home(props) {
  const [allUsers, setAllUsers] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getUsers(GET_USERS_URL + page);
      // Logics after await
      setAllUsers(response['data']['data']);
      props.homeAction.dispatchUsers(response['data']['data']);
    }
    fetchData();
  }, [page]);

  function testFn() {
    Global.ConsoleFn("/test");
    props.history.push('/test');
  }

  return (
    <div id="user-container" className="container-fluid">
      <span> Martin - {page}</span>
      <button type="button" className="mt-2" onClick={() => setPage(page + 1)}>Btn</button>
      <br></br>
      {allUsers && allUsers.length > 0 ? (
        <ul>
          {allUsers.map((user) => (
            <Fragment>
              <li key={user.id}>{user.id}</li>
              <li key={user.email}>{user.first_name}{user.last_name}</li>
            </Fragment>
          ))}
        </ul>
      ) : null}
      <br></br>
      <button type="button" className="test" onClick={() => testFn()} >Page Not Found</button>
      <br></br>
      <Landing></Landing>
    </div>
  )
}
