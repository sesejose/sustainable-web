export default function GettingKm({ month }) {
  const kmHour = 4.5;
  return (
    <>
      <h2>With that amount of energy you can travel with an electric car</h2>
      <h2>{month * kmHour} km(s)</h2>
    </>
  );
}
