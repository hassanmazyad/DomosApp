const wait = (ms: number): Promise<void> =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
    });

const checkAborted = (signal?: AbortSignal): void => {
    if (signal?.aborted) {
        throw new Error("Aborted");
    }
};

const checkWord = (word: string) => {
    if (!word) {
        throw new Error("Word cannot be empty");
    }
    if (!/^[A-Za-z0-9]+$/.test(word)) {
        throw new Error("Word must contain only letters and digits");
    }
};

const data: Set<string> = new Set(["Foo", "Bar", "Baz"]);

export const Backend = {
    list: async (signal?: AbortSignal): Promise<string[]> => {
        await wait(2000);
        checkAborted(signal);
        return [...data.values()];
    },
    add: async (word: string, signal?: AbortSignal): Promise<void> => {
        await wait(2000);
        checkAborted(signal);
        checkWord(word);
        if (data.has(word)) {
            throw new Error(`Duplicated word: ${word}`);
        }
        data.add(word);
    },
    addAndList: async (
        word: string,
        signal?: AbortSignal
    ): Promise<string[]> => {
        await Backend.add(word, signal);
        return [...data.values()];
    },
    addMulti: async (words: string[], signal?: AbortSignal): Promise<void> => {
        if (words.length <= 0) {
            return;
        }
        await wait(3000);
        checkAborted(signal);
        for (const word of words) {
            checkWord(word);
            if (data.has(word)) {
                throw new Error(`Duplicated word: ${word}`);
            }
        }
        for (const word of words) {
            data.add(word);
        }
    },
    addMultiAndList: async (
        words: string[],
        signal?: AbortSignal
    ): Promise<string[]> => {
        await Backend.addMulti(words, signal);
        return [...data.values()];
    },
} as const;