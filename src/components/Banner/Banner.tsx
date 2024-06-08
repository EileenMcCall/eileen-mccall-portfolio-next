import styles from "./Banner.module.css";

interface BannerProps {
    type: "primary" | "error",
    text: string
}

export default function Banner ({ type, text }: BannerProps) {
    return (
        <div className={styles[type]}>
            {text}
        </div>
    )
}