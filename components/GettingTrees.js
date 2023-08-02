import { useState } from "react";

export default function GettingTrees({ month }) {
  const totalCO2 = 1.89; /* total= 1.89kgco2 per month per person */
  const totalTrees = 53.33; /* total of tress per month to clean totalCO2 */

  const kgco2Month = Math.round(month * 0.233 * 100) / 100; /* user production c02 per month by watching netflix*/

  const treesUsed = Math.ceil((kgco2Month / totalTrees) * totalCO2);

  return (
    <>
      <span>{treesUsed}</span>
    </>
  );
}
