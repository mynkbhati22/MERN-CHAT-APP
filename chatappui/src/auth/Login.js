import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

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
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              value={password}
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                {showPassword ? "Hide" : "Show"}
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
            setPassword("guestuser@2023");
          }}
        >
          Get Guest User Credentials
        </Button>
      </VStack>
    </div>
  );
}
