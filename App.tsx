import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation";

export default function App(): JSX.Element {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}
