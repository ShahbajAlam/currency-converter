import { type ComponentPropsWithoutRef } from "react";
import useCurrencyList from "../hooks/useCurrencyList";
import { useCurrency } from "../contexts/CurrencyContext";

type InputProps = {
    label: string;
    id: string;
    to: string;
} & ComponentPropsWithoutRef<"input">;

function ToInput(props: InputProps) {
    const list = useCurrencyList();
    const { updateTo, updateToAmount, toAmount } = useCurrency();
    const { id, label, to, ...otherProps } = props;

    return (
        <div className="flex flex-col text-white">
            <div className="flex justify-between font-bold py-2">
                <label htmlFor={id}>{label}</label>
                <label htmlFor={to}>{to.toUpperCase()}</label>
            </div>
            <div className="flex w-full justify-between bg-gray-100 p-2 rounded-lg">
                <input
                    id={id}
                    {...otherProps}
                    className="w-[70%] border-[2px] border-gray-400 border-solid rounded-lg p-1 outline-none caret-gray-950 text-gray-950 text-xl"
                    value={Number(toAmount).toFixed(2)}
                    onChange={(e) => updateToAmount(e.target.value)}
                />
                <select
                    id={to}
                    value={to}
                    onChange={(e) => updateTo(e.target.value)}
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

export default ToInput;
