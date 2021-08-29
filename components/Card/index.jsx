import styles from "../../styles/Home.module.css";

export default function Home({ title, text }) {
  return (
    <div className="w-60 h-32 bg-red-300 rounded m-4">
      <div>{title}</div>
      {text}
    </div>
  );
}
