import { useEffect, useState } from "react";

function useCurrencyList() {
    const [list, setList] = useState<object>({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json"
            );
            const data = await res.json();
            setList(data);
        };
        fetchData();
    }, []);

    return Object.keys(list);
}

export default useCurrencyList;
