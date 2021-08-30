import { chakra } from '@chakra-ui/react';
import React from 'react';
import { Box, Stack, Text, Image, Icon, Button } from '@chakra-ui/react';
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { MdHd, MdHighQuality } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiAlertFill } from "react-icons/ri";
import Ticker from './Ticker';

function Header() {
  return (
    <React.Fragment>
      <Stack bg="primary">
        <Stack p={4} direction="row" width="100%" justifyContent="space-between">
          <Stack justifyContent="center" alignItems="center">
            <Image h={4} src="../../logo.svg" alt="Basement logo"/>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            <Icon as={WiMoonAltThirdQuarter} color="secondary" />
            <Icon as={MdHd} color="secondary"/>
            <Stack alignItems="center" justifyContent="center" borderRadius="50%" border="1px" borderColor="secondary" width="50px" height="14px" overflow="hidden">
              <Icon as={IoMdCloseCircleOutline} color="secondary" position="absolute"/>
            </Stack>
            <Icon as={MdHighQuality} color="secondary"/>
            <Icon as={RiAlertFill} color="secondary"/>
          </Stack>
          <Button p={3.5} border="1px" borderColor="secondary" bg="transparent" borderRadius ="100em" h={7}>
            <Text color="secondary">CART(0)</Text>
          </Button>
        </Stack>
        <Stack px={4} justifyContent="center">
          <Image src="../../header.svg"></Image>
        </Stack>
      </Stack>
      <Box mt={8} borderTop="1px" borderBottom="1px" borderColor="secondary">
            <Ticker />
      </Box>
    </React.Fragment>
  );
}

export default Header;