import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [showPassword, setShowPassword] = useState();

  const handleShowPassword = () => setShow(!show);

  const toast = useToast();

  return (
    <div>
      <VStack spacing="5px">
        <FormControl id="email" isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              value={showPassword}
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              onChange={(e) => setShowPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button colorScheme="blue" width="100%" style={{ marginTop: 15 }}>
          Login
        </Button>
        <Button
          variant="solid"
          colorScheme="red"
          width="100%"
          onClick={() => {
            setEmail("guest.user@example.com");
            setShowPassword("guestuser@2023");
          }}
        >
          Get Guest User Credentials
        </Button>
      </VStack>
    </div>
  );
}
