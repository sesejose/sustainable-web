export default function GettingKwh({ month }) {
  const kwhHour=0.8002;
const kwhMonth=Math.round((month * 0.8002)*100)/100;
  return (
    <>
      <div className="kwh">
        <p>That monthly equals to</p>
        <h2>{kwhMonth}kWh</h2>

      </div>
    </>
  );
}
