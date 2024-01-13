import { type ComponentPropsWithoutRef } from "react";
import useCurrencyList from "../hooks/useCurrencyList";
import { useCurrency } from "../contexts/CurrencyContext";

type InputProps = {
    label: string;
    id: string;
    from: string;
} & ComponentPropsWithoutRef<"input">;

function FromInput(props: InputProps) {
    const list = useCurrencyList();
    const { updateFrom, updateFromAmount, fromAmount } = useCurrency();
    const { id, label, from, ...otherProps } = props;

    return (
        <div className="flex flex-col text-white">
            <div className="flex justify-between font-bold py-2">
                <label htmlFor={id}>{label}</label>
                <label htmlFor={from}>{from.toUpperCase()}</label>
            </div>
            <div className="flex w-full justify-between bg-gray-100 p-2 rounded-lg">
                <input
                    id={id}
                    {...otherProps}
                    className="w-[70%] border-[2px] border-gray-400 border-solid rounded-lg p-1 outline-none caret-gray-950 text-gray-950 text-xl"
                    value={fromAmount}
                    onChange={(e) => updateFromAmount(e.target.value)}
                />
                <select
                    id={from}
                    value={from}
                    onChange={(e) => updateFrom(e.target.value)}
                    className="text-black w-[20%] border-[2px] border-gray-400 border-solid rounded-lg py-1 outline-none"
                >
                    {list.map((el) => (
                        <option key={el} value={el}>
                            {el}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default FromInput;
