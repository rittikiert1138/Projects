import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layouts/Layout';
import axios from 'axios';

const Home = ({ users }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/product')
      .then((res) => {
        setProducts(res.data);
      })
  }, []);

  return (
    <Layout>
      <div className="w-4/5 mx-auto">
        <div class="grid grid-cols-4 gap-4">
          {products && products.map((item, i) => (
            <div class="w-full rounded overflow-hidden shadow-lg mt-5">
              <img class="w-full" src={`http://localhost:5000/uploads/product/${item.images}`} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{item.name}</div>
                <p class="text-gray-700 text-base">
                  {item.description}
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(mapStateToProps, {})(Home);
