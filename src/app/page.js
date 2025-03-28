import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mainDiv">
      <h1>Hello :)</h1>
      <div>
        <Image
          src="/todo.png"
          width={200}
          height={0}
          style={{ height: "auto" }}
          alt="cute todo list"
        />
      </div>
      <h1> Welcome to the Cutest ToDo List ! </h1>
      <Link href="/dashboard">
        <button> Start </button>
      </Link>
    </div>
  );
}
