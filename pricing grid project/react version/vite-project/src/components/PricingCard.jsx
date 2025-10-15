import FeatureItem from "./FeatureItem";

function PricingCard({ tier, storage, price, isHighlighted }) {
  return (
    <div
      className={`rounded-xl text-white ${
        isHighlighted ? "bg-violet-600" : "bg-slate-700"
      }`}
    >
      {/* Upper container */}
      <div className="mx-3 mt-3 rounded-t-xl bg-slate-800 p-8">
        <div className="text-center uppercase">{tier}</div>
        <h2 className="mt-10 text-center font-serif text-5xl">{storage}</h2>
        <h3 className="mt-2 text-center">{price}/Month</h3>
        <div className="flex justify-center">
          <a
            href="#"
            className={`my-6 inline-block rounded-lg border px-10 py-3 text-center duration-200 ${
              isHighlighted
                ? "border-violet-600 bg-violet-600 hover:border-violet-800 hover:bg-violet-800"
                : "border-violet-600 hover:border-violet-800 hover:bg-violet-800"
            }`}
          >
            Purchase
          </a>
        </div>
      </div>

      {/* Border */}
      <div className="border-t border-slate-700"></div>

      {/* Lower container */}
      <div className="mx-3 mb-3 rounded-b-xl bg-slate-800 p-8">
        <FeatureItem text={`${storage} of Storage`} />
        <FeatureItem text="Option to add members" />
        <FeatureItem text="Extra member benefits" />
      </div>
    </div>
  );
}

export default PricingCard;
