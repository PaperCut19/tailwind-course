import PricingCard from "./components/PricingCard";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-800">
      <div className="my-6 flex flex-col space-y-6 md:my-0 md:flex-row md:space-y-0 md:space-x-6">
        <PricingCard
          tier="BASIC"
          storage="100GB"
          price="1.99"
          isHighlighted={false}
        />
        <PricingCard
          tier="STANDARD"
          storage="200GB"
          price="3.99"
          isHighlighted={true}
        />
        <PricingCard
          tier="PREMIUM"
          storage="4 TB"
          price="8.99"
          isHighlighted={false}
        />
      </div>
    </div>
  );
}

export default App;
