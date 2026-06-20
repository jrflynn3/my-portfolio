// This file is a side effect module that Next runs when server starts before requests are made.
export async function register() {
  // Ensure env validation runs on server start since it's not imported
  // by any other files. Dynamic import in register is Next's preferred method.
  await import("@/env");
}
