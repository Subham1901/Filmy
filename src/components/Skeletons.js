import {
  Box,
  Card,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import React from 'react';

const Skeletons = () => {
  return (
    <Box
      display={'flex'}
      flexWrap={'wrap'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {[...Array(12).keys()].map(data => (
        <Card w={'xs'} m={2}>
          <Skeleton height="100px"></Skeleton>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Card>
      ))}
    </Box>
  );
};

export default Skeletons;
