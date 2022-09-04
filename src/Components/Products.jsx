import React from 'react'
import { Link } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
export default function Products() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:8080/data`)
          .then((res) => res.json())
          .then((res) => setProducts(res))
          .catch((err) => console.log(err));
      }, []);
  return (
    <div>
        <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>all Products click on more to see more details </TableCaption>
    <Thead>
      <Tr>
        <Th>NAME</Th>
        <Th>PRICE</Th>
        <Th isNumeric> details </Th>
      </Tr>
    </Thead>
    <Tbody>

    {products?.map((product) => (
              <Tr key={product.id}>
                <Td>{product.name}</Td>
                <Td>INR : {product.price}</Td>
                <Td  >
                  <Link  to={`/products/${product.id}`}>More...</Link>
                </Td>
              </Tr>
            ))}
      
    </Tbody>
    
  </Table>
</TableContainer>

    </div>
  )
}
