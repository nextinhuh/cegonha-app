import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./src/config/firebase.config";

import { SignIn } from './src/screens/SignIn';

export default function App() {
  const app = initializeApp(firebaseConfig);
  return (
    <SignIn />
  );
}