import { useEffect, useState } from "react";

const useCurrencyInfo = (from: string, to: string) => {
    const [data, setData] = useState<unknown>();

    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error("Something went wrong!!!");
                const data = await res.json();
                setData(data);
            } catch (error) {
                if (error instanceof Error) alert(error.message);
            }
        };

        fetchData();
    }, [from, to]);

    return data as { date: string; [to: string]: number | string };
};

export default useCurrencyInfo;
