import jsPDF from "jspdf";

// define a generatePDF function that accepts a tickets argument
const generatePDF = () => {
  // initialize jsPDF
  const doc = new jsPDF("p","pt","a4");
  doc.html(document.querySelector("#content"), {
    callback: function(pdf) {
      pdf.save("voe.pdf")
    }
  })
}

export default generatePDF;