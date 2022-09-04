import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

export default function Error() {
  return (
    <div>
        <Alert mt={20}  status='error'>
  <AlertIcon />
  <AlertTitle>Error 404 </AlertTitle>
  <AlertDescription>page not found</AlertDescription>
</Alert>
    </div>
  )
}
