import { CircularProgress } from "@mui/material";

export default function Loading() {
    return (
        <div className="grid place-items-center"
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 9999,
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}>
            <CircularProgress color="primary" />
        </div >
    )
}