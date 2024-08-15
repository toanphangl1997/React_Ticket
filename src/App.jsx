import { useState } from "react";
import HeaderLayout from "./components/common/HeaderLayout";
import FooterLayout from "./components/common/FooterLayout";
import BookingTicket from "./components/BookingTicket/BookingTicket";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderLayout />
      <BookingTicket />
      <FooterLayout />
    </>
  );
}

export default App;
