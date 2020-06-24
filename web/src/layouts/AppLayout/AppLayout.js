import { Box, Heading, Flex, Text } from '@chakra-ui/core'
// import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
)

const Header = (props) => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)
  // const { logIn, logOut, isAuthenticated } = useAuth()
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="white"
      color="gray"
      boxShadow="0 0px 1px 0px rgba(0, 0, 0, 0.4)"
      mb={4}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          <Link to={routes.stories()}>Xever</Link>
        </Heading>
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="black"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>
          <Link to={routes.stories()}>Stories</Link>
        </MenuItems>

        <MenuItems>
          <Link to={routes.dashboard()}>Dashboard</Link>
        </MenuItems>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      ></Box>
    </Flex>
  )
}

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box>
        <Flash timeout={5000} />
        <Box ml={4} mr={4}>
          {children}
        </Box>
      </Box>
    </>
  )
}

export default AppLayout
