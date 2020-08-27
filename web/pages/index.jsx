import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layouts/Layout';
import { usersFetch } from '../redux/actions/userAction';
import axios from 'axios';

const Home = ({ users, usersFetch }) => {
  const [products, setProducts] = [];

  useEffect(() => {
    usersFetch();

    axios.get('http://localhost:5000/api/product').then((res) => {
      setProducts({ products: res.data });
    });
  }, [usersFetch]);

  return (
    <Layout>
      <ul>
        {users &&
          users.map((user, i) => {
            return <li key={i}>{user.username}</li>;
          })}
      </ul>
    </Layout>
  );
};

const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(mapStateToProps, { usersFetch })(Home);
