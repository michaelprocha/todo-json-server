import { useState } from "react";

export default function useTask() {
    const [completed, setCompleted] = useState<boolean>(false);

    return { setCompleted, completed };
}
