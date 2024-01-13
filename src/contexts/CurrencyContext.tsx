import { ReactNode, createContext, useContext, useReducer } from "react";

type CurrencyContextProps = InitialStateProps & {
    updateFrom: (arg: string) => void;
    updateTo: (arg: string) => void;
    updateFromAmount: (arg: string) => void;
    updateToAmount: (arg: string) => void;
};

const CurrencyContext = createContext<CurrencyContextProps | null>(null);

type InitialStateProps = {
    from: string;
    to: string;
    fromAmount: string;
    toAmount: string;
};

const initialState: InitialStateProps = {
    from: "usd",
    to: "inr",
    fromAmount: "",
    toAmount: "",
};

type ActionProps =
    | {
          type: "FROM_AMOUNT" | "TO_AMOUNT";
          payload: {
              amount: string;
          };
      }
    | {
          type: "FROM" | "TO";
          payload: {
              type: string;
          };
      };

const reducer = (
    state: InitialStateProps,
    action: ActionProps
): InitialStateProps => {
    switch (action.type) {
        case "FROM":
            return { ...state, from: action.payload.type };
        case "TO":
            return { ...state, to: action.payload.type };
        case "FROM_AMOUNT":
            return { ...state, fromAmount: action.payload.amount };
        case "TO_AMOUNT":
            return { ...state, toAmount: action.payload.amount };
        default:
            return state;
    }
};

type CurrencyProviderProps = {
    children: ReactNode;
};

const CurrencyProvider = (props: CurrencyProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { from, to, fromAmount, toAmount } = state;

    const updateFrom = (arg: string) => {
        dispatch({ type: "FROM", payload: { type: arg } });
    };

    const updateTo = (arg: string) => {
        dispatch({ type: "TO", payload: { type: arg } });
    };

    const updateFromAmount = (arg: string) => {
        dispatch({ type: "FROM_AMOUNT", payload: { amount: arg } });
    };

    const updateToAmount = (arg: string) => {
        dispatch({ type: "TO_AMOUNT", payload: { amount: arg } });
    };

    return (
        <CurrencyContext.Provider
            value={{
                from,
                to,
                fromAmount,
                toAmount,
                updateFrom,
                updateTo,
                updateFromAmount,
                updateToAmount,
            }}
        >
            {props.children}
        </CurrencyContext.Provider>
    );
};

const useCurrency = () => {
    const ctx = useContext(CurrencyContext);
    if (!ctx)
        throw new Error(
            "You are trying to access the context outside of its provider"
        );
    return ctx;
};

export { CurrencyProvider, useCurrency };
