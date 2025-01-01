  import { useState } from "react";
  import Header from "./components/Header"
  import UserInput from "./components/UserInput"
  import Results from "./components/Results";
  import { calculateInvestmentResults } from "./util/investment";
import PieChart from "./components/PieChart";

  function App() {
    const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 5,
    });

    const inputIsValid = userInput.duration >= 1;

    const resultData = calculateInvestmentResults(userInput)

    function handleChange(inputId, newValue) {
      setUserInput((prevUserInp) => {
        return {
          ...prevUserInp,
          [inputId]: +newValue,
        };
      });
    }
    return (
      <>
      <Header/>
      <UserInput userInput={userInput} onChangeInput={handleChange}/>
      {!inputIsValid && <p className="center">Please enter valid duration greater than 0.</p>}
      {inputIsValid &&<Results input={userInput}/>}
      {inputIsValid && <PieChart resultData={resultData}/>}
      </>
    )
  }

  export default App
