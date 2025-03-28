"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function FinishDay() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const intData = Math.round(data);

  return (
    <div className="mainDiv">
      <div>
        <Image
          src="/todo.png"
          width={200}
          height={0}
          style={{ height: "auto" }}
          alt="cute todo list"
        />
      </div>
      {data == 100 ? (
        <div>
          <h1>Congratulations !</h1>
          <h1>You have finish {intData}% of your things.</h1>
          <Link href={"/"}>
            <button>Go Home</button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>Keep Going !</h1>
          <h1>You have finish {intData}% of your things.</h1>
          <Link href={"/"}>
            <button>Go Home</button>
          </Link>
        </div>
      )}
    </div>
  );
}
