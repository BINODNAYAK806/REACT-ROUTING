import React from 'react'

import { Button ,Stack} from '@chakra-ui/react'
import { Link } from "react-router-dom";
// import styled from "styled-components";



export default function Navbar() {
  return (
    <div>
    

<div>

<Stack bg='blue' m={0} p={2} spacing={2} direction='row' align='center'>
  <Button colorScheme='' size='md'>
    <Link to="/">HOME</Link>
  </Button>
  <Button colorScheme='' size='md'>
    <Link to="/products">All Products</Link>
  </Button>
  <Button colorScheme='' size='md'>
      <Link to="/">Product</Link>
  </Button>
  
</Stack>


</div>
</div>
  )
}
