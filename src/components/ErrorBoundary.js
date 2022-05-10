import React from "react";

import { Box, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: {xs: "85vh", sm: "80vh", md: "75vh"},
            justifyContent: "center",
          }}
        >
          <ErrorIcon sx={{fontSize: "5rem", mb: 2}}/>
          <Typography gutterBottom align="center">Oops! Something went wrong.</Typography>
          <Typography align="center">
            The page didn't load correctly. See the Javascript console for
            technical details
          </Typography>
        </Box>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
