import { useState } from "react";

interface Register {
  name: string ;
  email :string;
  password: string ;
}
export default function Home() {
  const[formData, setformData] = useState({});
  return (
    <p>form data</p>
  );
}
