"use client";

import { useState } from "react";

export default function Welcome() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Dynamic Welcome Message</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Welcome, {name}!</h2>
    </div>
  );
}