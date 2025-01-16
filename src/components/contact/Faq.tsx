import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

// Styled Accordion
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

// Styled AccordionSummary
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(() => ({
  backgroundColor: "rgba(0,0,0,0.1)",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "4px",
  flexDirection: "row",
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    transform: "rotate(270deg)",
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    color: "rgba(21,0,31,1)", // Corrected the color value
  },
}));

// Styled AccordionDetails
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "rgba(255,255,255,0.9)", // Fixed invalid RGBA value
  color: "rgba(0,0,0,0.6)",
  fontSize: "12px",
  fontWeight: 200,
}));

// Main Component
const CustomizedAccordions: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  // Change handler with proper typing
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      console.log(event);

      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      {["panel1", "panel2", "panel3"].map((panel, index) => (
        <Accordion
          key={panel}
          expanded={expanded === panel}
          onChange={handleChange(panel)}
        >
          <AccordionSummary
            aria-controls={`${panel}d-content`}
            id={`${panel}d-header`}
          >
            <Typography component="span">
              Collapsible Group Item #{index + 1}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default CustomizedAccordions;
