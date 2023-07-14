import React, { useState } from "react";
import { Box, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const categories = [
  { id: 1, name: "Getting Started" },
  { id: 2, name: "Account Management" },
  { id: 3, name: "Giving Us Free Money" },
  { id: 4, name: "Technical Support" },
];

const faqs = [
  {
    id: 1,
    question: "How do I create an account?",
    answer:
      "To create an account, click the 'Sign Up' button on the homepage and follow the prompts to enter your information.",
    category: "Getting Started",
    tags: ["account", "signup"],
  },
  {
    id: 2,
    question: "How do I reset my password?",
    answer:
      "To reset your password, click the 'Forgot Password' link on the login page and follow the prompts to reset your password.",
    category: "Account Management",
    tags: ["password", "reset"],
  },
  {
    id: 3,
    question: "How do I update my billing information?",
    answer:
      "To update your billing information, go to the 'Billing' section of your account settings and follow the prompts to update your payment method.",
    category: "Billing and Payments",
    tags: ["billing", "payment"],
  },
  {
    id: 4,
    question: "How do I troubleshoot a technical issue?",
    answer:
      "To troubleshoot a technical issue, try restarting your device or clearing your browser cache. If the issue persists, contact our technical support team for assistance.",
    category: "Technical Support",
    tags: ["technical", "support"],
  },
];

function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Help Center
      </Heading>
      <Stack direction="row" spacing={4} mb={4}>
        <Input
          placeholder="Search for help"
          value={searchQuery}
          onChange={handleSearchChange}
          size="lg"
          pr="4.5rem"
          variant="filled"
          bg="white"
          borderColor="gray.300"
          _hover={{ borderColor: "gray.400" }}
          _focus={{ borderColor: "gray.400", boxShadow: "none" }}
        />
        <Box position="relative">
          <FaSearch
            color="gray.400"
            position="absolute"
            top="50%"
            right="1rem"
            transform="translateY(-50%)"
          />
        </Box>
      </Stack>
      <Stack spacing={4}>
        {categories.map((category) => (
          <Text key={category.id} fontWeight="bold">
            {category.name}
          </Text>
        ))}
        {filteredFaqs.map((faq) => (
          <Box key={faq.id} borderWidth="1px" p={4} rounded="md">
            <Heading as="h2" size="md" mb={2}>
              {faq.question}
            </Heading>
            <Text>{faq.answer}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default HelpCenterPage;