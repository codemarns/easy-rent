import React from "react";
import { Houses } from "./sections/Houses";
import { Resorts } from "./sections/Resorts";
import { Apartments } from "./sections/Apartments";
import { Condominiums } from "./sections/Condominiums";

export default function Rents() {
  return (
    <div className="pt-20 -mt-20">
      <Houses />
      <Resorts />
      <Apartments />
      <Condominiums />
    </div>
  );
}
