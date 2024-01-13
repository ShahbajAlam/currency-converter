import Card from "./components/Card";
import { useCurrency } from "./contexts/CurrencyContext";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const { from, to } = useCurrency();
    const data = useCurrencyInfo(from, to);
    const ratio = data?.[to] as number;

    return <Card from={from} to={to} ratio={ratio} />;
}

export default App;
