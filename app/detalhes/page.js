'use client';
import { Alert, AlertTitle, Typography } from "@mui/material";
import Header from "../lib/components/header/header";

const Index = () => {
    return (
        <div >
            <Header />
            <div className="my-8 px-4 ">
                <Alert severity="error">
                    <AlertTitle><strong>Erro nos parâmetros</strong></AlertTitle>
                    O parâmetro <strong>id</strong> não foi informado ou é inválido. <strong>Certifique se de digitá-lo corretamente.</strong>
                </Alert>
            </div>
        </div>
    )
}
export default Index;