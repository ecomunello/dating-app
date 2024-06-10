"use client";
import { useEffect } from "react";
import { useSearchParams } from 'next/navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);
  const searchParams = useSearchParams()

  return (
    <section className="flex flex-col items-center justify-center gap-2 py-10">
      <img src="../../../error.png" />
      <h1 className="text-2xl text-center">Sembra qualcosa sia andato in errore</h1>
      <p>{searchParams.get('message')}</p>
      <button className="btn btn-outline btn-error"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </section>
  );
}
