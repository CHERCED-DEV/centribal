import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Portal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const portal = document.getElementById("board");

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, portal || document.body) : null;
}

export { Portal };
