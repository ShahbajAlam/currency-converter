import { useCurrency } from "../contexts/CurrencyContext";

function Button({ ratio }: { ratio: number }) {
    const { from, to, fromAmount, updateToAmount } = useCurrency();

    return (
        <button
            onClick={() => updateToAmount(String(+fromAmount * ratio))}
            className="outline-none border-none rounded-lg bg-green-600 text-gray-50 py-3 w-full mt-8"
        >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
    );
}

export default Button;
