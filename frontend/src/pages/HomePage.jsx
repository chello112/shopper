import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../redux/features/productsApiSlice";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";

const HomePage = () => {
  const { pageNumber } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    pageNumber,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} />
        </>
      )}
    </>
  );
};

export default HomePage;
