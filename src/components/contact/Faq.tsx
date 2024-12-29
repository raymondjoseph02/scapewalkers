import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  return (
    <div>
      <Accordion defaultExpanded className="bg-red-200">
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon className="w-16 h-16 rounded-full bg-[#979494] text-white_100" />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-lg font-semibold bg-transparent"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails className="bg-transparent text-[#0000007f]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon className="w-16 h-16 rounded-full bg-[#979494] text-white_100" />
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon className="w-16 h-16 rounded-full bg-[#979494] text-white_100" />
          }
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
