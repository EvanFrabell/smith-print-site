import SetupPage from "../components/SetupPage";

export default function PcPage() {
  const pcSteps = [
    {
      title: "Step 1",
      content: (
        <>
          <p className="mb-6">To access your organization's printers, first download Mobility Print.</p>
          <a 
            href="https://papercut.com/products/ng/mobility-print/download/client/windows/"
            className="inline-block bg-[#248a24] hover:bg-[#1e701e] text-white font-bold py-2.5 px-8 rounded shadow-md transition-all no-underline"
          >
            Download Mobility Print
          </a>
        </>
      )
    },
    {
      title: "Step 2",
      content: (
        <p>Run the Mobility Print installer to select and install the printers you want to use.<br /><br />
        <span className="text-[#718096]">If prompted, enter your PaperCut username and password.</span></p>
      )
    }
  ];

  return (
    <SetupPage 
      title="Set up printing for Windows" 
      steps={pcSteps} 
      currentOS="pc" 
      footerText="When it's time to print, just print like you normally do."
    />
  );
}