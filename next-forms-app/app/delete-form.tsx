"use client";

import {
  experimental_useFormState as useFormState,
  experimental_useFormStatus as useFormStatus,
} from "react-dom";
import { deleteTodo } from "@/app/actions";
import { ReactNode, useEffect, useState } from "react";

const initialState = {
  message: null,
};

function DeleteButton() {
  const { pending } = useFormStatus();
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsRed(true), 3000);
  });

  return (
    <button
      type="submit"
      aria-disabled={pending}
      style={{ backgroundColor: isRed ? "red" : "black" }}
    >
      Delete
    </button>
  );
}

export function DeleteForm({
  id,
  todo,
  serverMoreInfo,
}: {
  id: number;
  todo: string;
  serverMoreInfo: ReactNode;
}) {
  const [state, formAction] = useFormState(deleteTodo, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="todo" value={todo} />
      <DeleteButton />
      {serverMoreInfo}
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
