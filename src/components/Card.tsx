import Button from "./Button";
import FromInput from "./FromInput";
import ToInput from "./ToInput";

function Card({
    from,
    to,
    ratio,
}: {
    from: string;
    to: string;
    ratio: number;
}) {
    return (
        <div className="w-[45vw] rounded-3xl px-8 p-5 min-h-[50vh] bg-[rgba(0,0,0,0.5)] backdrop-blur-sm">
            <FromInput
                from={from}
                id="from"
                label="From"
                type="number"
                min={0}
            />
            <ToInput id="to" label="To" to={to} disabled />
            <Button ratio={ratio} />
        </div>
    );
}

export default Card;
