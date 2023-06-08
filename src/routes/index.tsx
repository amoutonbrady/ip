import { createServerData$ } from "solid-start/server";

export default function Home() {
  const ipAddress = createServerData$((_, event) => {
    return event.clientAddress;
  });

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1>{ipAddress()}</h1>
    </main>
  );
}
