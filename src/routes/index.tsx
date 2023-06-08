import { createServerData$ } from "solid-start/server";

export default function Home() {
  const ipAddress = createServerData$((_, event) => {
    const headers: Record<string, string> = {};
    for (const [k, v] of event.request.headers.entries()) {
      headers[k] = v;
    }

    return headers;
  });

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <code class="whitespace-pre-wrap">
        {JSON.stringify(ipAddress(), null, 2)}
      </code>
    </main>
  );
}
