import Link from "next/link";
import DateComponent from "../components/date";

export default function Todo() {
  return (
    <div>
      <DateComponent />
      <Link href={"/"}>
        <button> Go Home </button>
      </Link>
    </div>
  );
}
