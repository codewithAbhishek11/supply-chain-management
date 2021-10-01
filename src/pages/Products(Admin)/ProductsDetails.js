import React, { useEffect, useState } from 'react'
import '../ProductsDetails.css'
import ReactPaginate from 'react-paginate'
import ProductsDetailsEditModal from './ProductsDetailsEditModal';
import ProductsDetailsDeleteModal from './ProductsDetailsDeleteModal';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddNewProductModal from './AddNewProductModal';
import { url } from '../../common/constants';
import axios from 'axios';

function ProductsDetails() {
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0)
    const [product, setProduct] = useState(0);/*This is fro deleting and editing*/
    const [editProduct, setEditProduct] = useState(0);/*This is fro deleting and editing*/
    const [message, setMessage] = useState("")
    const [messageId, setMessageId] = useState("")
    const usersPerPage=7;
    const pagesVisited = pageNumber * usersPerPage;

    useEffect(()=>{
      getAllProducts();
    },[])

    const getAllProducts =()=>{
    axios.get(url+"/product").then((response)=>{
    const result = response.data;
    if(result.status =="success"){
      setProducts(result.data)
    }
    else{
      alert("Some error occured products cannot be fetched !")
    }
      })
    }

   const displayProducts = products
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((product) => {
      return (
        <tr>
          <td >{product.productNo}</td>
          <td>{product.productName}</td>
          <td>{product.plantName}</td>
          <td className="status">
            <p className={`${product.status}`}>{product.status}</p>
          </td>
          <td><button onClick={()=>EditproductDetails(product)} className="btn btn-success  btn-page-edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <EditIcon style={{fontSize:'20px', paddingBottom:'2px'}}/>
            </button>
          <button onClick={()=>productDetails(product)} className="btn btn-secondary  btn-page-delete" data-bs-toggle="modal" data-bs-target="#staticBackdropDelete">
            <DeleteIcon style={{fontSize:'20px'}}/>
            </button>
            </td>
        </tr>
      );
    });
  const pageCount = Math.ceil(products.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
   
  const productDetails=(product)=>{
    setProduct(product);
  }
  const EditproductDetails=(product)=>{
    setEditProduct(product);
  }

  if(messageId !== ""){
    setTimeout(changeID,5000);

  }
  function changeID (){
    setMessageId("crud-status-hide")
  }


    return (
        <div className="page-container">
          <ProductsDetailsEditModal product={editProduct} refresh={getAllProducts} setMessage={setMessage} setMessageId={setMessageId}/>
          <ProductsDetailsDeleteModal product={product} refresh={getAllProducts} setMessage={setMessage} setMessageId={setMessageId}/>
          <AddNewProductModal refresh={getAllProducts} setMessage={setMessage} setMessageId={setMessageId}/>
          <div className="page-header">
            <h4>Manage Products</h4>
          </div>
          <div className="page-updateStatus">
            <p id={`${messageId}`}>{message}</p>
          </div>
          <div className="page-table-div">
          <table id="page-table" class="table table-striped table-sm" cellspacing="0" width="100%">
            <thead>
              <tr>
                <th class="th-sm id">Product No
                </th>
                <th class="th-sm">Product Name
                </th>
                <th class="th-sm">Plant Name
                </th>
                <th class="th-sm">Status
                </th>
                <th class="th-sm">Action
                </th>
              </tr>
            </thead>
            <tbody>
            {displayProducts}
            </tbody>
        </table>
        <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
          </div>
          
          <div className="page-button-div">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropAddNewProduct">Add Products</button>
          </div>
        </div>
        
    )
}

export default ProductsDetails
