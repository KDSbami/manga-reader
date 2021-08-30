import styles from "../../styles/Home.module.css";

export default function Home({ title, text, imageUrl }) {
  // Scale ratio for card size is 1.4
  // TODO: Handle image sizes
  return (
    <div className="relative w-64 h-min m-4">
        <img
          src={imageUrl}
          className="w-64 filter grayscale hover:grayscale-0 rounded transform"
        />
      <div className={`z-10 absolute w-64 h-64 `}>
        <div>{title}</div>
        {text}
      </div>
    </div>
  );
}
