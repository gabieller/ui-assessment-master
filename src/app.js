
import AccountOverview from "./components/AccountOverview";

import "./app.css";

function App() {
  const accountOverviewStub = {
    supportContact: {
      name: "John Smith",
      email: "john.smith@feefo.com",
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    },
  };

  return (
    <div className="App" tabIndex={0}>
      <AccountOverview data={accountOverviewStub} />
    </div>
  );
}



export default App;
