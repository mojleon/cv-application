import Button from "../../components/PrintButton";

function GeneratePDF(props) {
  return (
    <div id="generate">
      <h1>Generate</h1>
      <Button
        type="generate-pdf"
        value="Generate PDF"
        onButtonClicked={props.onButtonClicked}
      />
    </div>
  );
}

export default GeneratePDF;
