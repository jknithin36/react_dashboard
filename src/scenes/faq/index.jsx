import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            WHAT IS REACT?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In short, React is a JavaScript library for building performant and
            user-friendly interfaces. React was released as an open-source
            project by Facebook in 2013, and it quickly became popular and
            widely used even by big names like Netflix, Uber, or Airbnb.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are the pros of React?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You already know some React benefits like creating completely custom
            user interfaces, but the list of its advantages is much longer.
            Let’s write them down and explain shortly looking from two different
            perspectives – business owner and developer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are the cons of React?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Like any other technology, React has its cons. High pace of
            development – React is still relatively new technology which evolves
            fast. Therefore, it may be hard for some to keep up this pace
            because of new features coming out now and then. And some developers
            might not like constant changes. Incompleteness – React provides
            only the View part of the MVC model. Because of that, you have to
            rely on other technologies, too. However, it allows developers to
            have almost full independence and thanks to that, every project
            might be different from each other.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What can I build with React?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Single Web Pages, Static websites, SaaS products, MVPs easy to
            scale, Complex and demanding Web Apps, Custom User Interfaces
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What does JSX mean?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            What does JSX mean? JavaScript XML JSX stands for JavaScript XML.
            JSX allows us to write HTML in React. JSX makes it easier to write
            and add HTML in React.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
