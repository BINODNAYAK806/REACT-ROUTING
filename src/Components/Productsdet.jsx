import React from 'react'
import { useParams } from "react-router-dom";
import { Box } from '@chakra-ui/react'
export default function Productsdet() {
    const { productId } = useParams();
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [productDetails, setProductDetails] = React.useState({});
    
    React.useEffect(() => {
        let isSubscribed = true;
        setIsLoading(true);
        fetch(`http://localhost:8080/data/${productId}`)
          .then((res) => res.json())
          .then((res) => {
            setIsError(false);
            return isSubscribed ? setProductDetails(res) : null;
          })
          .catch((err) => setIsError(true))
          .finally(() => setIsLoading(false));
    
        return () => {
          isSubscribed = false;
        };
      }, [productId]);
    
      if (isLoading) {
        return <h1>Loading....</h1>;
      }
    
      if (isError) {
        return <h1>SOMETHING WENT WRONG</h1>;
      }
      if( Object.keys(productDetails).length === 0){

        return <div> <Box bg='red' mt={10}  bgSize w='100%' p={4} color='white'>
        Product does not exist
    </Box></div>
      }
    
        console.log(productDetails)
  return (
    <div>
        <Box bg='tomato' m={90} w='20%' p={4} color='white'>
  name: {JSON.stringify(productDetails.name)}
</Box>
<Box bg='tomato' m={90} w='20%' p={4} color='white'>
 price:{JSON.stringify(productDetails.price)}
</Box>
    </div>
  )
}
