import React from "react";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import Layout from "../components/Layout/Layout";
import { Box, TableCell, TableContainer, TableHead, TableRow, Typography,Table,Paper, TableBody} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Us</Typography>
        <p>
          We’d love to hear from you! At *Indian Delights*, we value your
          feedback, inquiries, and suggestions. Whether you have a question
          about our menu, want to book a table, or simply wish to share your
          dining experience, our team is here to assist you. You can reach out
          to us via phone, email, or by visiting our restaurant in person. Our
          friendly staff is always ready to ensure your experience with us is
          nothing short of exceptional. Let us know how we can make your visit
          even more delightful!
        </p>
      </Box>
      <Box sx={{m:3}}>
        <TableContainer component={Paper}>
         <Table aria-label='contact'>
          <TableHead>
            <TableRow>
              <TableCell sx={{bgcolor:"gray",color:"white"}}
              align="center">
                contact Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
               <SupportAgentIcon sx={{color:"red",pt:1}}/>1800-00-44-44(tollfree)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
               <MailIcon sx={{color:"skyblue",pt:1}}/>support@gmial.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
               <CallIcon sx={{color:"black",pt:1}}/>9087654321
              </TableCell>
            </TableRow>
          </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
