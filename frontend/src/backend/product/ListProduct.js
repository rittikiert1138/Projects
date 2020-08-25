import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/layouts/Layout';
import { Link } from 'react-router-dom';
import AlertBox from '../../components/layouts/alert';
import { getProducts, deleteProduct } from '../../redux/actions/productAction';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';

const ListProduct = ({ getProducts, deleteProduct, product: { products } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Layout>
      <div style={{ textAlign: 'right' }}>
        <Button
          variant='contained'
          color='primary'
          startIcon={<AddIcon />}
          component={Link}
          to={`/backend/product/create`}
        >
          Create
        </Button>
      </div>
      <AlertBox />
      <TableContainer component={Paper} style={{ marginTop: '25px' }}>
        <Table style={{ width: '100%' }} aria-label='simple table'>
          <TableHead>
            <TableRow style={{ color: '#fff' }}>
              <TableCell align='center' style={{ width: '5%' }}>
                No.
              </TableCell>
              <TableCell align='left'>Product name</TableCell>
              <TableCell align='center' style={{ width: '30%' }}>
                Product price
              </TableCell>
              <TableCell align='center' style={{ width: '20%' }}>
                Manage
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item, i) => (
              <TableRow key={i}>
                <TableCell align='center'>{i + 1}</TableCell>
                <TableCell align='left'>{item.pdname}</TableCell>
                <TableCell align='center'>{item.pdprice}</TableCell>
                <TableCell align='center'>
                  <ButtonGroup
                    variant='contained'
                    aria-label='contained button group'
                  >
                    <Button
                      color='primary'
                      startIcon={<CreateIcon />}
                      component={Link}
                      to={`/backend/product/edit/${item._id}`}
                      style={{ backgroundColor: '#ffb119' }}
                    >
                      Edit
                    </Button>
                    <Button
                      color='secondary'
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteProduct(item._id)}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

ListProduct.propTypes = {
  getProducts: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(
  ListProduct
);
