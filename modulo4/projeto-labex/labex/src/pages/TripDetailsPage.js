import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

import ComponentTripDetails from "../components/componentTripDetails/ComponentTripDetails";

function TripDetailsPage() {
  useProtectedPage();

  return (
    <>
    <ComponentTripDetails/>
    </>
  );
}

export default TripDetailsPage;
